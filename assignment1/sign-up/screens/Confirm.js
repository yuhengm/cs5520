import { View, Text, Modal } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import CustomerButton from "../components/CustomerButton";

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
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
            />
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>You have entered:</Text>
                    <Text style={styles.modalText}>{userInfo.email}</Text>
                    <Text style={styles.modalText}>{userInfo.phone}</Text>
                    <Text style={styles.modalText}>Please confirm they are correct.</Text>

                    <View>
                        <CustomerButton title="Go back" color="#EA5455" onPress={handleGoBack} />
                        <CustomerButton title="Confirm" color="#1572A1" onPress={handleConfirm} />
                        <CustomerButton title="Finish Later" color="#1572A1" onPress={handleFinishLater} />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default Confirm;