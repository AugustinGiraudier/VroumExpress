import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';

import styles from '../styles/main';
import {TouchableHighlight} from "react-native-gesture-handler";
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {AppDispatch} from "../redux/store";
import {getAgences} from "../redux/actions/AgencesActions";
import {getVoitures} from "../redux/actions/VoitureActions";
import Stub from "../Stub/Stub";


export default function VoituresScreen({route}) {

    const navigation = useNavigation()

    // @ts-ignore
    const DATA = route.params ? route.params.items : useSelector(state => state.voituresReducer.voitures)
    const dispatch: AppDispatch = useDispatch();

    if(!route.params){
        useFocusEffect(
            React.useCallback(() => {
                const loadMoves = async () => {
                    await (dispatch as AppDispatch)(getVoitures());
                };
                loadMoves();
            }, [dispatch])
        );
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{width:"100%"}}>
                <Text style={[styles.text, {marginTop:20}]}>Les voitures disponibles</Text>
                <View style={[styles.container]}>
                    <FlatList style={{width:"100%"}} scrollEnabled={false}
                              numColumns={2} data={DATA} keyExtractor={item => item.id} renderItem={({item}) =>

                        <View style={[styles.semiLightContainer]}>
                            <TouchableHighlight style={{width:"100%", padding:0, margin:0}} onPress={() => navigation.navigate('Louer une voiture' as never, {item:item} as never)}>
                            <View style={[styles.lightContainer, {alignItems: "center"}]}>
                                <Image style={styles.carImage} source={{uri: item.image}}/>
                                <View>
                                    <Text style={styles.title}>{item.marque} {item.modele}</Text>
                                    <Text style={styles.textSecondary}>quantité : 1</Text>
                                </View>
                            </View>
                            </TouchableHighlight>
                        </View>

                    }/>
                </View>
            </ScrollView>
        </View>
    )
};
