import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeComponent from './src/components/HomeComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <HomeComponent />
      <StatusBar style="auto" />
    </View>
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
