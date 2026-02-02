import { StyleSheet } from 'react-native';

export const theme = StyleSheet.create({
  /** General App Styling **/
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#7BCCD4',
  },
  tagline: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  image: {
    width: 250,
    height: 200,
    marginVertical: 20,
  },

  /** Authentication Screen Styling **/
  authContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7BCCD4',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#7BCCD4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleText: {
    color: '#333',
    marginTop: 10,
    fontSize: 16,
  },
  toggleLink: {
    color: '#7BCCD4',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 14,
  },

  /** Home Screen Styling (Instagram-like feed) **/
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'left',
  },
  postContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#7BCCD4',
  },
  postText: {
    fontSize: 16,
    color: '#333',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
  caption: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    fontStyle: 'italic',
  },

  /** Profile Screen Styling **/
  profileContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileOptionText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#333',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D32F2F',
    paddingVertical: 12,
    justifyContent: 'center',
    borderRadius: 8,
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
  logoutText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },

  /** 🎮 Tic Tac Toe Game Styles **/
  ticTacToeStyles: {
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
    board: {
      width: 300,
      height: 300,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    cell: {
      width: '33.3%',
      height: '33.3%',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#333',
    },
    cellText: {
      fontSize: 36,
      fontWeight: 'bold',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginTop: 20,
    },
    resetButton: {
      backgroundColor: '#7BCCD4',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    resetButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    exitButton: {
      backgroundColor: '#D32F2F',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    exitButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  },

  /** 🎮 Rock Paper Scissors Game Styles **/
  rockPaperScissors: {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#7BCCD4',
      marginBottom: 10,
    },
    score: {
      fontSize: 16,
      color: '#333',
      marginVertical: 5,
    },
    instruction: {
      fontSize: 18,
      marginTop: 20,
      marginBottom: 10,
      color: '#333',
    },
    choicesContainer: {
      flexDirection: 'row',
      marginVertical: 15,
    },
    choiceButton: {
      backgroundColor: '#7BCCD4',
      padding: 12,
      margin: 5,
      borderRadius: 8,
    },
    choiceText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    resultText: {
      fontSize: 16,
      marginTop: 10,
      color: '#333',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginTop: 20,
    },
    resetButton: {
      backgroundColor: '#7BCCD4',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    resetButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    exitButton: {
      backgroundColor: '#D32F2F',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    exitButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  },

  /** 🏠 Profile Screen **/
  profile: {
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F9F9F9',
      padding: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333',
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      marginBottom: 20,
    },
    option: {
      width: '100%',
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    optionContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionIcon: {
      width: 30,
      height: 30,
      marginRight: 15,
    },
    optionText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    optionSubText: {
      fontSize: 14,
      color: '#666',
    },
  },

  /** ⚙️ Profile Settings Screen **/
  profileSettings: {
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      padding: 12,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      marginBottom: 15,
      backgroundColor: '#fff',
    },
    saveButton: {
      backgroundColor: '#7BCCD4',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 10,
    },
    saveButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    backButton: {
      backgroundColor: '#ccc',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    backButtonText: {
      color: '#333',
      fontSize: 16,
      fontWeight: 'bold',
    },
  },

  /** Glucose Tracking Styles **/
  glucoseContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  glucoseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: 20,
  },
  glucoseInput: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  glucoseDateButton: {
    backgroundColor: '#7BCCD4',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  glucoseDateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  glucoseAddButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  glucoseButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  glucoseRecordItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  glucoseRecordText: {
    fontSize: 16,
    color: '#333',
  },
});
