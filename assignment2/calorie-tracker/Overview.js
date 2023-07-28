import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

import ColorScheme from './constants/ColorScheme';
import { navigatorTitle } from './constants/StylesTemplate';
import IconButton from './components/UI/IconButton';
import AllEntries from './screens/AllEntries';
import OverLimitEntries from './screens/OverLimitEntries';

const BottomTabs = createBottomTabNavigator();

const Overview = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={({ navigation }) => ({
                ...navigatorTitle,
                tabBarStyle: {
                    backgroundColor: ColorScheme.TitleBackground,
                    height: 65,
                },
                tabBarActiveTintColor: ColorScheme.TitleText,
                tabBarInactiveTintColor: ColorScheme.TextInactive,
                headerRight: ({ tintColor }) => (
                    <IconButton
                        icon="add"
                        size={30}
                        color={tintColor}
                        onPress={() => {
                            navigation.navigate('AddEntry');
                        }}
                    />
                ),
            })}
        >
            <BottomTabs.Screen
                name="AllEntries"
                component={AllEntries}
                options={{
                    title: "All Entries",
                    tabBarLabel: "All Entries",
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="emoji-food-beverage" size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="OverLimitEntries"
                component={OverLimitEntries}
                options={{
                    title: "Over-limit Entries",
                    tabBarLabel: "OverLimitEntries",
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="exclamation" size={size} color={color} />
                    ),
                }}
            />
        </BottomTabs.Navigator>
    )
};

export default Overview;