import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';
import { React, useState } from 'react';

const Input = ({ handleTextChange, modalVisibility, setVisible, setInvisible }) => {

    const [text, setText] = useState("")
    const processStoredText = (text) => {
        handleTextChange(text);
        setText(text);
        setInvisible();
    }

    return (
        <Modal visible={modalVisibility}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Type something here" onChangeText={(text) => setText(text)} value={text} />
                <Button title="Confirm" onPress={() => processStoredText(text)} />
                <Button title="Cancel" onPress={() => processStoredText("")} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: 1,
        width: 200
    }
});

export default Input