import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

import ColorScheme from './constants/ColorScheme';
import { navigatorTitle } from './constants/StylesTemplate';
import IconButton from './components/UI/IconButton';
import Overview from './Overview';
import AddEntry from './screens/AddEntry';
import AllEntries from './screens/AllEntries';
import EditEntry from './screens/EditEntry';
import OverLimitEntries from './screens/OverLimitEntries';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          ...navigatorTitle,
        }}>
          <Stack.Screen
            name="Overview"
            component={Overview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='EditEntry'
            component={EditEntry}
            options={{
              title: 'Edit Entry',
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name='AddEntry'
            component={AddEntry}
            options={{
              title: 'Add Entry',
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" backgroundColor={ColorScheme.TitleBackground} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
