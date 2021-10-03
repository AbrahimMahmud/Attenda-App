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
      blk5: "",
      blk6: "",
      blk7: "",
      blk8: "",
    };

    this.backToProfileScreen = this.backToProfileScreen.bind(this);
  }

  backToProfileScreen() {
    const { blk1, blk2, blk3, blk4, name, blk5, blk6, blk7, blk8 } = this.state;
    const r111b1 = "111-1";
    const r111b2 = "111-2";
    const r111b3 = "111-3";
    const r111b4 = "111-4";
    const r112b1 = "112-1";
    const r112b2 = "112-2";
    const r112b3 = "112-3";
    const r112b4 = "112-4";
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
              block1: blk1,
              block2: blk2,
              block3: blk3,
              block4: blk4,
              block5: blk5,
              block6: blk6,
              block7: blk7,
              block8: blk8,
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
            this.backToProfileScreen(),
            this.props.navigation.navigate("Attenda")
          )}
        />
      </View>
    );
  }
}

export default ScheduleInfo1;
