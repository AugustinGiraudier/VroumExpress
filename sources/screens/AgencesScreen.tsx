import React, {useRef} from 'react';
import {FlatList, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/main';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {AppDispatch} from "../redux/store";
import {getAgences} from "../redux/actions/AgencesActions";
import AgenceListItem from "../components/agenceItem";

export default function AgencesScreen() {

    // @ts-ignore
    const DATA : Agence[] = useSelector(state => state.agencesReducer.agences);
    const dispatch: AppDispatch = useDispatch();
    const navigation = useNavigation();

    let textInput = useRef<TextInput>(null);

    useFocusEffect(
        React.useCallback(() => {
            const load = async () => {
                textInput.current.clear();
                await (dispatch as AppDispatch)(getAgences());
            };
            load();
        }, [dispatch])
    );

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{width:"100%"}}>
                <Text style={[styles.text, {marginTop:20}]}>Trouver une agence</Text>
                <TextInput
                    ref={textInput}
                    style={styles.input}
                    placeholder="Ex : Paris"
                    onChangeText={async (text) => {await (dispatch as AppDispatch)(getAgences(text))}}
                />

                <Text style={[styles.text, {marginTop:20}]}>Les principales</Text>
                <View style={[styles.container]}>

                    {DATA.length === 0 && <View>
                        <Text style={{color:"gray"}}>Rien à afficher...</Text>
                    </View>}

                    {DATA.length !== 0 &&
                    <FlatList style={{width:"100%"}} scrollEnabled={false} data={DATA} keyExtractor={item => item.id} renderItem={({item}) =>

                        <AgenceListItem item={item} navigation={navigation} />

                    }/>}

                </View>
            </ScrollView>
        </View>
    )
  };