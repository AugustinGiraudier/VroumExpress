import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/main';

export default function OptionsScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Text style={[styles.title,styles.text]}>Option</Text>
        </View>
        <Text style={styles.text}>Page d'options</Text>
      </View>
    )
  };