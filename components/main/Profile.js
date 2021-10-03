import React from "react";
import { View, Text, Button, Alert } from "react-native";
import firebase from "firebase";

export default function Profile({ navigation }) {
  const logout = () => {
    Alert.alert(
      "ARE YOU SURE YOU WANT TO SIGN OUT?",
      "",
      [
        {
          text: "YES",
          onPress: () => firebase.auth().signOut(),
        },
        { text: "NO" },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Edit Schedule Info"
        onPress={() => navigation.navigate("Schedule Information")}
      />
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Button title="LOGOUT" onPress={() => logout()} />
    </View>
  );
}
