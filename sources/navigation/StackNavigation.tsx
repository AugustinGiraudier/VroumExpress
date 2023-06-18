import {createStackNavigator} from "@react-navigation/stack";
import AgencesScreen from "../screens/AgencesScreen";
import React from "react";
import VoituresScreen from "../screens/VoituresScreen";
import OneVoitureScreen from "../screens/OneVoitureScreen";
import OptionsScreen from "../screens/OptionsScreen";

export function VoituresStackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Toutes les voitures">
            <Stack.Screen name="Toutes les voitures" component={VoituresScreen}/>
            <Stack.Screen name="Louer une voiture" component={OneVoitureScreen}/>
        </Stack.Navigator>
    )
}

export function AgencesStackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Rechercher une agence">
            <Stack.Screen name="Rechercher une agence" component={AgencesScreen}/>
            <Stack.Screen name="Voitures disponibles" component={VoituresScreen}/>
        </Stack.Navigator>
    )
}

export function OptionsStackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Options">
            <Stack.Screen name="Options" component={OptionsScreen}/>
        </Stack.Navigator>
    )
}