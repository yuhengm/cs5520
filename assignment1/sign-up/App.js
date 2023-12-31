import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
    <View style={styles.topContainer}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#E9B384", "#F4F2DE", "#A1CCD1"]}
        style={styles.background}
      />
      <View>
        {screen === "starting" && <Starting styles={styles} toConfirm={toConfirm} userInfo={userInfo} handleUserInfo={handleUserInfo} />}
        {screen === "confirm" && <Confirm styles={styles} toStarting={toStarting} toFinish={toFinish} userInfo={userInfo} handleSignUpState={handleSignUpState} />}
        {screen === "finish" && <Finish styles={styles} toStarting={toStarting} signUp={signUp} userInfo={userInfo} handleUserInfo={handleUserInfo} />}
        <StatusBar style="auto" />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFFBF5",
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
    marginBottom: 15,
    fontSize: 18
  },
  screenHeadingContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: "#7C9D96",
    borderWidth: 2,
    backgroundColor: "transparent",
  },
  screenHeadingText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#7C9D96"
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