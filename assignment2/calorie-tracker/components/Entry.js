import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import ColorScheme from '../constants/ColorScheme';
import { pressableStyles, row } from '../constants/StylesTemplate';

const Entry = ({ entryInfo }) => {

    const navigation = useNavigation();
    const itemPressed = () => {
        console.log(entryInfo.entryId);
        navigation.navigate(
            'EditEntry',
            {
                entryId: entryInfo.entryId,
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
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: ColorScheme.ContentBackground,
        marginVertical: 10,
        borderRadius: 6,
        elevation: 3,
        shadowColor: ColorScheme.Hint,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
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