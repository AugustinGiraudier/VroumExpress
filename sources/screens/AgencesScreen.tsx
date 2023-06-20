import React, {useRef} from 'react';
import {FlatList, ScrollView, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/main';
import {TouchableHighlight} from "react-native-gesture-handler";
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {AppDispatch} from "../redux/store";
import {getAgences} from "../redux/actions/AgencesActions";

export default function AgencesScreen() {

    // @ts-ignore
    const DATA = useSelector(state => state.agencesReducer.agences);
    const dispatch: AppDispatch = useDispatch();
    const navigation = useNavigation();

    let textInput = useRef<TextInput>(null);

    useFocusEffect(
        React.useCallback(() => {
            const loadMoves = async () => {
                textInput.current.clear();
                await (dispatch as AppDispatch)(getAgences());
            };
            loadMoves();
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
                    <FlatList style={{width:"100%"}} scrollEnabled={false} data={DATA} keyExtractor={item => item.id} renderItem={({item}) =>

                        <TouchableHighlight style={{width:"100%", padding:0, margin:0}} onPress={() => navigation.navigate("Voitures disponibles" as never, {items:item.voitures} as never)}>
                            <View style={styles.lightContainer}>
                                <View style={styles.hStack}>
                                    <Icon name="home" color={styles.mainContainer.backgroundColor} size={30} />
                                    <View style={{marginLeft:8}}>
                                        <Text style={styles.title}>{item.ville}</Text>
                                        <Text style={styles.textSecondary}>quantité : {item.voitures.length}</Text>
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