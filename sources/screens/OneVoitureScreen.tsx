import React, {useState} from 'react';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import styles from '../styles/main';
import DatePicker from 'react-native-modern-datepicker';
import { getToday } from 'react-native-modern-datepicker';
import {Picker} from '@react-native-picker/picker';
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {isItemInLocalStorage, toggleItemInStorage} from "../asyncStorage/AsyncStorageHelper";
import Voiture from "../model/Voiture";
import {useDispatch, useSelector} from "react-redux";
import Agence from "../model/Agence";
import {AppDispatch} from "../redux/store";
import {getAgences} from "../redux/actions/AgencesActions";

export default function OneVoitureScreen({route}) {

    // @ts-ignore
    const agences : Agence[] = useSelector(state => state.agencesReducer.agences);
    const item : Voiture = route.params.item;
    const dispatch: AppDispatch = useDispatch();
    const [favIconColor, setFavIconColor] = useState("yellow");
    const [selectedLanguage, setSelectedLanguage] = useState();

    useFocusEffect(
        React.useCallback(() => {
            const load = async () => {
                setFavIconColor(await isItemInLocalStorage(item.id) ? "yellow" : "gray");
                await (dispatch as AppDispatch)(getAgences());
            };
            load();
        }, [dispatch])
    );

    // @ts-ignore
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{width:"100%"}}>

                <View style={{width:"100%", alignItems:"flex-end"}}>
                    <TouchableOpacity
                        onPress={async () => {
                            await toggleItemInStorage(item.id);
                            setFavIconColor(favIconColor === "gray" ? "yellow" : "gray")
                        }}>
                        <Icon name="star" color={favIconColor} size={30} />
                    </TouchableOpacity>
                </View>


                <Image style={styles.bigCarImage} source={{uri: item.image}}/>

                <Text style={[styles.text, {marginTop:20}]}>Depuis l'agence</Text>
                <TextInput
                    style={styles.input}
                    value={item.agence_name}
                    editable={false}
                />

                <Text style={[styles.text, {marginTop:20}]}>Vers l'agence</Text>
                <Picker style={styles.input}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }
                >
                    {agences.map((item,index) =>  (
                        <Picker.Item key={index} label={item.ville} value={item.id} />
                        ))
                    }
                </Picker>

                <Text style={[styles.text, {marginTop:20}]}>Location</Text>
                <DatePicker
                    mode="calendar"
                    minimumDate={getToday()}
                    selected={getToday()}
                />

                <TouchableOpacity style={[styles.pressable, {marginBottom:40}]}>
                    <Text>LOUER</Text>
                </TouchableOpacity>


            </ScrollView>
        </View>
    )
};
