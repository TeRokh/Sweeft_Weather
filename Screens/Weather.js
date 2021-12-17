import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Button} from "react-native";
import { SafeAreaView } from "react-native";

import Date_T from "../components/Date_T";
import Weather_S from "../components/Weather_S";
import Next7 from "./Next7";

const img = require("../assets/earth.jpg");
export function Weather() {
    const [weather, setWeather] = useState({
        "tempCurrent": "",
        "tempNight": "",
        "tempDay": "",
        "weekDay": ""
    });

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const API_KEY = "0c64ce6520aa5e1266a4fd6da8b42c72"

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((success) => {
            let { latitude, longitude } = success.coords;
            fetchDataFromApi(latitude, longitude);
        });
    }, []);

    function fetchDataFromApi(latitude, longitude) {
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => {

                let unix_timestamp = data.current.dt
                var date = new Date(unix_timestamp * 1000)

                let daily = data.daily
                    
                for (const item of daily) {
                    let date = new Date(item.dt * 1000)
                    console.log(weekDays[date.getDay()] + " " + Math.ceil(item.temp.day))
                }



                setWeather({
                    "tempCurrent": data.current.temp,
                    "tempNight": data.daily[0].temp.night,
                    "tempDay": data.daily[0].temp.day,
                    "weekDay": weekDays[date.getDay()]
                })
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={img} style={styles.image}>
                <Date_T />

                <Text style={styles.currentTemp}>{Math.ceil(weather.tempCurrent)}°C</Text>

                <Weather_S weather={weather} />
                <View style={styles.cities}>
                    <Button style={styles.btn} title="Tbilisi" onPress={() => fetchDataFromApi("41.6941", "44.8337")}></Button>
                    <Button style={styles.btn} title="Kutaisi" onPress={() => fetchDataFromApi("42.2496", "42.6997")}></Button>
                    <Button style={styles.btn} title="Batumi" onPress={() => fetchDataFromApi("41.6416", "41.6359")}></Button>
                    <Button style={styles.btn} title="Next 7 Days" onPress={() => Next7}></Button>
                </View>

            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    cities: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 20
    },
    currentTemp: {
        fontSize: 30,
        color: "white",
        textAlign: "center",
        marginBottom: 300
    },

    btn:{
        color: "white",
        backgroundColor: "#3c3c44",
    }
});