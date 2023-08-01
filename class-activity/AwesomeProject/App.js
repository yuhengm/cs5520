import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import GoalDetails from './components/GoalDetails';
import ExtraScreen from './components/ExtraScreen';
import SignUp from './screens/SignUp';
import Login from './screens/Login';

export default function App() {

  const Stack = createNativeStackNavigator()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const AuthStack = (
    <>
      <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{
          title: 'Sign Up'
        }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          title: 'Log In'
        }}
      />
    </>
  )

  const AppStack = (
    <>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home page',
          presentation: "modal",
        }}
      />
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
    </>
  )

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerTitleAlign: 'center'
          }}>
          {isLoggedIn ? AuthStack : AppStack}
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