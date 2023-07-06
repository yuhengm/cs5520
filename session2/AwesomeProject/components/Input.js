import { View, Text, TextInput, StyleSheet } from 'react-native'
import { React, useState } from 'react'

const Input = () => {

    const [text, setText] = useState(""); // async

    return (
        <View>
            <TextInput style={styles.input} placeholder="Type something here" onChangeText={newText => setText(newText)} defaultValue={text} />
            <Text>Received: {text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        width: 200
    }
});

export default Input