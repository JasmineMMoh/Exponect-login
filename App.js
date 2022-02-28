import React from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is ExpoNet!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
