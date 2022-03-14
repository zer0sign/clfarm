import Checkbox from 'expo-checkbox';
import React, { useState } from 'react'
import {View,Image, Text,StyleSheet,TouchableOpacity} from 'react-native'


export default function FormFeed() {

    const [isGrass, setGrass] = useState(false);
    const [isLeaf, setLeaf] = useState(false);
    const [isOther, setOther] = useState(false);
    const [isVit, setVit] = useState(false);


return (
    <View style={styles.container}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',}}>
            <Image
                style={styles.image}
                source={require('../../../assets/goat.png')}
            />
        </View>
        <View style={{
            flexDirection:'column',
            alignItems:'center'
        }}>
            <Text style={{ fontWeight: 'bold', color: '#333333', fontSize: 14 }}>Memberi Makan</Text>
            <Text style={{ fontWeight: 'bold', color: '#333333', fontSize: 20 }}>Kambing BTS 01</Text>
            <Text style={{ fontWeight: 'bold', color: '#333333', fontSize: 10 }}>Pada 11:02 11-02-2022</Text>
        </View>


        {/* checkbox */}
        <Text style={{marginLeft:10,fontSize:16, fontWeight:'bold',color:'#333333',marginTop:10}}>Jenis Makanan</Text>
        <View style={styles.section}>
            <Checkbox
                style={styles.checkbox}
                value={isGrass}
                onValueChange={setGrass}
                color={isGrass ? '#4630EB' : undefined}
            />
            <Text style={styles.paragraph}>Rumput</Text>
        </View>
        <View style={styles.section}>
            <Checkbox
                style={styles.checkbox}
                value={isLeaf}
                onValueChange={setLeaf}
                color={isLeaf ? '#4630EB' : undefined}
            />
            <Text style={styles.paragraph}>Daun-daunan</Text>
        </View>
        <View style={styles.section}>
            <Checkbox
                style={styles.checkbox}
                value={isOther}
                onValueChange={setOther}
                color={isOther ? '#4630EB' : undefined}
            />
            <Text style={styles.paragraph}>Lainnya</Text>
        </View>

        {/* vitamin */}

        <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold', color: '#333333', marginTop: 10 }}>Tambahan Vitamin</Text>
        <View style={styles.section}>
            <Checkbox
                style={styles.checkbox}
                value={isVit}
                onValueChange={setVit}
                color={isVit ? '#4630EB' : undefined}
            />
            <Text style={styles.paragraph}>Ya</Text>
        </View>

        <TouchableOpacity style={styles.loginButton}>
            <Text style={{ textAlign: 'center', color: "white", fontWeight: "bold" }}>Beri Makan</Text>
        </TouchableOpacity>
    </View>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea",
    },
    image: {
        borderRadius: 100,
        width:140,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 10,
        marginLeft:15
    },
    loginButton: {
        marginTop: 10,
        height: 50,
        borderRadius: 10,
        width: 300,
        backgroundColor: "#50E194",
        justifyContent: "center"
    }
});