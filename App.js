import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { HomeScreen } from './src/screens/Home';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <HomeScreen/>
    </SafeAreaView>
  );
};
