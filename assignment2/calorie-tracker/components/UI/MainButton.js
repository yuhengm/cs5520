import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';

import ColorScheme from '../../constants/ColorScheme';
import { pressableStyles } from '../../constants/StylesTemplate';

const MainButton = ({ children, onPress, mode, containerStyle }) => {
    return (
        <View style={containerStyle}>
            <Pressable
                android_ripple={{ ...pressableStyles.androidRipple }}
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={[styles.button, (mode === 'negative') ? styles.flat : null]}>
                    <Text style={[styles.buttonText, (mode === 'negative') ? styles.flatText : null]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 10,
        backgroundColor: ColorScheme.TitleBackground,
        minWidth: 80,
    },
    flat: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: ColorScheme.TitleText,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
    flatText: {
        color: ColorScheme.TextInactive,
    },
    pressed: {
        ...pressableStyles.pressed
    }
});

export default MainButton;