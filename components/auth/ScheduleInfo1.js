import React, { Component } from "react";
import { View, Button, TextInput, Text } from "react-native";
import firebase from "firebase";

export class ScheduleInfo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      block1: "",
      block2: "",
      block3: "",
      block4: "",
    };

    this.toNextScreen = this.toNextScreen.bind(this);
  }

  toNextScreen() {
    const { block1, block2, block3, block4 } = this.state;
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((documentSnapshot) => {
        console.log("User exists: ", documentSnapshot.exists);
        if (documentSnapshot.exists) {
          firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .update({
              block1: block1,
              block2: block2,
              block3: block3,
              block4: block4,
            });
        }
      });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Enter your schedule information in the format:</Text>
        <Text>Room Number - Block Number</Text>
        <Text>Example: 111-1</Text>
        <TextInput
          placeholder="Block 1"
          onChangeText={(block1) => this.setState({ block1 })}
        />
        <TextInput
          placeholder="Block 2"
          onChangeText={(block2) => this.setState({ block2 })}
        />
        <TextInput
          placeholder="Block 3"
          onChangeText={(block3) => this.setState({ block3 })}
        />
        <TextInput
          placeholder="Block 4"
          onChangeText={(block4) => this.setState({ block4 })}
        />
        <Button
          title="Save"
          onPress={() => (
            this.toNextScreen(),
            this.props.navigation.navigate("ScheduleInfoTwo")
          )}
        />
      </View>
    );
  }
}

export default ScheduleInfo1;
