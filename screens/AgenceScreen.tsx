import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AgenceScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Text style={[styles.title,styles.text]}>Mes super Nounours !</Text>
        </View>
        <Text style={styles.text}>Mon super texte ...</Text>
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