import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'


const FutureFor = () => {
    return (
        <View style={{flexDirection:'row'}}>
            <FutureForItem />
            <FutureForItem />
            <FutureForItem />
        </View>
    )
}

const FutureForItem = () => {
    const img = {uri: "http://openweathermap.org/img/wn/10d@2x.png"}
    return (
        <View style={styles.futureForCont} >
            <Text style={styles.day}>mon</Text>
            <Image source={img} style={styles.image} />
            <Text  style={styles.temp}>Night - °</Text>
            <Text  style={styles.temp}>Day - °</Text>

        </View>
    )
}

export default FutureFor


const styles = StyleSheet.create({
    image: {
        width: 100,
        height:100
    }, 
    futureForCont: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#18181bcc',
        borderRadius:10,
        borderColor:"#eee",
        borderWidth:1,
        padding: 20,
        marginLeft: 10
    }, 
    day: {
        fontSize: 20,
        color:"white",
        backgroundColor: "#3c3c44",
        padding: 10,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15
    },   
    temp: {
        fontSize: 14,
        color:"white",
        fontWeight:"100",
        textAlign:"center"
    },
   
})