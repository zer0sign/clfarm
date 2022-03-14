import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { Ionicons, AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function SuccessFeed({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize:16}}>Berhasil Memberi Makan</Text>
            <Text style={{marginBottom:10}}>Pada 11:02 11-02-2022</Text>
            <AntDesign name="checkcircle" size={70} color="green" />
            <View style={{flexDirection:'row', width:'60%', justifyContent:'space-around',marginTop:20,marginBottom:20}}>
                <View>
                    <AntDesign name="star" size={30} color="orange" />
                    <Text>Pagi</Text>
                </View>

                <View>
                    <AntDesign name="star" size={30} color="orange" />
                    <Text>Siang</Text>
                </View>

                <View>
                    <AntDesign name="star" size={30} color="orange" />
                    <Text>Sore</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.loginButton}
                onPress={() => { navigation.navigate('History') }}
            >
                <Text style={{ textAlign: 'center', color: "white", fontWeight: "bold" }}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}
                onPress={() => { navigation.navigate('Animal') }}
            >
                <Text style={{ textAlign: 'center', color: "white", fontWeight: "bold" }}>kembali</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        marginTop: 10,
        height: 50,
        borderRadius: 10,
        width: 300,
        backgroundColor: "#50E194",
        justifyContent: "center"
    }
})