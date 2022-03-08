import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function Index({ navigation }) {
    return (
        <View style={styles.Card}>
            <View >
                <Image
                    style={styles.image}
                    source={require('../../../../assets/goat.png')}
                />
            </View>

            <View style={styles.menu}>
                <TouchableOpacity>
                    <Ionicons name="scan-circle-sharp" size={35} color="#50E194" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name="bar-chart" size={27} color="#50E194" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Details')}
                >
                    <Ionicons name="paw" size={27} color="#50E194" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Card:{
        backgroundColor: "white",
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    menu:{
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
        width:60
    },
    image:{
        
    }
});
