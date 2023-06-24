import React from 'react';
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from '../styles/main';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {AppDispatch} from "../redux/store";
import {getVoitures, getVoituresFromAgence} from "../redux/actions/VoitureActions";
import VoitureListItem from "../components/voitureItem";
import Voiture from "../model/Voiture";


export default function VoituresScreen({route}) {

    const navigation = useNavigation()

    // @ts-ignore
    const DATA = useSelector(state => state.voituresReducer.voitures)
    const dispatch: AppDispatch = useDispatch();

    useFocusEffect(
        React.useCallback(() => {
            const load= async () => {
                await (dispatch as AppDispatch)(route.params ? getVoituresFromAgence(route.params.agenceId) : getVoitures());
            };
            load();
        }, [dispatch])
    );

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{width:"100%"}}>
                <Text style={[styles.text, {marginTop:20}]}>Les voitures disponibles</Text>
                <View style={[styles.container]}>

                    {DATA.length === 0 && <View>
                        <Text style={{color:"gray"}}>Rien à afficher...</Text>
                    </View>}

                    {DATA.length !== 0 &&
                    <FlatList style={{width:"100%"}} scrollEnabled={false} numColumns={2} data={DATA} keyExtractor={item => item.id}
                        renderItem={({item}) => (
                             <VoitureListItem item={item} navigation={navigation} />
                        )}
                    />}

                </View>
            </ScrollView>
        </View>
    )
};
