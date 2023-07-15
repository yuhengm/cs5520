import { View, Text, TextInput } from "react-native";
import React from "react";

const Input = ({ placeholder, displayValue, handleChangeEmail, errorMessage }) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                value={displayValue}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={value => {
                    handleChangeEmail(value);
                }}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    )
};

export default Input;