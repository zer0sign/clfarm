import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
export default function CardUser() {
    return (
        <View>
            <View style={styles.header}>
                <View>
                    <Text style={{color:"white"}} >Ternak</Text>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>4</Text>
                </View>
                <View style={{marginLeft:20}}>
                    <Text style={{ color: "white" }} >Investor</Text>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>2</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection:"row",
        marginTop:20,
        padding: 20,
        borderRadius:5,
        backgroundColor: "#55EFA0",
    },
});
