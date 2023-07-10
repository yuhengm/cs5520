import { View, TextInput, StyleSheet, Button } from 'react-native';
import { React, useState } from 'react';

const Input = ({ handleTextChange }) => {

    const [text, setText] = useState("")

    return (
        <View>
            <TextInput style={styles.input} placeholder="Type something here" onChangeText={(text) => setText(text)} />
            <Button title="Confirm" onPress={() => handleTextChange(text)} />
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