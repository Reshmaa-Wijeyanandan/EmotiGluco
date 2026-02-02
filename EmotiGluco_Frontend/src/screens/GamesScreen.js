import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GamesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Game</Text>

      {/* Game 1 - Tic Tac Toe */}
      <TouchableOpacity style={styles.gameButton} onPress={() => navigation.navigate('TicTacToe')}>
        <Text style={styles.gameText}>🎮 Tic-Tac-Toe</Text>
      </TouchableOpacity>

      {/* Game 2 - Rock Paper Scissors */}
      <TouchableOpacity style={styles.gameButton} onPress={() => navigation.navigate('RockPaperScissors')}>
        <Text style={styles.gameText}>🎲 Rock Paper Scissors</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Game Selection Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  gameButton: {
    backgroundColor: '#7BCCD4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  gameText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default GamesScreen;
