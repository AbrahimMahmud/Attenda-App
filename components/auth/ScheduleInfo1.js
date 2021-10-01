import React, { Component } from "react";
import { View, Button, TextInput, Text } from "react-native";
import firebase from "firebase";

export class ScheduleInfo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blk1: "",
      blk2: "",
      blk3: "",
      blk4: "",
      name: "",
    };

    this.toNextScreen = this.toNextScreen.bind(this);
  }

  toNextScreen() {
    const { blk1, blk2, blk3, blk4, name } = this.state;
    const r111b1 = "111-1";
    const r111b2 = "111-2";
    const r111b3 = "111-3";
    const r111b4 = "111-4";
    const r112b1 = "112-1";
    const r112b2 = "112-2";
    const r112b3 = "112-3";
    const r112b4 = "112-4";
    var stringblk1 = String(blk1);
    var stringblk2 = String(blk2);
    var stringblk3 = String(blk3);
    var stringblk4 = String(blk4);

    if (stringblk1 == r111b1) {
      firebase
        .firestore()
        .collection("111-1")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk1);
    }
    if (stringblk1 == r112b1) {
      firebase
        .firestore()
        .collection("112-1")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk1);
    }
    if (stringblk2 == r111b2) {
      firebase
        .firestore()
        .collection("111-2")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk2);
    }
    if (stringblk2 == r112b2) {
      firebase
        .firestore()
        .collection("112-2")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk2);
    }
    if (stringblk3 == r111b3) {
      firebase
        .firestore()
        .collection("111-3")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk3);
    }
    if (stringblk3 == r112b3) {
      firebase
        .firestore()
        .collection("112-3")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk3);
    }
    if (stringblk4 == r111b4) {
      firebase
        .firestore()
        .collection("111-4")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk4);
    }
    if (stringblk4 == r112b4) {
      firebase
        .firestore()
        .collection("112-4")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk4);
    }
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
              block1: blk1,
              block2: blk2,
              block3: blk3,
              block4: blk4,
              name: name,
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
        <Text> </Text>
        <TextInput
          placeholder="Full Name"
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="Block 1"
          onChangeText={(blk1) => this.setState({ blk1 })}
        />
        <TextInput
          placeholder="Block 2"
          onChangeText={(blk2) => this.setState({ blk2 })}
        />
        <TextInput
          placeholder="Block 3"
          onChangeText={(blk3) => this.setState({ blk3 })}
        />
        <TextInput
          placeholder="Block 4"
          onChangeText={(blk4) => this.setState({ blk4 })}
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
