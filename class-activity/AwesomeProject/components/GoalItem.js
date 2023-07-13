import { View, Text } from 'react-native'
import React from 'react'

const GoalItem = ({item}) => {
  return (
    <View>
          <Text>{item.content}</Text>
    </View>
  )
}

export default GoalItem