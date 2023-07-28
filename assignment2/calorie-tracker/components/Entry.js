import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import ColorScheme from '../constants/ColorScheme';
import { pressableStyles, row, cardStyle } from '../constants/StylesTemplate';

const Entry = ({ entryInfo }) => {

    const navigation = useNavigation();
    const itemPressed = () => {
        navigation.navigate(
            'EditEntry',
            {
                entryId: entryInfo.key,
                calories: entryInfo.calories,
                description: entryInfo.description,
                isOverLimit: entryInfo.isOverLimit
            }
        );
    };

    return (
        <Pressable
            onPress={itemPressed}
            android_ripple={{ ...pressableStyles.androidRipple }}
            style={({ pressed }) => [
                pressed ? styles.pressed : null,
            ]}>


            <View style={styles.container}>
                <View>
                    <Text style={styles.description}>{entryInfo.description}</Text>
                </View>

                {entryInfo.isOverLimit && <FontAwesome name="warning" size={24} color="orange" />}

                <View style={styles.caloriesContainer}>
                    <Text style={styles.calories}>{entryInfo.calories.toFixed()}</Text>
                </View>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    pressed: {
        ...pressableStyles.pressed
    },
    container: {
        ...row,
        ...cardStyle,
    },
    description: {
        color: ColorScheme.ContentText,
        fontSize: 18,
        fontWeight: 'bold',
    },
    caloriesContainer: {
        paddingHorizontal: 12,
        borderRadius: 4,
        backgroundColor: ColorScheme.TitleBackground,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 80,
        height: 30
    },
    calories: {
        color: ColorScheme.TitleText,
        fontSize: 16
    },
});

export default Entry;