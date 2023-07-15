import { View, Text, Modal } from 'react-native';
import React from 'react';
import ButtonSignUp from '../components/ButtonSignUp';

const Starting = ({ styles, handleRendering }) => {
    return (
        <Modal visible={true}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Starting</Text>

                    <ButtonSignUp />
                </View>
            </View>
        </Modal>
    )
};

export default Starting;