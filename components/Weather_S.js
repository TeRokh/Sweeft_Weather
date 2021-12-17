import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'


let weatherInfo;
const weather_S = ({ weather }) => {
    weatherInfo = weather;
    return (
        <CurrentTemp />
    )

}


const CurrentTemp = () => {

    const img = { uri: 'https://openweathermap.org/img/wn/10d@2x.png' }

    return (
        <View style={styles.CurrentTempCont}>
            <Image source={img} style={styles.image} />
            <View style={styles.containertInn}>
                <Text style={styles.day}>{weatherInfo.weekDay}</Text>
                <Text style={styles.temp}>Day : {Math.ceil(weatherInfo.tempDay)}°C</Text>
                <Text style={styles.temp}>Night : {Math.ceil(weatherInfo.tempNight)}°C</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150
    },
    CurrentTempCont: {
        flexDirection: 'row',
        backgroundColor: '#18181bcc',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 1,
        padding: 15,
        margin: 30
    },
    day: {
        fontSize: 20,
        color: "white",
        backgroundColor: "#3c3c44",
        padding: 10,
        textAlign: "center",
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15
    },
    temp: {
        fontSize: 16,
        color: "white",
        fontWeight: "100",
        textAlign: "left"
    },
    containertInn: {
        paddingRight: 40
    }

})



export default weather_S
