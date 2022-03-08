import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, } from 'react-native'


// components
import Header from '../../components/Header';
import ListAnimal from '../Farmer/components/ListAnimal'
export default function Animal({ navigation }) {
    return (
        <View style={styles.container}>
            <Header />

            <View style={{paddingTop:20}}>
                <ListAnimal />
            </View>
            
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