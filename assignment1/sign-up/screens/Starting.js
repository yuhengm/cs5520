import { View, Text, Modal } from "react-native";
import React from "react";
import ButtonSignUp from "../components/ButtonSignUp";

const Starting = ({ styles, handleRendering }) => {
    return (
        <View>
            <Text style={styles.screenHeading}>Sign Up</Text>
            <Modal visible={true}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Starting</Text>

                        <ButtonSignUp buttonText="Starting button" />
                    </View>
                </View>
            </Modal>
        </View>
    )
};

export default Starting;