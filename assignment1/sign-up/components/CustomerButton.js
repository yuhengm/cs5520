import { StyleSheet, View, Button } from 'react-native';
import React from 'react';

const CustomerButton = ({ title, color, onPress }) => {
    return (
        <View style={styles.buttonBackground}>
            <Button title={title} color={color} onPress={onPress} />
        </View>
    )
};
const styles = StyleSheet.create({
    buttonBackground: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        borderRadius: 5,
        borderColor: "#7C9D96",
        borderWidth: 1
    }
});

export default CustomerButton;