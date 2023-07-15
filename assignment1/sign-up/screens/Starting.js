import { View, Text, Modal, Button, TextInput } from "react-native";
import { React, useState } from "react";
import ButtonSignUp from "../components/ButtonSignUp";
import ScreenHeader from "../components/ScreenHeader";
import Input from "../components/Input";

const Starting = ({ styles, handleRendering }) => {
    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const validateEmail = (value) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (value.length === 0) {
            setEmailValidError('email address must be enter');
        } else if (reg.test(value) === false) {
            setEmailValidError('enter valid email address');
        } else if (reg.test(value) === true) {
            setEmailValidError('');
        }
    };
    const handleChangeEmail = (value) => {
        setEmail(value);
        validateEmail(value);
    }

    return (
        <View>
            <Modal visible={true}>
                <View style={styles.centeredView}>
                    <ScreenHeader styles={styles} headerText="Sign Up" />

                    <View style={styles.modalView}>
                        <Input
                            placeholder="Email"
                            displayValue={email}
                            handleChangeEmail={handleChangeEmail}
                            errorMessage={emailValidError}
                        />

                        <Button
                            title="Reset"
                            color="red"
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
};

export default Starting;