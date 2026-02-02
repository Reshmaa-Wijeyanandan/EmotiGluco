import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { theme } from '../themes/theme'; 
import axios from 'axios';

// Backend API URL
const GLUCOSE_API_URL = "http://10.0.2.2:5000/glucose/log-glucose"; 
const FETCH_GLUCOSE_API_URL = "http://10.0.2.2:5000/glucose/get-glucose";

// Dummy user ID (Replace with real authentication system)
const USER_ID = "test_user_123";

const GlucoseScreen = () => {
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [glucoseRecords, setGlucoseRecords] = useState([]);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Fetch glucose data when the screen loads
  useEffect(() => {
    fetchGlucoseData();
  }, []);

  // Function to fetch glucose data from the backend
  const fetchGlucoseData = async () => {
    try {
      const response = await axios.get(FETCH_GLUCOSE_API_URL, { params: { user_id: USER_ID } });
      if (response.data && response.data.glucose_logs) {
        setGlucoseRecords(response.data.glucose_logs);
      }
    } catch (error) {
      console.error("Error fetching glucose data:", error);
    }
  };

  // Function to add glucose entry & send to backend
  const addGlucoseEntry = async () => {
    if (!glucoseLevel) {
      Alert.alert('Error', 'Please enter your glucose level');
      return;
    }
  
    const newEntry = {
      user_id: USER_ID,
      glucose_level: glucoseLevel,  // Match the backend field name
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };
  
    try {
      await axios.post(GLUCOSE_API_URL, newEntry);
      setGlucoseRecords([newEntry, ...glucoseRecords]);  // Update frontend
      setGlucoseLevel('');
      Alert.alert("Success", "Glucose entry added!");
    } catch (error) {
      console.error("Error logging glucose level:", error);
      Alert.alert("Error", "Failed to log glucose entry");
    }
  };

  return (
    <View style={theme.glucoseContainer}>
      <Text style={theme.glucoseTitle}>Glucose Tracking</Text>

      {/* Glucose Input */}
      <TextInput
        style={theme.glucoseInput}
        placeholder="Enter Glucose Level (mg/dL)"
        keyboardType="numeric"
        value={glucoseLevel}
        onChangeText={setGlucoseLevel}
      />

      {/* Date Picker */}
      {/* <TouchableOpacity style={theme.glucoseDateButton} onPress={() => setShowDatePicker(true)}>
        <Text style={theme.glucoseDateText}>Select Date</Text>
      </TouchableOpacity>
      
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )} */}

      {/* Add Entry Button */}
      <TouchableOpacity style={theme.glucoseAddButton} onPress={addGlucoseEntry}>
        <Text style={theme.glucoseButtonText}>Add Entry</Text>
      </TouchableOpacity>

      {/* Displaying Glucose History */}
      <FlatList
        data={glucoseRecords}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={theme.glucoseRecordItem}>
            <Text style={theme.glucoseRecordText}> {item.date} - {item.time}</Text>
            <Text style={theme.glucoseRecordText}> {item.level} mg/dL</Text>
          </View>
        )}
      />
    </View>
  );
};

export default GlucoseScreen;
