import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';

export default function App() {

  const appName = "CS 5220"
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Header name={appName}></Header>
      <Text>Text Child</Text>
      <TextInput style={styles.input} placeholder="Type something here" onChangeText={newText => setText(newText)} defaultValue={text} />
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
