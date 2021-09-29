import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MainScan() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Press to Start Scan"
        onPress={() => navigation.navigate("ScannerScreen")}
      />
    </View>
  );
}
