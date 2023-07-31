import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import ColorScheme from '../../constants/ColorScheme';

const Loading = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator size='large' color={ColorScheme.TitleText} />
        </View>
    )
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 24,
        backgroundColor: ColorScheme.TitleBackground
    },
});

export default Loading;