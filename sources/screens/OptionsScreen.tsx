import React from 'react';
import {Button, Text, View} from 'react-native';

import styles from '../styles/main';

export default function OptionsScreen() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.hStack}>
                <Text>Do nothing : </Text>
                <Button  title={"Click !"}/>
            </View>
        </View>
    )
  };