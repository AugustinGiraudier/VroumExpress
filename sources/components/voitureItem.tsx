import Voiture from "../model/Voiture";
import styles from "../styles/main";
import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";


type voitureItemProps = {
    item: Voiture,
    navigation
}

export default function VoitureListItem(props: voitureItemProps) {

    return (
        <View style={[styles.semiLightContainer]}>
            <TouchableOpacity style={{width:"100%", margin:0}} testID="voiture-button"
                              onPress={() => props.navigation.navigate('Louer une voiture' as never, {item:props.item} as never)}>
                <View style={[styles.lightContainer, {alignItems: "center"}]}>
                    <Image testID="voiture-image" style={styles.carImage} source={{uri: props.item.image}}/>
                    <View>
                        <Text testID="voiture-name" style={styles.title}>{props.item.marque} {props.item.modele}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}