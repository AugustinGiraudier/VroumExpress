import { NavigationContainer } from "@react-navigation/native";
import AgencesScreen from "../screens/AgencesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OptionScreen from "../screens/OptionScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";

import styles from '../styles/main';

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator
                    initialRouteName="Agences"
                    screenOptions={{
                        tabBarActiveTintColor: styles.mainColor.color,
                        tabBarInactiveTintColor: 'gray'
                    }}>
                <BottomTabNavigator.Screen name="Agences" component={AgencesScreen}
                   options={{
                       title: 'Agences',
                       tabBarIcon: ({ color, size }) => (
                           <Icon name="home" color={color} size={size} />
                       ),
                   }}/>
                <BottomTabNavigator.Screen name="Voitures" component={OptionScreen}
                   options={{
                       title: 'Voitures',
                       tabBarIcon: ({ color, size }) => (
                           <Icon name="car" color={color} size={size} />
                       ),
                   }}/>
                <BottomTabNavigator.Screen name="Options" component={OptionScreen}
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