import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "darksalmon",
    },
    centered: {
      alignItems: "center"
    },
    title: {
      fontSize: 20
    }
  });