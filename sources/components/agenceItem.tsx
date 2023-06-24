import Agence from "../model/Agence";
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "../styles/main";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";


type agenceItemProps = {
    item: Agence,
    navigation
}

export default function AgenceListItem(props: agenceItemProps) {

    return (
        <TouchableOpacity style={{width:"100%", padding:0, margin:0}} onPress={() => props.navigation.navigate("Voitures disponibles" as never, {agenceId:props.item.id} as never)}>
            <View style={styles.lightContainer}>
                <View style={styles.hStack}>
                    <Icon name="home" color={styles.mainContainer.backgroundColor} size={30} />
                    <View style={{marginLeft:8}}>
                        <Text style={styles.title}>{props.item.ville}</Text>
                        <Text style={styles.textSecondary}>quantité : {props.item.voitures.length}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}