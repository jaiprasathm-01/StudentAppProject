import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Screen</Text>
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
      <Button title="Help" onPress={() => navigation.navigate('Help')} />
      <Button title="Logout" onPress={() => navigation.navigate('Logout')} />
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
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ProfileScreen;
