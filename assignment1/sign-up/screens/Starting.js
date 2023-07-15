import { View, Text, Modal } from 'react-native';
import React from 'react';

const Starting = ({ styles }) => {
    return (
        <Modal visible={true}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Starting</Text>
                </View>
            </View>
        </Modal>
    )
};

export default Starting;