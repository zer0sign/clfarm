import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, } from 'react-native'

export default function CustomerService({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Customer Service</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 170,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        width: 300,
        padding: 10,
        marginBottom: 10
    },
    loginButton: {
        marginTop: 10,
        height: 50,
        borderRadius: 10,
        width: 300,
        backgroundColor: "#50E194",
        justifyContent: "center"
    }
});