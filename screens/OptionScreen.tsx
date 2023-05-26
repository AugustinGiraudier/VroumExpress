import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OptionScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Text style={[styles.title,styles.text]}>Option</Text>
        </View>
        <Text style={styles.text}>Page d'options</Text>
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FE5F00",
    },
    centered: {
      alignItems: "center"
    },
    title: {
      fontSize: 20
    },
      text:{
        color:"white"
      }
  });