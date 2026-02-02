import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { theme } from '../themes/theme';

const API_BASE_URL = "http://10.0.2.2:5000/auth";

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    full_name: "Test User",  // Replace with static user data for now
    email: "testuser@example.com"
  });

  return (
    <View style={theme.profileContainer}>

      {/* Logout Button */}
      <TouchableOpacity 
        style={theme.logoutButton} 
        onPress={() => {
          Alert.alert("Logged Out", "You have been logged out.");
          navigation.replace('Auth');  // Redirect to login screen
        }}
      >
        <Text style={theme.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
