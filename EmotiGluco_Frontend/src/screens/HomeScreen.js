import React from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity } from 'react-native';
import { theme } from '../themes/theme';
import axios from 'axios';

// Backend API URLs
const EMOTION_API_URL = "http://10.0.2.2:5000/emotions/detect-emotion";
const NOTIFICATION_API_URL = "http://10.0.2.2:5000/notifications/send-notification";

// Sample user ID (replace with real user authentication)
const USER_ID = "test_user_123";

// Sample posts categorized by emotions
const posts = [
  { id: '1', content: 'Just another day, going with the flow.', emotion: 'neutral' },
  { id: '2', content: 'I feel so Happy 😊', emotion: 'joy' },
  { id: '3', content: 'Sometimes, all you need is a good cry and a fresh start. 🌧️', emotion: 'sadness' },
  { id: '4', content: 'Why does everything feel like a battle today? 😡', emotion: 'anger' },
  { id: '5', content: 'Love is not about how many days, months, or years you have been together. It’s about how much you love each other every day. ❤️', emotion: 'love' },
  { id: '6', content: 'Wow! I never expected this! 😲', emotion: 'surprise' },
  { id: '7', content: 'Life goes on, no matter what.', emotion: 'neutral' },
  { id: '8', content: 'A smile can change your whole day! 😃', emotion: 'joy' },
  { id: '9', content: 'Some nights feel longer than others…', emotion: 'sadness' },
  { id: '10', content: 'Ugh, this is so frustrating! 🤬', emotion: 'anger' },
  { id: '11', content: 'Love yourself first, and everything else falls into line. 💖', emotion: 'love' },
  { id: '12', content: 'I can’t believe this just happened! 😱', emotion: 'surprise' },
];

// Function to send detected emotion to the backend and trigger notification
const sendEmotionData = async (text) => {
  try {
    const response = await axios.post(EMOTION_API_URL, { text, user_id: USER_ID });

    if (response.data && response.data.emotion) {
      // If emotion is detected, trigger push notification
      await axios.post(NOTIFICATION_API_URL, {
        user_id: USER_ID,
        message: `Detected emotion: ${response.data.emotion} from post`,
      });

      Alert.alert("Mood Alert", `Emotion detected: ${response.data.emotion}`);
    }
  } catch (error) {
    console.error("Error detecting emotion:", error);
  }
};

// Render function for posts with tap-to-detect logic
const renderPost = ({ item }) => {
  return (
    <TouchableOpacity
      style={theme.postContainer}
      onPress={() => sendEmotionData(item.content)} // Only triggers on tap
    >
      <Text style={theme.postText}>{item.content}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  return (
    <View style={theme.homeContainer}>
      {/* Greeting without user name */}
      <Text style={theme.greeting}>Hello 👋</Text>

      {/* Feed */}
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
