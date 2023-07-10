import { View, TextInput, StyleSheet, Button, Modal, Image } from 'react-native';
import { React, useState } from 'react';

const Input = ({ handleTextChange, modalVisibility, setVisible, setInvisible }) => {

    const [text, setText] = useState("")
    const processStoredText = (text) => {
        handleTextChange(text);
        setText(text);
        setInvisible();
    }

    return (
        <Modal visible={modalVisibility}>
            <View style={styles.container}>
                {/* source={{uri: ""}} */}
                {/* source={require("")} */}
                <Image style={styles.logo} src={'https://i.etsystatic.com/32429025/r/il/5eb357/3614210544/il_570xN.3614210544_leur.jpg'} />
                <Image style={styles.logo} source={require("../assets/favicon.png")} />
                <TextInput style={styles.input} placeholder="Type something here" onChangeText={(text) => setText(text)} value={text} />
                <Button title="Confirm" onPress={() => processStoredText(text)} />
                <Button title="Cancel" onPress={() => processStoredText("")} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: 1,
        width: 200
    },
    logo: {
        width: 100,
        height: 100,
    },
});

export default Input