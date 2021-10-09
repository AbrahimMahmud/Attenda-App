import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../images/attendalogo.png";

import { useFonts } from "@expo-google-fonts/lato";

export default function MainScan() {
  let [fontsLoaded, error] = useFonts({
    "Lato-Bold": require("../fonts/Lato/Lato-Bold.ttf"),
  });

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#B6E3FC", alignItems: "center" }}>
      <Image source={logo} style={{ width: 305, height: 159 }} />
      <Text
        style={{
          fontFamily: "Lato-Bold",
          fontSize: 30,
          color: "#4F37C1",
        }}
      >
        Attenda
      </Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          title="Press to Start Scan"
          onPress={() => navigation.navigate("ScannerScreen")}
        />
      </View>
    </View>
  );
}
const backgroundStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#B6E3FC",
  },
});
