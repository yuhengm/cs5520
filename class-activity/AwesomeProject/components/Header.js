import { View, Text } from 'react-native'
import React from 'react'

const Header = ({ name }) => {
    return (
        <View>
            <Text>Welcome to {name}</Text>
        </View>
    )
}

export default Header