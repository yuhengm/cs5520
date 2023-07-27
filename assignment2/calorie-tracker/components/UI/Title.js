import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import ColorScheme from '../../constants/ColorScheme';


const Title = ({ marginTop, children }) => {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: ColorScheme.TitleText,
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        marginTop: marginTop
    },
});

export default Title;