import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../../themes/theme'; // Import theme file

const TicTacToe = ({ navigation }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handlePress = (index) => {
    if (board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = checkWinner(newBoard);
    if (winner) {
      Alert.alert('Game Over', `Player ${winner} wins!`, [{ text: 'Restart', onPress: resetGame }]);
    } else if (!newBoard.includes(null)) {
      Alert.alert('Game Over', 'It\'s a Draw!', [{ text: 'Restart', onPress: resetGame }]);
    }
  };

  const checkWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ];
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <View style={theme.ticTacToeStyles.container}>
      <Text style={theme.ticTacToeStyles.title}>Tic-Tac-Toe</Text>
      <View style={theme.ticTacToeStyles.board}>
        {board.map((cell, index) => (
          <TouchableOpacity key={index} style={theme.ticTacToeStyles.cell} onPress={() => handlePress(index)}>
            <Text style={theme.ticTacToeStyles.cellText}>{cell}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={theme.ticTacToeStyles.buttonContainer}>
        {/* Restart Game Button */}
        <TouchableOpacity style={theme.ticTacToeStyles.resetButton} onPress={resetGame}>
            <Text style={theme.ticTacToeStyles.resetButtonText}>Restart Game</Text>
        </TouchableOpacity>

        {/* Exit Game Button */}
        <TouchableOpacity style={theme.ticTacToeStyles.exitButton} onPress={() => navigation.goBack()}>
            <Text style={theme.ticTacToeStyles.exitButtonText}>Exit Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TicTacToe;
