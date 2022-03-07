import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
export default function Header() {
  return (
    <View>
        <View style={styles.header}>
            <View>
                <Text >Assalamualaikum</Text>
                <Text style={{ fontWeight:"bold", fontSize:24 }}>Hasan</Text>
            </View>
            <View>
                <Image
                    style={styles.profile}
                    source={require('../assets/profile.jpg')}
                />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        paddingVertical: 8,
    },
    profile:{
        width:50,
        height:50,
        borderRadius:50
    }
});
