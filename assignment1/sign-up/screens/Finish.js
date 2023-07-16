import { View, Text, Image } from "react-native";
import React from "react";
import CustomerButton from "../components/CustomerButton";

const Finish = ({ styles, toStarting, signUp, userInfo, handleUserInfo }) => {
    const generateUrl = () => {
        if (userInfo.phone) {
            const lastDigit = userInfo.phone.slice(-1);
            return `https://picsum.photos/id/${lastDigit}/100/100`;
        }
        else {
            return "https://i.etsystatic.com/32429025/r/il/5eb357/3614210544/il_570xN.3614210544_leur.jpg";
        }
    }

    const handleStartAgain = () => {
        const emptyUser = { "email": "", "phone": "" }
        handleUserInfo(emptyUser);
        toStarting();
    };

    const successMessage = "Thank you for signing up. Here's a picture for you (based on the last digit of your phone number)."
    const sadMessage = "Sorry to see you go."

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {signUp ? <Text style={styles.modalText}>{successMessage}</Text> : <Text style={styles.modalText}>{sadMessage}</Text>}
                {signUp ? <Image
                    style={styles.logo}
                    source={{
                        uri: generateUrl(),
                    }}
                /> : <Image
                    style={styles.logo}
                    source={require('../assets/Sad-Face-Emoji.png')}
                />}
            </View>
            <CustomerButton title="Start Again" color="#1572A1" onPress={handleStartAgain} />
        </View>
    )
};

export default Finish;