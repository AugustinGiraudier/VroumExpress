import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';

import styles from '../styles/main';
import {TouchableHighlight} from "react-native-gesture-handler";
import {useSelector} from 'react-redux';
import {useNavigation} from "@react-navigation/native";

export default function VoituresScreen() {

    const navigation = useNavigation()

    // @ts-ignore
    const DATA = useSelector(state => state.voituresReducer.voitures);

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{width:"100%"}}>
                <Text style={[styles.text, {marginTop:20}]}>Les voitures disponibles</Text>
                <View style={[styles.container]}>
                    <FlatList style={{width:"100%"}} scrollEnabled={false}
                              numColumns={2} data={DATA} keyExtractor={item => item.id} renderItem={({item}) =>

                        <View style={[styles.semiLightContainer]}>
                            <TouchableHighlight style={{width:"100%", padding:0, margin:0}} onPress={() => navigation.navigate('Louer une voiture' as never)}>
                            <View style={[styles.lightContainer, {alignItems: "center"}]}>
                                <Image style={styles.carImage} source={{uri: item.image}}/>
                                <View>
                                    <Text style={styles.title}>{item.model}</Text>
                                    <Text style={styles.textSecondary}>quantité : 8</Text>
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
