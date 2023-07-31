import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ColorScheme from './constants/ColorScheme';
import { navigatorTitle, defaultContainer } from './constants/StylesTemplate';
import Overview from './Overview';
import AddEntry from './screens/AddEntry';
import EditEntry from './screens/EditEntry';

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
    ...defaultContainer
  },
});

export default App;
