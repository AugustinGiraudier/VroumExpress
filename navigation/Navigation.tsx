import { NavigationContainer } from "@react-navigation/native";
import AgenceScreen from "../screens/AgenceScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OptionsScreen from "../screens/OptionsScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";
import VoituresScreen from "../screens/VoituresScreen";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Agences" component={AgenceScreen}
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