import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, } from 'react-native'

import Logo from '../assets/logo.png'
export default function Login({navigation}) {
return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
        <Image
            style={{ width: 170, height: 170,alignItems:'center', marginLeft:70}}
            source={Logo}
        />
        <View style={{marginTop:20, alignItems:'center'}}>
            <Text style={{fontWeight:"bold", fontSize:20, marginBottom:10}}>Login</Text>
            <TextInput
            style={styles.input}
                placeholder="E-mail"
            />
            <TextInput
                style={styles.input}
                placeholder="password"
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.loginButton}>
                <Text style={{textAlign:'center',color:"white",fontWeight:"bold"}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:20}}
                onPress={() =>
                    navigation.navigate('Register')
                }
            >
                <Text style={{ textAlign: 'center', color: "#50E194" }}>Belum Punya Akun?</Text>
            </TouchableOpacity>
        </View>
        {/* <View style={{ height: 600 }} /> */}
    </KeyboardAvoidingView>
)
}

const styles = StyleSheet.create({
    container: {
        marginTop:170,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius:10,
        width:300,
        padding:10,
        marginBottom:10
    },
    loginButton:{
        marginTop:10,
        height: 50,
        borderRadius: 10,
        width: 300,
        backgroundColor: "#50E194",
        justifyContent:"center"
    }
});