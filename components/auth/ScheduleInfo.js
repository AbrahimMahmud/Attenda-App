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
    //ROOM 403
    const r403b1 = "403-1";
    const r403b3 = "403-3";
    const r403b4 = "403-4";
    const r403b5 = "403-5";
    const r403b8 = "403-8";

    //ROOM 409
    const r409b1 = "409-1";
    const r409b2 = "409-2";
    const r409b3 = "409-3";
    const r409b4 = "409-4";
    const r409b5 = "409-5";
    const r409b6 = "409-6";
    var stringblk5 = String(blk5);
    var stringblk6 = String(blk6);
    var stringblk8 = String(blk8);
    var stringblk1 = String(blk1);
    var stringblk2 = String(blk2);
    var stringblk3 = String(blk3);
    var stringblk4 = String(blk4);

    //ROOM 403
    if (stringblk1 == r403b1) {
      firebase
        .firestore()
        .collection("403-1")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk1);
    }
    if (stringblk3 == r403b3) {
      firebase
        .firestore()
        .collection("403-3")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk3);
    }
    if (stringblk4 == r403b4) {
      firebase
        .firestore()
        .collection("403-4")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk4);
    }
    if (stringblk5 == r403b5) {
      firebase
        .firestore()
        .collection("403-5")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk5);
    }
    if (stringblk8 == r403b8) {
      firebase
        .firestore()
        .collection("403-8")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk8);
    }

    //ROOM 409
    if (stringblk1 == r409b1) {
      firebase
        .firestore()
        .collection("409-1")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk1);
    }
    if (stringblk2 == r409b2) {
      firebase
        .firestore()
        .collection("409-2")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk2);
    }
    if (stringblk3 == r409b3) {
      firebase
        .firestore()
        .collection("409-3")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk3);
    }
    if (stringblk4 == r409b4) {
      firebase
        .firestore()
        .collection("409-4")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk4);
    }
    if (stringblk5 == r409b5) {
      firebase
        .firestore()
        .collection("409-5")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk5);
    }
    if (stringblk6 == r409b6) {
      firebase
        .firestore()
        .collection("409-6")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name: name,
        });
      console.log(stringblk6);
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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#B6E3FC",
        }}
      >
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 18 }}>
            Enter your schedule information in the format:
          </Text>
          <Text style={{ fontSize: 18 }}>Room Number - Block Number</Text>
          <Text style={{ fontSize: 18 }}>Example: 111-1</Text>
          <Text> </Text>
          <TextInput
            style={{ fontSize: 20 }}
            placeholder="Full Name"
            onChangeText={(name) => this.setState({ name })}
          />
          <TextInput
            style={{ paddingTop: 10, fontSize: 20 }}
            placeholder="Block 1"
            onChangeText={(blk1) => this.setState({ blk1 })}
          />
          <TextInput
            style={{ paddingTop: 10, fontSize: 20 }}
            placeholder="Block 2"
            onChangeText={(blk2) => this.setState({ blk2 })}
          />
          <TextInput
            style={{ paddingTop: 10, fontSize: 20 }}
            placeholder="Block 3"
            onChangeText={(blk3) => this.setState({ blk3 })}
          />
          <TextInput
            style={{ paddingTop: 10, fontSize: 20 }}
            placeholder="Block 4"
            onChangeText={(blk4) => this.setState({ blk4 })}
          />
          <TextInput
            style={{ paddingTop: 10, fontSize: 20 }}
            placeholder="Block 5"
            onChangeText={(blk5) => this.setState({ blk5 })}
          />
          <TextInput
            style={{ paddingTop: 10, fontSize: 20 }}
            placeholder="Block 6"
            onChangeText={(blk6) => this.setState({ blk6 })}
          />
          <TextInput
            style={{ paddingTop: 10, fontSize: 20 }}
            placeholder="Block 7"
            onChangeText={(blk7) => this.setState({ blk7 })}
          />
          <TextInput
            style={{ paddingTop: 10, fontSize: 20 }}
            placeholder="Block 8"
            onChangeText={(blk8) => this.setState({ blk8 })}
          />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button
            title="Save"
            onPress={() => (
              this.backToProfileScreen(),
              this.props.navigation.navigate("Attenda")
            )}
          />
        </View>
      </View>
    );
  }
}

export default ScheduleInfo1;
