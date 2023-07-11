import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Header = ({ name }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Welcome to {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        borderColor: "darkslateblue",
        borderWidth: 3,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "darkslateblue"
    }
});

export default Header