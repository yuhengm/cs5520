import { View, Text, Button } from 'react-native'
import React from 'react'

const GoalDetails = ({ navigation, route }) => {
  // console.log(route);
  return (
    <View>
      <Text>{route.name}</Text>
      <Text>{route.key}</Text>
      <Button title="ExtraScreen" onPress={() => { navigation.navigate("ExtraScreen") }} />
      <Button title="Go back" onPress={() => { navigation.goBack() }} />
    </View>
  )
}

export default GoalDetails