import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import ColorScheme from '../../constants/ColorScheme';

const Hint = ({ children }) => {
    return (
        <View>
            <Text style={styles.hint}>{children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    hint: {
        color: ColorScheme.Hint,
        fontSize: 28,
        textAlign: 'center',
    },
});

export default Hint;