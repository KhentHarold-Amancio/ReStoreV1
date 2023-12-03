import React from "react";
import Settings from "../screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "../screens/AboutScreen";
import { NavigationContainer } from "@react-navigation/native";
import customColors from "../constants/colors";
import HomeScreen from "../screens/Homescreen";
import SalesScreen from "../screens/SalesScreen";
import ForecastScreen from "../screens/ForecastScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


//STACK NAVIGATION FOR THE 4 MAIN SCREENS
const SettingsStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name = "SettingsHome" component={Settings}/>
        <Stack.Screen
        name = "About"
        component={AboutStack}
        options={{
            title: false
        }}/>
    </Stack.Navigator>
);

//SETTINGS COMPONENTS
const AboutStack = () => (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="AboutHome" component={AboutScreen}/>
    </Stack.Navigator>
);

export default AppNavigator;