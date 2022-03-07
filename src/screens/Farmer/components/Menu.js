import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
export default function Menu(props) {
    return (
        <View>
            <View style={styles.header}>
                <View>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>{props.title}</Text>
                </View>
                <View>
                    <Image
                        style={styles.icon}
                        source={require(`../../../assets/noto_goat.png`)}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width:150,
        padding:10,
        borderRadius:10,
        flexDirection: "row",
        justifyContent:"space-between"
    },
    icon:{
        
    }
});
