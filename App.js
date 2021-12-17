import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Weather } from "./Screens/Weather"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Next7 from "./Screens/Next7";

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

