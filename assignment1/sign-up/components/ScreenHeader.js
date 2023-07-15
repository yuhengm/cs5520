import { View, Text } from 'react-native'
import React from 'react'

const ScreenHeader = ({ styles, headerText }) => {
    return (
        <View style={styles.screenHeadingContainer}>
            <Text style={styles.screenHeadingText}>Sign Up</Text>
        </View>
    )
}

export default ScreenHeader