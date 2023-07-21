import { View, Text, Button } from 'react-native'
import React from 'react'

const ExtraScreen = ({ navigation, route }) => {
    return (
        <View>
            <Text>{route.name}</Text>
            <Text>{route.key}</Text>
            <Button title="Goal Details" onPress={() => { navigation.navigate("GoalDetails") }} />
            <Button title="Go back" onPress={() => { navigation.goBack() }} />
        </View>
    )
}

export default ExtraScreen