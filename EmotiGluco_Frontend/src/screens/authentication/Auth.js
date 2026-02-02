import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';
import axios from 'axios';
import { API_URL } from '@env';
import { theme } from '../../themes/theme';

const AuthScreen = ({ navigation }) => {
  const [screenState, setScreenState] = useState('getStarted'); // 'getStarted', 'login', 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');

  // Auto transition from Get Started to Login in 3 seconds
  useEffect(() => {
    if (screenState === 'getStarted') {
      const timer = setTimeout(() => setScreenState('login'), 3000);
      return () => clearTimeout(timer);
    }
  }, [screenState]);

  // Handle login
  const handleLogin = async () => {
    console.log(`Sending request to: ${API_URL}/auth/login`);
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      console.log('Response:', response.data);
  
      if (response.data.message === "Login successful") {
        Alert.alert("Success", "Logged in successfully!");
        
        navigation.reset({
          index: 0,
          routes: [{ name: "Main" }],
        });
      } else {
        Alert.alert("Error", response.data.error || "Invalid credentials");
      }
    } catch (error) {
      Alert.alert("Error", "Login failed. Please try again.");
      console.error(error);
    }
  };
  

  // Handle registration
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        fullName,
        email,
        password,
        confirm_password: confirmPassword,
      });

      if (response.data.message === "Registration successful") {
        Alert.alert("Success", "Registered successfully!");
        setScreenState('login');
      } else {
        Alert.alert("Error", response.data.error || "Registration failed.");
      }
    } catch (error) {
      Alert.alert("Error", "Registration failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <View style={theme.container}>
      {/* Get Started Screen */}
      {screenState === 'getStarted' && (
        <View style={theme.center}>
          <Text style={theme.appName}>EmotiGluco</Text>
          <Image source={require('../../assets/GetStartedImage.jpg')} style={theme.image} />
          <Text style={theme.tagline}>Your Wellbeing, Your Control!</Text>
        </View>
      )}

      {/* Login / Register Screen */}
      {screenState !== 'getStarted' && (
        <View style={theme.authContainer}>
          <Text style={theme.title}>{screenState === 'login' ? 'Log In' : 'Create Account'}</Text>
          {screenState === 'login'}

          {/* Full Name for Registration */}
          {screenState === 'register' && (
            <TextInput style={theme.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
          )}

          {/* Email Input */}
          <TextInput style={theme.input} placeholder="Email Address" keyboardType="email-address" value={email} onChangeText={setEmail} />

          {/* Password Input */}
          <TextInput style={theme.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

          {/* Confirm Password for Register */}
          {screenState === 'register' && (
            <TextInput style={theme.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
          )}


          {/* Submit Button */}
          <TouchableOpacity style={theme.button} onPress={screenState === 'login' ? handleLogin : handleRegister}>
            <Text style={theme.buttonText}>{screenState === 'login' ? 'Login' : 'Register'}</Text>
          </TouchableOpacity>

          {/* Toggle Between Login & Register */}
          <TouchableOpacity onPress={() => setScreenState(screenState === 'login' ? 'register' : 'login')}>
            <Text style={theme.toggleText}>
              {screenState === 'login' ? "Don't have an account? " : "Already have an account? "}
              <Text style={theme.toggleLink}>{screenState === 'login' ? 'Register' : 'Login'}</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AuthScreen;
