import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '../themes/theme';

const ProfileSettings = ({ navigation }) => {
  const [name, setName] = useState('Reney Benny');
  const [email, setEmail] = useState('reneybenny@example.com');
  const [bio, setBio] = useState('Illustrator and Designer');

  return (
    <View style={theme.profileSettings.container}>
      <Text style={theme.profileSettings.title}>Edit Profile</Text>

      <TextInput style={theme.profileSettings.input} value={name} onChangeText={setName} placeholder="Full Name" />
      <TextInput style={theme.profileSettings.input} value={email} onChangeText={setEmail} placeholder="Email" />
      <TextInput style={theme.profileSettings.input} value={bio} onChangeText={setBio} placeholder="Bio" multiline />

      <TouchableOpacity style={theme.profileSettings.saveButton} onPress={() => alert('Profile Updated!')}>
        <Text style={theme.profileSettings.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={theme.profileSettings.backButton} onPress={() => navigation.goBack()}>
        <Text style={theme.profileSettings.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileSettings;
