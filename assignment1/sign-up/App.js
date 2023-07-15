import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
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
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const finalizeEmail = (newEmail) => {
    setUserEmail(newEmail);
  };
  const finalizePhone = (newPhone) => {
    setUserPhone(newPhone);
  };

  return (
    <View style={styles.centeredView}>
      {screen === "starting" && <Starting styles={styles} handleRendering={toConfirm} finalizeEmail={finalizeEmail} finalizePhone={finalizePhone} />}
      {screen === "confirm" && <Confirm styles={styles} handleRendering={toFinish} />}
      {screen === "finish" && <Finish styles={styles} handleRendering={toStarting} />}
      <StatusBar style="auto" />
    </View>
  )
};

const styles = StyleSheet.create({
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
  }
});

export default App;