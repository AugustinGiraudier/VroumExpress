import React from 'react';
import {Button, Image, Pressable, ScrollView, Text, TextInput, View} from 'react-native';

import styles from '../styles/main';
import {useNavigation} from "@react-navigation/native";

export default function OneVoitureScreen({route}) {

    const navigation = useNavigation()
    const item = route.params.item;

    // @ts-ignore
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{width:"100%"}}>

                <Image style={styles.bigCarImage} source={{uri: item.image}}/>

                <Text style={[styles.text, {marginTop:20}]}>Depuis l'agence</Text>
                <TextInput
                    style={styles.input}
                    value=""
                    placeholder="Ex : Paris"
                />

                <Text style={[styles.text, {marginTop:20}]}>Vers l'agence</Text>
                <TextInput
                    style={styles.input}
                    value=""
                    placeholder="Ex : Lyon"
                />

                <Text style={[styles.text, {marginTop:20}]}>Location</Text>
                <View style={[styles.hStack, {justifyContent: "space-between"}]}>
                    <TextInput
                        style={[styles.input, {width: "48%"}]}
                        value=""
                        placeholder="Ex : 02/12/2023"
                    />
                    <TextInput
                        style={[styles.input, {width: "48%"}]}
                        value=""
                        placeholder="Ex : 01/12/2023"
                    />
                </View>

                <Pressable style={styles.pressable}>
                    <Text>LOUER</Text>
                </Pressable>


            </ScrollView>
        </View>
    )
};
