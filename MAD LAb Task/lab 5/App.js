/*import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GameScreen = () => {
  const [inputValue, setInputValue] = useState('');

  const handleNumberPress = (number) => setInputValue(prevValue => prevValue + number);
  const handleClearPress = () => setInputValue('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Number Game</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="numeric"
        placeholder="Enter a number"
      />
      <View style={styles.buttonContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
          <Button
            key={number}
            title={number.toString()}
            onPress={() => handleNumberPress(number.toString())}
          />
        ))}
        <Button
          title="Clear"
          onPress={handleClearPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default GameScreen;


////////////////*/
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'cspeople' && password === 'computerscience') {
      Alert.alert('Success', 'Login successful');
    } else {
      Alert.alert('Error', 'Wrong username or password');
    }
  };

  const submitdisable = !username || !password;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Form</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button
        title="Submit Button"
        onPress={handleLogin}
        disabled={submitdisable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '50',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});

export default LoginScreen;

