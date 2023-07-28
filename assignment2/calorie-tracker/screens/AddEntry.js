import { StyleSheet, View, Text, TextInput, Keyboard, TouchableWithoutFeedback, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

import { overLimitStandard } from '../constants/Standards';
import ColorScheme from '../constants/ColorScheme';
import { screenContentContainer, buttonStyles, contentText } from '../constants/StylesTemplate';
import MainButton from '../components/UI/MainButton';
import Title from '../components/UI/Title';

const AddEntry = ({ navigation }) => {
    const [inputs, setInputs] = useState({
        calories: {
            value: '',
            isValid: false,
            error: ''
        },
        description: {
            value: '',
            isValid: false,
            error: ''
        },
        isOverLimit: {
            value: false
        },
    });
    const [validation, setValidation] = useState(false);
    const [errorCalories, setErrorCalories] = useState(true);
    const [errorDescription, setErrorDescription] = useState(true);

    const validationHandler = () => {
        if (inputs.calories.isValid && inputs.description.isValid) {
            setValidation(true);
        }
    }

    const caloriesHandler = (calories) => {
        const parsedCalories = parseFloat(calories);

        setInputs((currentValue) => {
            return {
                ...currentValue,
                "calories": {
                    value: parsedCalories,
                    isValid: (!isNaN(parsedCalories) && parsedCalories > 0)
                }
            }
        });
    };

    const descriptionHandler = (description) => {

        setInputs((currentValue) => {
            return {
                ...currentValue,
                "description": {
                    value: description,
                    isValid: (isNaN(description) && description.trim().length > 0)
                }
            }
        });

    };

    const submitHandler = () => {

        validationHandler();

        if (validation) {
            setInputs((currentValue) => {
                return {
                    ...currentValue,
                    "isOverLimit": {
                        value: (inputs.calories.value > overLimitStandard)
                    }
                }
            });

            // TODO: write to database
            console.log(inputs);
        }
    };

    useEffect(() => {

        if (!inputs.calories.isValid) {
            setErrorCalories(true);
        } else {
            setErrorCalories(false);
        }

        if (!inputs.description.isValid) {
            setErrorDescription(true);
        } else {
            setErrorDescription(false);
        }

    });

    const cancelHandler = () => {
        // setInputs({
        //     calories: {
        //         value: '',
        //         isValid: false,
        //     },
        //     description: {
        //         value: '',
        //         isValid: false,
        //     },
        //     isOverLimit: {
        //         value: false
        //     }
        // })
        navigation.goBack();
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >

            <View style={styles.screen}>

                <Title marginTop={30}>Add An Entry</Title>

                <View>
                    <Text style={styles.text}>Calories</Text>
                    <TextInput
                        style={styles.input}
                        blurOnSubmit
                        autoCaptalize="none"
                        keyboardType="decimal-pad"
                        onChangeText={(calories) => { caloriesHandler(calories) }}
                        value={inputs.calories.value.toString()}
                    />
                </View>

                <View>
                    <Text style={styles.text}>Description</Text>
                    <TextInput
                        style={[styles.input, { minHeight: 100, textAlignVertical: 'top' }]}
                        blurOnSubmit
                        autoCaptalize="none"
                        keyboardType="default"
                        onChangeText={(description) => { descriptionHandler(description) }}
                        value={inputs.description.value.toString()}
                    />
                </View>

                {(errorCalories) && <Text style={styles.invalidInput}>Invalid calories input. It has to be a number greater than 0.</Text>}
                {(errorDescription) && <Text style={styles.invalidInput}>Invalid description input. It has to be a non-empty string.</Text>}

                <View style={styles.buttonContainer}>
                    <MainButton
                        style={styles.button}
                        mode='negative'
                        onPress={cancelHandler}>Cancel</MainButton>
                    <MainButton
                        style={styles.button}
                        onPress={submitHandler}
                        disabled={validation ? false : true}
                    >Confirm</MainButton>
                </View>

            </View>
        </TouchableWithoutFeedback >
    )
};

const styles = StyleSheet.create({
    screen: {
        ...screenContentContainer
    },
    text: {
        ...contentText
    },
    input: {
        borderRadius: 4,
        backgroundColor: ColorScheme.ContentBackground,
        padding: 6,
        fontSize: 18,
        color: ColorScheme.ContentText,
        margin: 5,
    },
    invalidInput: {
        color: ColorScheme.Alert,
        marginTop: 25,
        fontSize: 18,
        alignSelf: 'center',
    },
    buttonContainer: {
        ...buttonStyles.buttonContainer,
        marginTop: 20
    },
    button: {
        ...buttonStyles.button
    }
});

export default AddEntry;