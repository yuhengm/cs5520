import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';

const ButtonSignUp = () => {
    return (
        <Pressable
            style={[styles.button, styles.buttonClose]}>
            {/* onPress={() => setModalVisible(!modalVisible)} */}
            <Text style={styles.textStyle}>Button</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default ButtonSignUp;