import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, } from 'react-native'
import { Ionicons, AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';

// components
import Header from '../../../components/Header';
import ListAnimal from '../components/ListAnimal'
export default function Detail({ navigation }) {
    return (
        <View style={{backgroundColor:'black'}}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/goat.png')}
                />
            <View style={styles.container}>
                <Text style={{fontSize:20,fontWeight:"bold",color:"#333333"}}>Kambing Taehyung</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <FontAwesome name="map-marker" size={14} color="red" />
                    <Text style={{ marginLeft: 5, color:'#333333',fontSize:16}}>Semarang</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:15 }}>
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>Berat Badan</Text>
                            <Text style={{color: '#333333', fontSize: 20,fontWeight:'bold' }}>50 Kg</Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>Lingkar Perut</Text>
                        <Text style={{ color: '#333333', fontSize: 20, fontWeight: 'bold' }}>53 Cm</Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>Tinggi</Text>
                        <Text style={{ color: '#333333', fontSize: 20, fontWeight: 'bold' }}>90 Cm</Text>
                    </View>

                </View>
                

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 15 }}>
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>Usia</Text>
                        <Text style={{ color: '#333333', fontSize: 20, fontWeight: 'bold' }}>24 Bulan</Text>
                    </View>

                    <View style={{marginLeft:54}}>
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>Bergabung</Text>
                        <Text style={{ color: '#333333', fontSize: 20, fontWeight: 'bold' }}>20 Nov 2020</Text>
                    </View>
                </View>


                {/* Deskripsi */}
                <Text style={{ fontSize: 14, marginTop:10,fontWeight:'bold' }}>Keadaan Terkini</Text>
                <Text style={{fontSize:12,textAlign:'justify',color:'gray'}}>Kambing BTS 01 pada hari ini memiliki keadaan yang sehat walafiat, tanpa kekurangan apapun, setelah 1 minggu lalu terjatuh dari jurang sedalam 20 meter,dan sempat patah kaki.</Text>

                {/* detail investor */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>Investor</Text>
                        <Text style={{ color: '#333333', fontSize: 14 }}>Ahmad Sobirin</Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>Nilai Investasi</Text>
                        <Text style={{ color: '#333333', fontSize: 14 }}>Rp. 1000.000</Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>Jenis Ternak</Text>
                        <Text style={{ color: '#333333', fontSize: 14 }}>Kambing Garut</Text>
                    </View>

                </View>

                {/* button */}
                <TouchableOpacity style={styles.loginButton}
                onPress = {()=> navigation.navigate('History')}
                >
                    <Text style={{ textAlign: 'center', color: "white", fontWeight: "bold" }}>History</Text>
                </TouchableOpacity>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding:14,
        borderRadius:10
    }, 
    image: {
        width: '100%',
        height:'35%'
        
    },
    loginButton: {
        marginTop: 10,
        marginBottom:10,
        height: 50,
        borderRadius: 10,
        width: '100%',
        marginTop:30,
        backgroundColor: "#50E194",
        justifyContent: "center"
    }
});