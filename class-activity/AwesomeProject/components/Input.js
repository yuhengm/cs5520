import { View, TextInput, StyleSheet, Button } from 'react-native';
import { React, useState } from 'react';

const Input = ({ handleTextChange }) => {

    const [text, setText] = useState("")
    const processStoredText = (text) => {
        handleTextChange(text);
        setText(text);
    }

    return (
        <View>
            <TextInput style={styles.input} placeholder="Type something here" onChangeText={(text) => setText(text)} value={text} />
            <Button title="Confirm" onPress={() => processStoredText(text)} />
            <Button title="Cancel" onPress={() => processStoredText("")} />
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