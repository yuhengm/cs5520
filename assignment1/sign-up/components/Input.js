import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";

const Input = ({ placeholder, displayValue, handleChangeEmail, errorMessage }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{placeholder}</Text>
            <TextInput
                style={styles.textInput}
                value={displayValue}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={value => {
                    handleChangeEmail(value);
                }}
            />

            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 200,
        alignContent: "flex-start",
        margin: 10
    },
    textInput: {
        borderBottomColor: "#000",
        borderBottomWidth: 1
    },
    text: {
        fontSize: 18
    },
    error: {
        color: "grey"
    }
});

export default Input;