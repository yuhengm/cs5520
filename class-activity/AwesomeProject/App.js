import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {

  const appName = "CS 5220"
  const [text, setText] = useState(""); // async
  const handleTextChange = (newText) => {
    setText(newText)
  }

  return (
    <View style={styles.container}>
      <Header name={appName}></Header>
      <Input handleTextChange={handleTextChange} />
      {/* Re-render when text changes */}
      <Text>Received: {text}</Text>
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
  input: {
    borderBottomWidth: 1,
    width: 200
  }
});
