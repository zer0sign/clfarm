import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, } from 'react-native'


// components
import Header from '../../components/Header';
import CardUser from '../../components/CardUser';
import Menu from './components/Menu';
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Header />
            <CardUser/>
            <View style={{flexDirection:"row", marginTop:20, justifyContent:"space-between"}}>
                <View style={{ backgroundColor:'#23ACA8', borderRadius:5}}>
                    <Menu title="Peternakan" image="noto_goat"/>
                </View>

                <View style={{ backgroundColor: '#C1DC7D', borderRadius: 5 }}>
                    <Menu title="Pertanian" image="tree"/>
                </View>
                
            </View>
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