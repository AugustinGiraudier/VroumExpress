import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/main';

export default function OptionsScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Option</Text>
        <Text style={styles.text}>Page d'options</Text>
      </View>
    )
  };