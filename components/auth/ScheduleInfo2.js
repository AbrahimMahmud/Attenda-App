import React, { Component } from "react";
import { View, Button, TextInput, Text } from "react-native";
import firebase from "firebase";

export class ScheduleInfo2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blk5: "",
      blk6: "",
      blk7: "",
      blk8: "",
      name: "",
    };

    this.backToProfileScreen = this.backToProfileScreen.bind(this);
  }

  backToProfileScreen() {
    const { blk5, blk6, blk7, blk8, name } = this.state;
    const r111b5 = "111-5";
    const r111b6 = "111-6";
    const r111b7 = "111-7";
    const r111b8 = "111-8";
    const r112b5 = "112-5";
    const r112b6 = "112-6";
    const r112b7 = "112-7";
    const r112b8 = "112-8";
    var stringblk5 = String(blk5);
    var stringblk6 = String(blk6);
    var stringblk7 = String(blk7);
    var stringblk8 = String(blk8);

    if (stringblk5 == r111b5) {
      firebase
        .firestore()
        .collection("111-5")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk5);
    }
    if (stringblk5 == r112b5) {
      firebase
        .firestore()
        .collection("112-5")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk5);
    }
    if (stringblk6 == r111b6) {
      firebase
        .firestore()
        .collection("111-6")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk6);
    }
    if (stringblk6 == r112b6) {
      firebase
        .firestore()
        .collection("112-6")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk6);
    }
    if (stringblk7 == r111b7) {
      firebase
        .firestore()
        .collection("111-7")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk7);
    }
    if (stringblk7 == r112b7) {
      firebase
        .firestore()
        .collection("112-7")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk7);
    }
    if (stringblk8 == r111b8) {
      firebase
        .firestore()
        .collection("111-8")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk8);
    }
    if (stringblk8 == r112b8) {
      firebase
        .firestore()
        .collection("112-8")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk8);
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
              block5: blk5,
              block6: blk6,
              block7: blk7,
              block8: blk8,
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
          placeholder="Block 5"
          onChangeText={(blk5) => this.setState({ blk5 })}
        />
        <TextInput
          placeholder="Block 6"
          onChangeText={(blk6) => this.setState({ blk6 })}
        />
        <TextInput
          placeholder="Block 7"
          onChangeText={(blk7) => this.setState({ blk7 })}
        />
        <TextInput
          placeholder="Block 8"
          onChangeText={(blk8) => this.setState({ blk8 })}
        />
        <Button
          title="Save"
          onPress={() => (
            this.backToProfileScreen(), this.props.navigation.navigate("Main")
          )}
        />
      </View>
    );
  }
}

export default ScheduleInfo2;
