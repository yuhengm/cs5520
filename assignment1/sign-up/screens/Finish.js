import { View, Text, Modal } from 'react-native';
import React from 'react';

const Finish = ({ styles, handleRendering }) => {
    return (
        <Modal visible={true}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Finish</Text>
                </View>
            </View>
        </Modal>
    )
};

export default Finish;