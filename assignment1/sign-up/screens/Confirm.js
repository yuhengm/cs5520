import { View, Text, Modal, Button } from "react-native";
import React from "react";

const Confirm = ({ styles, toStarting, toFinish, userInfo, handleSignUpState }) => {
    const handleGoBack = () => {
        toStarting();
    };
    const handleConfirm = () => {
        handleSignUpState(true);
        toFinish();
    };
    const handleFinishLater = () => {
        handleSignUpState(false);
        toFinish();
    }

    return (
        <Modal visible={true}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>You have entered:</Text>
                    <Text style={styles.modalText}>{userInfo.email}</Text>
                    <Text style={styles.modalText}>{userInfo.phone}</Text>
                    <Text style={styles.modalText}>Please confirm they are correct.</Text>

                    <View style={styles.signupButtonContainer}>
                        <Button title="Go back" color="red" onPress={handleGoBack} />
                        <Button title="Confirm" color="blue" onPress={handleConfirm} />
                        <Button title="Finish Later" color="blue" onPress={handleFinishLater} />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default Confirm;