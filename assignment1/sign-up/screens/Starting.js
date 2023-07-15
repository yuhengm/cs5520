import { View, Text, Modal, Button } from "react-native";
import React from "react";
import ButtonSignUp from "../components/ButtonSignUp";
import ScreenHeader from "../components/ScreenHeader";

const Starting = ({ styles, handleRendering }) => {
    return (
        <View>
            <Modal visible={true}>
                <View style={styles.centeredView}>
                    <ScreenHeader styles={styles} headerText="Sign Up" />

                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Starting</Text>

                        <Button
                            title="Reset"
                            color="red"
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
};

export default Starting;