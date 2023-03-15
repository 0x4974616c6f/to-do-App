import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import Colors from "./src/constants/Colors";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primary} />
      <AppNavigator />
    </NavigationContainer>
  );
}
