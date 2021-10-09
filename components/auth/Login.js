import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";

import firebase from "firebase";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log("success: " + result);
      })
      .then((error) => {
        console.log("error: " + error);
      });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#B6E3FC",
        }}
      >
        <View
          style={{ flex: 9, justifyContent: "center", alignItems: "center" }}
        >
          <TextInput
            style={{ fontSize: 20 }}
            placeholder="email"
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            style={{ paddingTop: 10, fontSize: 20 }}
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        <View
          style={{ flex: 10, alignItems: "center", justifyContent: "center" }}
        >
          <Button onPress={() => this.onSignUp()} title="Sign In" />
        </View>
      </View>
    );
  }
}

export default Login;
