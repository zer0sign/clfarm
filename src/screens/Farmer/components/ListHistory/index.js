import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function Index({ navigation }) {
    return (
        <View style={styles.Card}>
            <View>
                <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Makan</Text>
                <Text style={{fontSize:12, color:'white'}}>10-10-2020</Text>
            </View>
            <AntDesign name="checkcircle" size={24} color="green" />
        </View> 
    )
}

const styles = StyleSheet.create({
    Card: {
        backgroundColor: "#50E194",
        borderRadius: 5,
        padding:15,
        marginTop:20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    }
});
