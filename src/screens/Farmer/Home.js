import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, } from 'react-native'


// components
import Header from '../../components/Header';
import CardUser from '../../components/CardUser';
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Header />
            <CardUser/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    }
});