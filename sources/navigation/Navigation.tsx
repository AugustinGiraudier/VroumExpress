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

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();

    const scheme = useColorScheme();

    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator
                    initialRouteName="Agences"
                    screenOptions={{
                        tabBarActiveTintColor: styles.mainContainer.backgroundColor,
                        tabBarInactiveTintColor: 'gray'
                    }}>
                <BottomTabNavigator.Screen name="Agences" component={AgencesScreen}
                   options={{
                       title: 'Agences',
                       tabBarIcon: ({ color, size }) => (
                           <Icon name="home" color={color} size={size} />
                       ),
                   }}/>
                <BottomTabNavigator.Screen name="Voitures" component={VoituresScreen}
                   options={{
                       title: 'Voitures',
                       tabBarIcon: ({ color, size }) => (
                           <Icon name="car" color={color} size={size} />
                       ),
                   }}/>
                <BottomTabNavigator.Screen name="Options" component={OptionsScreen}
                   options={{
                       title: 'Options',
                       tabBarIcon: ({ color, size }) => (
                           <Icon name="cog" color={color} size={size} />
                       ),
                   }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}