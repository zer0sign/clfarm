import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import { Ionicons, AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function Services({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menu}
                onPress={() => { navigation.navigate('Animal') }}
            >
                <MaterialIcons name="grass" size={60} color={'#50E194'}/>
                <Text style={{ fontWeight: "500", color: "#50E194" }}>Feed</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menu}>
                <FontAwesome name="stethoscope" size={60} color={'#50E194'} />
                <Text style={{ fontWeight: "500", color: "#50E194" }}>Kesehatan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menu}>
                <Ionicons name="stats-chart" size={60} color={'#50E194'} />
                <Text style={{ fontWeight: "500", color:"#50E194"}}>Laporan</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    menu:{
        flexDirection:"column",
        alignItems:"center",
        width:95,
        paddingVertical:20,
        backgroundColor:"white",
        borderRadius:10
    }
});
