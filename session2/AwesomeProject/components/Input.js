import { View, Text, TextInput, StyleSheet } from 'react-native';
import { React, useState } from 'react';

const Input = ({ handleTextChange }) => {

    return (
        <View>
            <TextInput style={styles.input} placeholder="Type something here" onChangeText={handleTextChange} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        width: 200
    }
});

export default Input