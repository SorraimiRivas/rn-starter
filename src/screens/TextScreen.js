import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextScreen = () => {

    const [password, setPassword] = useState('');

    return (
        <View>
            <View>
                <Text style={styles.text}>Enter your Password:</Text>
            </View>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={password}
                onChangeText={newValue => setPassword(newValue)}
            />
            {password.length < 4
                ? <Text style={styles.text}>Your password is too short</Text>
                : null}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 22
    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
    },
});

export default TextScreen;