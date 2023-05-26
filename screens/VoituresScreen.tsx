import React from 'react';
import { TextInput, View } from 'react-native';

import styles from '../styles/main';
import ListeVoituresComponent from '../components/ListeVoituresComponent';

export default function VoituresScreen() {
    const [text, onChangeText] = React.useState('Recherchez une voiture ...');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={text}
            />
            
            <ListeVoituresComponent/>

        </View>
    )
};
