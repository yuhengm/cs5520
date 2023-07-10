import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {

  const appName = "CS 5220"
  const [text, setText] = useState("") // async
  const [modalVisibility, setModalVisibility] = useState(false)
  const setVisible = () => {
    setModalVisibility(true);
  }
  const setInvisible = () => {
    setModalVisibility(false);
  }
  const handleTextChange = (newText) => {
    setText(newText)
  }

  return (
    <View style={styles.container}>
      <Header name={appName}></Header>
      <Input text={text} handleTextChange={handleTextChange} modalVisibility={modalVisibility} setVisible={setVisible} setInvisible={setInvisible} />
      {/* Re-render when text changes */}
      <Text>Goal: {text}</Text>
      <Button title="Add A Goal" onPress={setVisible} />
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
