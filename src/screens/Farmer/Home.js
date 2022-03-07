import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, } from 'react-native'


// components
import Header from '../../components/Header';
import CardUser from '../../components/CardUser';
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Header />
            <CardUser/>
            <View style={{flexDirection:"row", marginTop:20, justifyContent:"space-between"}}>
                <View style={{ backgroundColor:'#23ACA8', borderRadius:5}}>
                    <View style={styles.header}>
                        <View>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>Peternakan</Text>
                        </View>
                        <View>
                            <Image
                                style={styles.icon}
                                source={require(`../../assets/noto_goat.png`)}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: '#C1DC7D', borderRadius: 5 }}>
                    <View style={styles.header}>
                        <View>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>Pertanian</Text>
                        </View>
                        <View>
                            <Image
                                style={styles.icon}
                                source={require(`../../assets/tree.png`)}
                            />
                        </View>
                    </View>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
    header: {
        width: 150,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
});