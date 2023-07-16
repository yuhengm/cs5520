import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import Starting from "./screens/Starting";
import Confirm from "./screens/Confirm";
import Finish from "./screens/Finish";

const App = () => {
  // Switch screens programmatically
  const [screen, setScreen] = useState("starting");
  const toStarting = () => { setScreen("starting") };
  const toConfirm = () => { setScreen("confirm") };
  const toFinish = () => { setScreen("finish") };

  // Store user inputs globally
  const [userInfo, setUserInfo] = useState({ "email": "", "phone": "" });
  const handleUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
  }

  // User decision whether to sign up now (true) or later (false)
  const [signUp, setSignUp] = useState(true);
  const handleSignUpState = (state) => {
    setSignUp(state);
  };

  return (
    <View>
      <View style={styles.topContainer}>
        <Text>A</Text>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={styles.background}
        />
        <Text>B</Text>
      </View>
      <View style={styles.topContainer}>
        {screen === "starting" && <Starting styles={styles} toConfirm={toConfirm} userInfo={userInfo} handleUserInfo={handleUserInfo} />}
        {screen === "confirm" && <Confirm styles={styles} toStarting={toStarting} toFinish={toFinish} userInfo={userInfo} handleSignUpState={handleSignUpState} />}
        {screen === "finish" && <Finish styles={styles} toStarting={toStarting} signUp={signUp} userInfo={userInfo} handleUserInfo={handleUserInfo} />}
        <StatusBar style="auto" />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  dummy: {},
  topContainer: {
    flex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15
  },
  screenHeadingContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2
  },
  screenHeadingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  signupButtonContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    fontSize: 10
  },
  logo: {
    width: 100,
    height: 100
  }
});

export default App;