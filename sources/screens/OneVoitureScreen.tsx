import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import styles from '../styles/main';
import {useNavigation} from "@react-navigation/native";

export default function OneVoitureScreen() {

    const navigation = useNavigation()

    // @ts-ignore
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{width:"100%"}}>
                <Text style={[styles.text, {marginTop:20}]}>Les voitures disponibles</Text>
                <View style={[styles.container]}>

                </View>
            </ScrollView>
        </View>
    )
};
