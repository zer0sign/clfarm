import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, } from 'react-native'


// components
import ListHistory from '../components/ListHistory'
export default function History({ navigation }) {
    return (
        <View style={styles.container}>
            {/* <Header /> */}
            <Text style={{fontWeight:"bold", fontSize:20, color:'#333333'}}>History Pakan</Text>
            <ListHistory />

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