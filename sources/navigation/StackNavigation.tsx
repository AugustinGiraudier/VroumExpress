import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import AgencesScreen from "../screens/AgencesScreen";
import React from "react";
import VoituresScreen from "../screens/VoituresScreen";

export function VoituresStackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Voitures">
            <Stack.Screen name="Agences" component={AgencesScreen}/>
            <Stack.Screen name="Voitures" component={VoituresScreen}/>
        </Stack.Navigator>
    )
}

export function AgencesStackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Agences">
            <Stack.Screen name="Agences" component={AgencesScreen}/>
            <Stack.Screen name="Voitures" component={VoituresScreen}/>
        </Stack.Navigator>
    )
}