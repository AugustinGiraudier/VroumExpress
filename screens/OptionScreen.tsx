import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/main';

export default function OptionScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.title}>Option</Text>
        </View>
        <Text>Page d'options</Text>
      </View>
    )
  };