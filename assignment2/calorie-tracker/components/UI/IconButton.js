import { StyleSheet, View, Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";

import ColorScheme from '../../constants/ColorScheme';

const IconButton = ({ icon, size, color, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
            android_ripple={{ color: ColorScheme.TextInactive, foreground: true }}
        >
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} size={size} color={color} />
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2,
        margin: 8,
    },
    pressed: {
        opacity: 0.75,
    },
});

export default IconButton;