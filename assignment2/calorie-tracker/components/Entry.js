import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ColorScheme from '../constants/ColorScheme';
import { pressableStyles, row } from '../constants/StylesTemplate';

const Entry = ({ entryInfo }) => {

    const navigation = useNavigation();
    const itemPressed = () => {
        console.log(entryInfo.entryId);
        // navigation.navigate(
        //     'EditEntry',
        //     {
        //         entryId: entryInfo.key,
        //         amount: entryInfo.amount,
        //         description: entryInfo.description,
        //         isOverLimit: entryInfo.isOverLimit
        //     }
        // );
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
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{entryInfo.amount.toFixed(0)}</Text>
                </View>
            </View>
        </Pressable>
        // <Text>{entryInfo.amount}</Text>
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
    amountContainer: {
        paddingHorizontal: 12,
        borderRadius: 4,
        backgroundColor: ColorScheme.TitleBackground,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 80,
        height: 30
    },
    amount: {
        color: ColorScheme.TitleText,
        fontSize: 16
    },
});

export default Entry;