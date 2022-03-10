import React from 'react'
import {View,Image, Text,StyleSheet} from 'react-native'
export default function FormFeed() {
return (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={require('../../../assets/goat.png')}
        />
    </View>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
    image: {
        borderRadius: 50
    },
});