import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeComponent from '../components/HomeComponent';
import { StatusBar } from 'expo-status-bar';

const Tasks = ({ taskId, onTaskSelected }) => {
  return (
    <View>
      <Text style={styles.title}>Welcome!</Text>
      <HomeComponent onTaskSelected={onTaskSelected} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginVertical: 36,
    color: '#1e88e5',
    fontSize: 36,
    fontWeight: '900',
  },
});
