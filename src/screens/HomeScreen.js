import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const { rollNumber } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome, Roll Number {rollNumber}!</Text>
      <Text style={styles.section}>Events</Text>
      <Text style={styles.section}>News</Text>
      <Text style={styles.section}>Gallery</Text>
      <Text style={styles.section}>Reward Points</Text>
      <Button title="Open Menu" onPress={() => navigation.toggleDrawer()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    fontSize: 16,
    marginBottom: 12,
  },
});

export default HomeScreen;
