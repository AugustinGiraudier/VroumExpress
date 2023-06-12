import React from 'react';
import {FlatList, ScrollView, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/main';
import {TouchableHighlight} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";

export default function AgencesScreen() {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            agence: 'Paris',
            dispo:"200 véhicules dispo"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            agence: 'Lyon',
            dispo:"200 véhicules dispo"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            agence: 'Marseille',
            dispo:"200 véhicules dispo"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            agence: 'Marseille',
            dispo:"200 véhicules dispo"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d74',
            agence: 'Marseille',
            dispo:"200 véhicules dispo"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d75',
            agence: 'Marseille',
            dispo:"200 véhicules dispo"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',
            agence: 'Marseille',
            dispo:"200 véhicules dispo"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d77',
            agence: 'Marseille',
            dispo:"200 véhicules dispo"
        },
    ];

    const navigation = useNavigation()

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{width:"100%"}}>
                <Text style={[styles.text, {marginTop:20}]}>Trouver une agence</Text>
                <TextInput
                    style={styles.input}
                    value=""
                    placeholder="Ex : Paris"
                />


                <Text style={[styles.text, {marginTop:20}]}>Les principales</Text>
                <View style={[styles.container]}>
                    <FlatList style={{width:"100%"}} scrollEnabled={false} data={DATA} keyExtractor={item => item.id} renderItem={({item}) =>

                        <TouchableHighlight style={{width:"100%", padding:0, margin:0}} onPress={() => navigation.navigate("Voitures disponibles")}>
                            <View style={styles.lightContainer}>
                                <View style={styles.hStack}>
                                    <Icon name="home" color={styles.mainContainer.backgroundColor} size={30} />
                                    <View style={{marginLeft:8}}>
                                        <Text style={styles.title}>{item.agence}</Text>
                                        <Text style={styles.textSecondary}>{item.dispo}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                    }/>
                </View>
            </ScrollView>
        </View>
    )
  };