import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer} >
        <Header name={appName}></Header>
        <Input text={text} handleTextChange={handleTextChange} modalVisibility={modalVisibility} setVisible={setVisible} setInvisible={setInvisible} />
        {/* Re-render when text changes */}
        <Button title="Add A Goal" onPress={setVisible} />
      </View>
      <View style={styles.bottomContainer} >
        <Text style={styles.text}>Goals: {text}</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#FFC0CB",
    alignItems: "stretch"
  },
  text: {
    color: "#a09",
    fontSize: 20
  }
});
