import { View, Modal, Button } from "react-native";
import { React, useState } from "react";
import ScreenHeader from "../components/ScreenHeader";
import Input from "../components/Input";

const Starting = ({ styles, toConfirm, userInfo, handleUserInfo }) => {
    // Handle email inputs
    const [email, setEmail] = useState(userInfo.email);
    const [emailValidError, setEmailValidError] = useState(userInfo.phone);
    const validateEmail = (value) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (value.length === 0) {
            setEmailValidError("email address must be entered");
        } else if (reg.test(value) === false) {
            setEmailValidError("please enter a valid email address");
        } else if (reg.test(value) === true) {
            setEmailValidError("");
        }
    };
    const handleChangeEmail = (value) => {
        setEmail(value);
        validateEmail(value);
    };

    // Handle phone number inputs
    const [phone, setPhone] = useState("");
    const [phoneValidError, setPhoneValidError] = useState("");
    const validatePhone = (value) => {

        number = parseInt(value);

        if (value.length === 0) {
            setPhoneValidError("phone number must be entered");
        } else if (value.length !== 10 || isNaN(parseInt(value))) {
            setPhoneValidError("please enter a 10 digit phone number");
        } else if (value.length === 10) {
            setPhoneValidError("");
        }
    };
    const handleChangePhone = (value) => {
        setPhone(value);
        validatePhone(value);
    };

    // Handle reset button click
    const handleReset = (value) => {
        setEmail("");
        setEmailValidError("");
        setPhone("");
        setPhoneValidError("");
    };

    // Handle sign up button click
    const handleSignUp = () => {
        const newUserInfo = { "email": email, "phone": phone };
        handleUserInfo(newUserInfo);
        toConfirm();
    };

    return (
        <View>
            <Modal visible={true}>
                <View style={styles.centeredView}>
                    <ScreenHeader styles={styles} headerText="Sign Up" />

                    <View style={styles.modalView}>
                        <Input
                            placeholder="Email Address"
                            displayValue={email}
                            handleChangeEmail={handleChangeEmail}
                            errorMessage={emailValidError}
                        />

                        <Input
                            placeholder="Phone Number"
                            displayValue={phone}
                            handleChangeEmail={handleChangePhone}
                            errorMessage={phoneValidError}
                        />

                        <View style={styles.signupButtonContainer}>
                            <Button title="Reset" color="red" onPress={handleReset} />
                            <Button title="Sign up" color="blue" onPress={handleSignUp} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
};

export default Starting;