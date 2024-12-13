import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [rollNumber, setRollNumber] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (rollNumber.trim()) {
      navigation.navigate('Home', { rollNumber });
    } else {
      Alert.alert('Error', 'Please enter your roll number.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Roll Number"
        keyboardType="numeric"
        value={rollNumber}
        onChangeText={setRollNumber}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default LoginScreen;
