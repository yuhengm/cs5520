import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, SafeAreaView, ScrollView, FlatList } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import GoalItem from './components/GoalItem';

export default function App() {

  const appName = "CS 5220"
  const [text, setText] = useState([]) // async
  const [modalVisibility, setModalVisibility] = useState(false)
  const setVisible = () => {
    setModalVisibility(true);
  }
  const setInvisible = () => {
    setModalVisibility(false);
  }
  const handleTextChange = (newText) => {
    if (newText) {
      const newItem = { idx: text.length, content: newText };
      // console.log([...text, newItem])
      setText([...text, newItem]);
    }
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
        <Text style={styles.text}>Goals:</Text>
        {/* <ScrollView >
          {text.map((item) => {
            return (
              <Text>{item.content}</Text>
            )
          })}
        </ScrollView> */}
        <FlatList data={text} renderItem={({ item }) => {
          return (
            <GoalItem item={item}></GoalItem>
          )
        }}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 10,
    marginTop: 10
  },
  topContainer: {
    flex: 1,
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#FFC0CB",
    alignItems: 'center'
  },
  text: {
    color: "#a09",
    fontSize: 20,
    margin: 10,
    padding: 10,
    backgroundColor: "grey"
  }
});
