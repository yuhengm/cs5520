import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import GoalDetails from './components/GoalDetails';
import ExtraScreen from './components/ExtraScreen';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerTitleAlign: 'center'
          }}>
          {/* <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home page',
              presentation: "modal",
            }}
          /> */}
          <Stack.Screen
            name="GoalDetails"
            component={GoalDetails}
            options={{
              title: 'Goal Details',
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="ExtraScreen"
            component={ExtraScreen}
            options={{
              title: 'Extra Screen',
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});