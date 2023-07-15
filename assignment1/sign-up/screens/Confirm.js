import { View, Text, Modal } from "react-native";
import React from "react";

const Confirm = ({ styles, handleRendering, userInfo }) => {
    return (
        <Modal visible={true}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{userInfo.email}</Text>
                    <Text style={styles.modalText}>{userInfo.phone}</Text>
                </View>
            </View>
        </Modal>
    )
};

export default Confirm;