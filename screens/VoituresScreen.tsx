import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';

import styles from '../styles/main';

export default function VoituresScreen() {
    const [text, onChangeText] = React.useState('Recherchez une voiture ...');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={text}
            />
            <Image
                style={voitureStyle.logo}
                source={{
                    uri: 'https://source.unsplash.com/1000x1000/?car',
                }}
            />
            <Image
                style={voitureStyle.logo}
                source={{
                    uri: 'https://source.unsplash.com/1000x1000/?car',
                }}
            />
        </View>
    )
};

const voitureStyle = StyleSheet.create({
    logo: {
        width: '50%',
        height: '50%',
    },
});
