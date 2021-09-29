import React from "react";
import { View, Text, Button } from "react-native";

export default function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Edit Schedule Info"
        onPress={() => navigation.navigate("ScheduleInfoOne")}
      />
    </View>
  );
}
