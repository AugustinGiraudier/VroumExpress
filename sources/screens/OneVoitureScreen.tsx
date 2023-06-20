import React from 'react';
import {Button, Image, Pressable, ScrollView, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';

import styles from '../styles/main';
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {isItemInLocalStorage, toggleItemInStorage} from "../asyncStorage/AsyncStorageHelper";
import Voiture from "../model/Voiture";
import {AppDispatch} from "../redux/store";
import {getAgences} from "../redux/actions/AgencesActions";

export default function OneVoitureScreen({route}) {

    const item : Voiture = route.params.item;
    const [favIconColor, setFavIconColor] = React.useState("yellow");

    useFocusEffect(
        React.useCallback(() => {
            const load = async () => {
                setFavIconColor(await isItemInLocalStorage(item.id) ? "yellow" : "gray");
            };
            load();
        }, [])
    );

    // @ts-ignore
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{width:"100%"}}>

                <View style={{width:"100%", alignItems:"flex-end"}}>
                    <TouchableWithoutFeedback
                        onPress={async () => {
                            await toggleItemInStorage(item.id);
                            setFavIconColor(favIconColor === "gray" ? "yellow" : "gray")
                        }}>
                        <Icon name="star" color={favIconColor} size={30} />
                    </TouchableWithoutFeedback>
                </View>


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
