import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../../themes/theme'; // Import theme file

const choices = ['Rock', 'Paper', 'Scissors'];

const RockPaperScissors = ({ navigation }) => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const playGame = (choice) => {
    if (playerScore === 3 || computerScore === 3) return; // Stop game after Best of 3

    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(randomChoice);

    const winner = determineWinner(choice, randomChoice);

    if (winner === 'player') {
      setPlayerScore((prev) => prev + 1);
    } else if (winner === 'computer') {
      setComputerScore((prev) => prev + 1);
    }

    checkGameOver(playerScore + (winner === 'player' ? 1 : 0), computerScore + (winner === 'computer' ? 1 : 0));
  };

  const determineWinner = (player, computer) => {
    if (player === computer) return 'draw';
    if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      return 'player';
    } else {
      return 'computer';
    }
  };

  const checkGameOver = (pScore, cScore) => {
    if (pScore === 3) {
      Alert.alert('Game Over', '🎉 You won the Best of 3!', [{ text: 'Restart', onPress: resetGame }]);
    } else if (cScore === 3) {
      Alert.alert('Game Over', '😢 You lost the Best of 3.', [{ text: 'Restart', onPress: resetGame }]);
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setPlayerScore(0);
    setComputerScore(0);
  };

  return (
    <View style={theme.rockPaperScissors.container}>
      <Text style={theme.rockPaperScissors.title}>Rock Paper Scissors</Text>
      <Text style={theme.rockPaperScissors.subtitle}>Best of 3</Text>

      <Text style={theme.rockPaperScissors.score}>Your Score: {playerScore}</Text>
      <Text style={theme.rockPaperScissors.score}>Computer Score: {computerScore}</Text>

      <Text style={theme.rockPaperScissors.instruction}>Choose your move:</Text>
      <View style={theme.rockPaperScissors.choicesContainer}>
        {choices.map((choice) => (
          <TouchableOpacity key={choice} style={theme.rockPaperScissors.choiceButton} onPress={() => playGame(choice)}>
            <Text style={theme.rockPaperScissors.choiceText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={theme.rockPaperScissors.resultText}>Your Choice: {playerChoice || '---'}</Text>
      <Text style={theme.rockPaperScissors.resultText}>Computer's Choice: {computerChoice || '---'}</Text>

      <View style={theme.rockPaperScissors.buttonContainer}>
        {/* Restart Game Button */}
        <TouchableOpacity style={theme.rockPaperScissors.resetButton} onPress={resetGame}>
          <Text style={theme.rockPaperScissors.resetButtonText}>Restart Game</Text>
        </TouchableOpacity>

        {/* Exit Game Button */}
        <TouchableOpacity style={theme.rockPaperScissors.exitButton} onPress={() => navigation.goBack()}>
          <Text style={theme.rockPaperScissors.exitButtonText}>Exit Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RockPaperScissors;
