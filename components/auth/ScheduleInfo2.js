import React, { Component } from "react";
import { View, Button, TextInput, Text } from "react-native";
import firebase from "firebase";

export class ScheduleInfo2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      block5: "",
      block6: "",
      block7: "",
      block8: "",
    };

    this.backToProfileScreen = this.backToProfileScreen.bind(this);
  }

  backToProfileScreen() {
    const { block5, block6, block7, block8 } = this.state;
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
              block5: block5,
              block6: block6,
              block7: block7,
              block8: block8,
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
          placeholder="Block 5"
          onChangeText={(block5) => this.setState({ block5 })}
        />
        <TextInput
          placeholder="Block 6"
          onChangeText={(block6) => this.setState({ block6 })}
        />
        <TextInput
          placeholder="Block 7"
          onChangeText={(block7) => this.setState({ block7 })}
        />
        <TextInput
          placeholder="Block 8"
          onChangeText={(block8) => this.setState({ block8 })}
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
