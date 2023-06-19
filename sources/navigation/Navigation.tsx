import { NavigationContainer } from "@react-navigation/native";
import AgencesScreen from "../screens/AgencesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OptionsScreen from "../screens/OptionsScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";
import VoituresScreen from "../screens/VoituresScreen";
import { useColorScheme } from 'react-native';

import styles from '../styles/main';

import DarkTheme from "../styles/dark_theme";
import LightTheme from "../styles/light_theme";
import {createStackNavigator} from "@react-navigation/stack";
import {AgencesStackNavigation, OptionsStackNavigation, VoituresStackNavigation} from "./StackNavigation";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator
                    initialRouteName="Voitures"
                    screenOptions={{
                        headerShown:false,
                        tabBarActiveTintColor: styles.mainContainer.backgroundColor,
                        tabBarInactiveTintColor: 'gray'
                    }}>
                <BottomTabNavigator.Screen name="Agences" component={AgencesStackNavigation}
                   options={{
                       tabBarIcon: ({ color, size }) => (
                           <Icon name="home" color={color} size={size} />
                       ),
                   }}/>
                <BottomTabNavigator.Screen name="Voitures" component={VoituresStackNavigation}
                   options={{
                       tabBarIcon: ({ color, size }) => (
                           <Icon name="car" color={color} size={size} />
                       ),
                   }}/>
                <BottomTabNavigator.Screen name="Options" component={OptionsStackNavigation}
                   options={{
                       tabBarIcon: ({ color, size }) => (
                           <Icon name="cog" color={color} size={size} />
                       ),
                   }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}