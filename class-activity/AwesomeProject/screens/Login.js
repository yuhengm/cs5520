import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer} >
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={newEmail => onChangeEmail(newEmail)}
                    value={email}
                />
            </View>
            <View style={styles.inputContainer} >
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={newPassword => onChangePassword(newPassword)}
                    value={password}
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text style={styles.loginText}>Not a user? </Text>
                <Button style={styles.loginButton} title='Sign up here' onPress={() => navigation.replace('SignUp')} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        marginTop: 12,
        borderWidth: 1,
    },
    container: {
        margin: 12,
        padding: 10,
        alignContent: 'center',
    },
    inputContainer: {
        height: 80,
        marginBottom: 12,
    },
    switchContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',

    },
    loginButton: {
        margin: 0,
        padding: 0,
    },
    loginText: {
        fontSize: 18
    }
});

export default Login