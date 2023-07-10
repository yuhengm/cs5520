import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { React, useState } from 'react';

const Input = ({ handleTextChange }) => {

    const checkButton = () => {
        console.log("button pressed");
    }

    return (
        <View>
            <TextInput style={styles.input} placeholder="Type something here" onChangeText={handleTextChange} />
            <Button title="Confirm" onPress={checkButton} />
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