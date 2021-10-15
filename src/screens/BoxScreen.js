import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.boxContainer}>
            <View style={styles.boxOne}></View>
            <View style={styles.boxTwo}></View>
            <View style={styles.boxThree}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    boxContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxOne: {
        width: 135,
        height: 125,
        backgroundColor: '#de4f3f'
    },
    boxTwo: {
        width: 135,
        height: 125,
        backgroundColor: '#744997',
        right: 0,
    },
    boxThree: {
        width: 132,
        height: 125,
        backgroundColor: '#38b000',
        position: 'absolute',
        top: 125,
        left: 140
    },
})

export default BoxScreen;