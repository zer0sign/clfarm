import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, } from 'react-native'


// components
import Header from '../../../components/Header';
import ListAnimal from '../components/ListAnimal'
export default function Detail({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Detail Animal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
});