import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/main';

export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.title}>Mes super Nounours !</Text>
        </View>
        <Text>Mon super texte ...</Text>
      </View>
    )
  };