import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import Starting from './screens/Starting';
import Confirm from './screens/Confirm';
import Finish from './screens/Finish';

const App = () => {
  const [screen, setScreen] = useState("starting");
  const toStarting = () => { setScreen("starting") };
  const toContinue = () => { setScreen("confirm") };
  const toFinish = () => { setScreen("finish") };

  return (
    <View style={styles.centeredView}>
      <Text>test</Text>
      {screen === "starting" && <Starting styles={styles} />}
      {screen === "finish" && <Finish styles={styles} />}
      {screen === "confirm" && <Confirm styles={styles} />}
      <StatusBar style="auto" />
    </View>
  )
};

const styles = StyleSheet.create({
  dummy: {

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;