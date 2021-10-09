import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import firebase from "firebase";
import moment from "moment";

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    const r403b1 = "403-1";
    const r403b3 = "403-3";
    const r403b4 = "403-4";
    const r403b5 = "403-5";
    const r403b8 = "403-8";

    const r409b1 = "409-1";
    const r409b2 = "409-2";
    const r409b3 = "409-3";
    const r409b4 = "409-4";
    const r409b5 = "409-5";
    const r409b6 = "409-6";

    const day1 = "day1";
    const day2 = "day2";
    const day3 = "day3";
    const day4 = "day4";

    const October9 = "10/09/2021";
    const October3 = "10/03/2021";
    const October4 = "10/04/2021";
    const October5 = "10/05/2021";
    const October6 = "10/06/2021";
    const October7 = "10/07/2021";
    const October8 = "10/08/2021";
    const October11 = "10/11/2021";
    const October12 = "10/12/2021";
    const October13 = "10/13/2021";
    const October14 = "10/14/2021";
    const October15 = "10/15/2021";
    const October18 = "10/18/2021";
    const October19 = "10/19/2021";
    const October20 = "10/20/2021";
    const October21 = "10/21/2021";
    const October22 = "10/22/2021";
    const October25 = "10/25/2021";
    const October26 = "10/26/2021";
    const October27 = "10/27/2021";
    const October28 = "10/28/2021";
    const October29 = "10/29/2021";

    const November1 = "11/01/2021";
    const November2 = "11/02/2021";
    const November3 = "11/03/2021";
    const November4 = "11/04/2021";
    const November5 = "11/05/2021";
    const November8 = "11/08/2021";
    const November9 = "11/09/2021";
    const November10 = "11/10/2021";
    const November11 = "11/11/2021";
    const November12 = "11/12/2021";
    const November15 = "11/15/2021";
    const November16 = "11/16/2021";
    const November17 = "11/17/2021";
    const November18 = "11/18/2021";
    const November19 = "11/19/2021";
    const November22 = "11/22/2021";
    const November23 = "11/23/2021";
    const November24 = "11/24/2021";

    var TimeInt = moment().utcOffset("-4:00").format("HHmm");

    var date = moment().format("MM/DD/YYYY");

    var day;

    if (date == October9) {
      day = day1;
    }
    if (date == October3) {
      day = day2;
    }
    if (date == October4) {
      day = day1;
    }
    if (date == October5) {
      day = day4;
    }
    if (date == October6) {
      day = day3;
    }
    if (date == October7) {
      day = day2;
    }
    if (date == October8) {
      day = day1;
    }
    if (date == October11) {
      day = day4;
    }
    if (date == October12) {
      day = day3;
    }
    if (date == October13) {
      day = day2;
    }
    if (date == October14) {
      day = day1;
    }
    if (date == October15) {
      day = day4;
    }
    if (date == October18) {
      day = day3;
    }
    if (date == October19) {
      day = day2;
    }
    if (date == October20) {
      day = day1;
    }
    if (date == October21) {
      day = day4;
    }
    if (date == October22) {
      day = day3;
    }
    if (date == October25) {
      day = day2;
    }
    if (date == October26) {
      day = day1;
    }
    if (date == October27) {
      day = day4;
    }
    if (date == October28) {
      day = day3;
    }
    if (date == October29) {
      day = day2;
    }
    if (date == November1) {
      day = day1;
    }
    if (date == November2) {
      day = day4;
    }
    if (date == November3) {
      day = day3;
    }
    if (date == November4) {
      day = day2;
    }
    if (date == November5) {
      day = day1;
    }
    if (date == November8) {
      day = day4;
    }
    if (date == November9) {
      day = day3;
    }
    if (date == November10) {
      day = day2;
    }
    if (date == November11) {
      day = day1;
    }
    if (date == November12) {
      day = day4;
    }
    if (date == November15) {
      day = day3;
    }
    if (date == November16) {
      day = day2;
    }
    if (date == November17) {
      day = day1;
    }
    if (date == November18) {
      day = day4;
    }
    if (date == November19) {
      day = day3;
    }
    if (date == November22) {
      day = day2;
    }
    if (date == November23) {
      day = day1;
    }
    if (date == November24) {
      day = day4;
    }
    const firstBlockStart = 835;
    const secondBlockStart = 940;
    const thirdBlockStart = 1035;
    const fourthBlockStart = 1130;
    const fifthBlockStart = 1310;
    const sixthBlockStart = 1405;

    var diffInTimeFirstBlock = firstBlockStart - TimeInt;
    var diffInTimeSecondBlock = secondBlockStart - TimeInt;
    var diffInTimeThirdBlock = thirdBlockStart - TimeInt;
    var diffInTimeFourthBlock = fourthBlockStart - TimeInt;
    var diffInTimeFifthBlock = fifthBlockStart - TimeInt;
    var diffInTimeSixthBlock = sixthBlockStart - TimeInt;

    const tardy = "tardy";
    const present = "present";
    const absent = "absent";

    var attendance;

    //DAY 1
    if (day == day1) {
      //ROOM 403 BLOCK 1
      if (data == r403b1) {
        if (diffInTimeFirstBlock > 35) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFirstBlock < 0 && diffInTimeFirstBlock > -100) {
          attendance = tardy;
          
          firebase
            .firestore()
            .collection("403-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock >= 0 && diffInTimeFirstBlock <= 35) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock < -100) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 1
      if (data == r409b1) {
        if (diffInTimeFirstBlock > 35) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFirstBlock < 0 && diffInTimeFirstBlock > -100) {
          attendance = tardy;
          
          firebase
            .firestore()
            .collection("409-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock >= 0 && diffInTimeFirstBlock <= 35) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock < -100) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 2
      if (data == r409b2) {
        if (diffInTimeSecondBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeSecondBlock < 0 && diffInTimeSecondBlock > -90) {
          attendance = tardy;
          
          firebase
            .firestore()
            .collection("409-2")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock >= 0 && diffInTimeSecondBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-2")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-2")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 403 BLOCK 3
      if (data == r403b3) {
        if (diffInTimeThirdBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeThirdBlock < 0 && diffInTimeThirdBlock > -90) {
          attendance = tardy;
          
          firebase
            .firestore()
            .collection("403-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock >= 0 && diffInTimeThirdBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 3
      if (data == r409b3) {
        if (diffInTimeThirdBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeThirdBlock < 0 && diffInTimeThirdBlock > -90) {
          attendance = tardy;
          
          firebase
            .firestore()
            .collection("409-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock >= 0 && diffInTimeThirdBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      if (data == r403b4) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 4 ON A DAY 1",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
      if (data == r409b4) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 4 ON A DAY 1",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
      //ROOM 403 BLOCK 5
      if (data == r403b5) {
        if (diffInTimeFourthBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFourthBlock < 0 && diffInTimeFourthBlock > -90) {
          attendance = tardy;
          
          firebase
            .firestore()
            .collection("403-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFourthBlock >= 0 && diffInTimeFourthBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFourthBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 5
      if (data == r409b5) {
        if (diffInTimeFourthBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFourthBlock < 0 && diffInTimeFourthBlock > -90) {
          attendance = tardy;
          
          firebase
            .firestore()
            .collection("409-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFourthBlock >= 0 && diffInTimeFourthBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFourthBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 6
      if (data == r409b6) {
        if (diffInTimeFifthBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFifthBlock < 0 && diffInTimeFifthBlock > -90) {
          attendance = tardy;
          
          firebase
            .firestore()
            .collection("409-6")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFifthBlock >= 0 && diffInTimeFifthBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-6")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFifthBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-6")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
    }

    //DAY 2
    if (day == day2) {
      if (data == r403b1) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 1 ON A DAY 2",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
      if (data == r409b1) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 1 ON A DAY 2",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
      //ROOM 409 BLOCK 2
      if (data == r409b2) {
        if (diffInTimeFirstBlock > 35) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFirstBlock < 0 && diffInTimeFirstBlock > -100) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("409-2")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock >= 0 && diffInTimeFirstBlock <= 35) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-2")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock < -100) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-2")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 403 BLOCK 3
      if (data == r403b3) {
        if (diffInTimeSecondBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeSecondBlock < 0 && diffInTimeSecondBlock > -90) {
          attendance = tardy;
          
          firebase
            .firestore()
            .collection("403-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock >= 0 && diffInTimeSecondBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 3
      if (data == r409b3) {
        if (diffInTimeSecondBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeSecondBlock < 0 && diffInTimeSecondBlock > -90) {
          attendance = tardy;
          
          firebase
            .firestore()
            .collection("409-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock >= 0 && diffInTimeSecondBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 403 BLOCK 4
      if (data == r403b4) {
        if (diffInTimeThirdBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeThirdBlock < 0 && diffInTimeThirdBlock > -90) {
          attendance = tardy;
          
          firebase
            .firestore()
            .collection("403-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock >= 0 && diffInTimeThirdBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 4
      if (data == r409b4) {
        if (diffInTimeThirdBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeThirdBlock < 0 && diffInTimeThirdBlock > -90) {
          attendance = tardy;
          
          firebase
            .firestore()
            .collection("409-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock >= 0 && diffInTimeThirdBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      if (data == r403b5) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 5 ON A DAY 2",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
      if (data == r409b5) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 5 ON A DAY 2",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
      //ROOM 409 BLOCK 6
      if (data == r409b6) {
        if (diffInTimeFourthBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFourthBlock < 0 && diffInTimeFourthBlock > -90) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("409-6")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFourthBlock >= 0 && diffInTimeFourthBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-6")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFourthBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-6")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 403 BLOCK 8
      if (data == r403b8) {
        if (diffInTimeSixthBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeSixthBlock < 0 && diffInTimeSixthBlock > -100) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("403-8")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSixthBlock >= 0 && diffInTimeSixthBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-8")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSixthBlock < -100) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-8")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
    }
    //DAY 3
    if (day == day3) {
      if (data == r409b2) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 2 ON A DAY 3",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
      //ROOM 403 BLOCK 3
      if (data == r403b3) {
        if (diffInTimeFirstBlock > 35) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFirstBlock < 0 && diffInTimeFirstBlock > -100) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("403-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock >= 0 && diffInTimeFirstBlock <= 35) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock < -100) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 3
      if (data == r409b3) {
        if (diffInTimeFirstBlock > 35) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFirstBlock < 0 && diffInTimeFirstBlock > -100) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("409-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock >= 0 && diffInTimeFirstBlock <= 35) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock < -100) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-3")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 403 BLOCK 4
      if (data == r403b4) {
        if (diffInTimeSecondBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeSecondBlock < 0 && diffInTimeSecondBlock > -90) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("403-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock >= 0 && diffInTimeSecondBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 4
      if (data == r409b4) {
        if (diffInTimeSecondBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeSecondBlock < 0 && diffInTimeSecondBlock > -90) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("409-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock >= 0 && diffInTimeSecondBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 403 BLOCK 1
      if (data == r403b1) {
        if (diffInTimeThirdBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeThirdBlock < 0 && diffInTimeThirdBlock > -90) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("403-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock >= 0 && diffInTimeThirdBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 1
      if (data == r409b1) {
        if (diffInTimeThirdBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeThirdBlock < 0 && diffInTimeThirdBlock > -90) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("409-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock >= 0 && diffInTimeThirdBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      if (data == r409b6) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 6 ON A DAY 3",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
      //ROOM 403 BLOCK 8
      if (data == r403b8) {
        if (diffInTimeFifthBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFifthBlock < 0 && diffInTimeFifthBlock > -90) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("403-8")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFifthBlock >= 0 && diffInTimeFifthBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-8")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFifthBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-8")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 403 BLOCK 5
      if (data == r403b5) {
        if (diffInTimeSixthBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeSixthBlock < 0 && diffInTimeSixthBlock > -100) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("403-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSixthBlock >= 0 && diffInTimeSixthBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSixthBlock < -100) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 5
      if (data == r409b5) {
        if (diffInTimeSixthBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeSixthBlock < 0 && diffInTimeSixthBlock > -100) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("409-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSixthBlock >= 0 && diffInTimeSixthBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSixthBlock < -100) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
    }
    //DAY 4
    if (day == day4) {
      //ROOM 403 BLOCK 4
      if (data == r403b4) {
        if (diffInTimeFirstBlock > 35) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFirstBlock < 0 && diffInTimeFirstBlock > -100) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("403-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock >= 0 && diffInTimeFirstBlock <= 35) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock < -100) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 4
      if (data == r409b4) {
        if (diffInTimeFirstBlock > 35) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFirstBlock < 0 && diffInTimeFirstBlock > -100) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("409-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock >= 0 && diffInTimeFirstBlock <= 35) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFirstBlock < -100) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-4")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 403 BLOCK 1
      if (data == r403b1) {
        if (diffInTimeSecondBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeSecondBlock < 0 && diffInTimeSecondBlock > -90) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("403-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock >= 0 && diffInTimeSecondBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 1
      if (data == r409b1) {
        if (diffInTimeSecondBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeSecondBlock < 0 && diffInTimeSecondBlock > -90) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("409-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock >= 0 && diffInTimeSecondBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSecondBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-1")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 2
      if (data == r409b2) {
        if (diffInTimeThirdBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeThirdBlock < 0 && diffInTimeThirdBlock > -90) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("409-2")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock >= 0 && diffInTimeThirdBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-2")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeThirdBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-2")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      if (data == r403b3) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 3 ON A DAY 4",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
      if (data == r409b3) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 3 ON A DAY 4",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
      //ROOM 403 BLOCK 8
      if (data == r403b8) {
        if (diffInTimeFourthBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFourthBlock < 0 && diffInTimeFourthBlock > -90) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("403-8")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFourthBlock >= 0 && diffInTimeFourthBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-8")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFourthBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-8")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 403 BLOCK 5
      if (data == r403b5) {
        if (diffInTimeFifthBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFifthBlock < 0 && diffInTimeFifthBlock > -90) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("403-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFifthBlock >= 0 && diffInTimeFifthBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("403-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFifthBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("403-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 5
      if (data == r409b5) {
        if (diffInTimeFifthBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeFifthBlock < 0 && diffInTimeFifthBlock > -90) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("409-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFifthBlock >= 0 && diffInTimeFifthBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeFifthBlock < -90) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-5")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
      //ROOM 409 BLOCK 6
      if (data == r409b6) {
        if (diffInTimeSixthBlock > 10) {
          Alert.alert(
            "YOU ARE TOO EARLY TO THIS CLASS",
            "PLEASE WAIT FOR CLASS TO BEGIN, THEN SCAN THE QR TO BE MARKED IN",
            [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
          );
        }
        if (diffInTimeSixthBlock < 0 && diffInTimeSixthBlock > -100) {
          attendance = tardy;
          firebase
            .firestore()
            .collection("409-6")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("TARDY", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSixthBlock >= 0 && diffInTimeSixthBlock <= 10) {
          attendance = present;
          firebase
            .firestore()
            .collection("409-6")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("PRESENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        } else if (diffInTimeSixthBlock < -100) {
          attendance = absent;
          firebase
            .firestore()
            .collection("409-6")
            .doc(firebase.auth().currentUser.uid)
            .update({
              status: attendance,
            });
          Alert.alert("ABSENT", data, [
            { text: "OK", onPress: () => navigation.navigate("Attenda") },
          ]);
        }
      }
    }
    setScanned(true);
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
