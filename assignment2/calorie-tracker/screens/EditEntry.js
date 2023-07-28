import { StyleSheet, View, Text, Alert, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import ColorScheme from '../constants/ColorScheme';
import { screenContentContainer, buttonStyles, contentText } from '../constants/StylesTemplate';
import MainButton from '../components/UI/MainButton';
import Title from '../components/UI/Title';


const EditEntry = ({ navigation, route }) => {

    const { entryId, calories, description, isOverlimit } = route.params;

    const confirmDeleteHandler = () => {
        Alert.alert("DELETE", "Are you sure you want to delete this entry?", [
            { text: "No", style: "cancel", onPress: () => { } },
            { text: "Yes", style: "destructive", onPress: onDelete }
        ]);
        return;
    }

    const confirmOverLimitHandler = () => {
        Alert.alert('Important', 'Are you sure you want to remove this entry from the Over-Limit category?', [
            { text: "No", style: "cancel", onPress: () => { } },
            { text: "Yes", onPress: removeOverLimit }
        ]);
        return;
    }

    const onDelete = () => {
        console.log("delete entry");

        navigation.goBack();
    }

    const removeOverLimit = () => {
        console.log("remove over limit");

        navigation.navigate('AllEntries');
    }

    return (
        <View style={styles.screen}>
            <Image
                source={require('../assets/food.jpg')}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Calories: {calories}</Text>
                <Text style={styles.text}>Description: {description}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <MainButton
                    style={styles.button}
                    onPress={confirmDeleteHandler}
                >
                    <FontAwesome name="trash" size={24} color="white" />
                </MainButton>
                <MainButton
                    style={styles.button}
                    onPress={confirmOverLimitHandler}
                >
                    <FontAwesome name="check" size={24} color="white" />
                </MainButton>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        ...screenContentContainer
    },
    image: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
        borderRadius: Dimensions.get('window').width * 0.5 / 2,
        borderWidth: 2,
        borderColor: ColorScheme.ContentBackground,
        overflow: "hidden",
        marginVertical: Dimensions.get('window').height / 30,
        alignSelf: "center",
        justifyContent: 'center',
    },
    buttonContainer: {
        ...buttonStyles.buttonContainer,
        marginTop: 20
    },
    button: {
        ...buttonStyles.button
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        ...contentText,
        fontWeight: 'bold',
    }
});

export default EditEntry;