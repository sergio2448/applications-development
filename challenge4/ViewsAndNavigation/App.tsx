import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import HomeComponent from './src/components/HomeComponent';
import { useState } from 'react';
import TaskDetail from './src/screens/TaskDetail';
import Tasks from './src/screens/Tasks';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });
  const [taskId, setTaskId] = useState<number | null>(null);

  const handleTaskSelected = (taskId) => {
    setTaskId(taskId);
  };

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <>
      {taskId ? (
        <TaskDetail />
      ) : (
        <Tasks taskId={taskId} onTaskSelected={handleTaskSelected} />
      )}
    </>
  );
}

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
