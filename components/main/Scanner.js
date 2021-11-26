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

  const handleBarCodeScanned = ({ data }) => {
    //room 403 block 1 qr codes
    const r403n1 = "403n1"
    const r403n2 = "403n2"
    const r403n3 = "403n3"
    const r403n4 = "403n4"
    const r403n5 = "403n5"
    const r403n6 = "403n6"
    const r403n7 = "403n7"
    const r403n8 = "403n8"
    const r403n9 = "403n9"
    const r403n10 = "403n10"
    const r403n11 = "403n11"
    const r403n12 = "403n12"
    const r403n13 = "403n13"
    const r403n14 = "403n14"
    const r403n15 = "403n15"
    const r403n16 = "403n16"
    const r403n17 = "403n17"

    //room 403 block 4 qr codes
    const r403n18 = "403n18"
    const r403n19 = "403n19"
    const r403n20 = "403n20"
    const r403n21 = "403n21"
    const r403n22 = "403n22"
    const r403n23 = "403n23"
    const r403n24 = "403n24"
    const r403n25 = "403n25"
    const r403n26 = "403n26"
    const r403n27 = "403n27"
    const r403n28 = "403n28"
    const r403n29 = "403n29"
    const r403n30 = "403n30"
    const r403n31 = "403n31"
    const r403n32 = "403n32"
    const r403n33 = "403n33"
    const r403n34 = "403n34"

    //room 409 block 1 qr codes
    const r409n1 = "409n1"
    const r409n2 = "409n2"
    const r409n3 = "409n3"
    const r409n4 = "409n4"
    const r409n5 = "409n5"
    const r409n6 = "409n6"
    const r409n7 = "409n7"
    const r409n8 = "409n8"
    const r409n9 = "409n9"
    const r409n10 = "409n10"
    const r409n11 = "409n11"
    const r409n12 = "409n12"
    const r409n13 = "409n13"
    const r409n14 = "409n14"
    const r409n15 = "409n15"
    const r409n16 = "409n16"
    const r409n17 = "409n17"

    //room 409 block 2 qr codes
    const r409n18 = "409n18"
    const r409n19 = "409n19"
    const r409n20 = "409n20"
    const r409n21 = "409n21"
    const r409n22 = "409n22"
    const r409n23 = "409n23"
    const r409n24 = "409n24"
    const r409n25 = "409n25"
    const r409n26 = "409n26"
    const r409n27 = "409n27"
    const r409n28 = "409n28"
    const r409n29 = "409n29"
    const r409n30 = "409n30"
    const r409n31 = "409n31"
    const r409n32 = "409n32"
    const r409n33 = "409n33"
    const r409n34 = "409n34"

    const day1 = "day1";
    const day2 = "day2";
    const day3 = "day3";
    const day4 = "day4";

    //november dates
    const November24 = "11/24/2021";
    const November29 = "11/29/2021";
    const November30 = "11/30/2021";

    //december dates
    const December1 = "12/01/2021";
    const December2 = "12/02/2021";
    const December3 = "12/03/2021";
    const December6 = "12/06/2021";
    const December7 = "12/07/2021";
    const December8 = "12/08/2021";
    const December9 = "12/09/2021";
    const December10 = "12/10/2021";
    const December13 = "12/13/2021";
    const December14 = "12/14/2021";
    const December15 = "12/15/2021";
    const December16 = "12/16/2021";
    const December17 = "12/17/2021";

    //test dates
    const testdate = "11/26/2021";

    //extra dates (week with only two full days)
    const December20 = "12/20/2021";
    const December21 = "12/21/2021";

    var TimeInt = moment().utcOffset("-4:00").format("HHmm");

    var date = moment().format("MM/DD/YYYY");

    var day;

    //var for qr codes
    var room403b1;
    var room403b4;
    var room409b1;
    var room409b2;

    if (date == testdate) {
      day = day1;
      room403b1 = r403n1;
      room403b4 = r403n18;
      room409b1 = r409n1;
      room409b2 = r409n18;
    }

    //START OF EXPERIMENT
    if (date == November29) {
      day = day4;
      room403b1 = r403n1;
      room403b4 = r403n18;
      room409b1 = r409n1;
      room409b2 = r409n18;
    }
    if (date == November30) {
      day = day3;
      room403b1 = r403n2;
      room403b4 = r403n19;
      room409b1 = r409n2;
      room409b2 = r409n19;
    }
    if (date == December1) {
      day = day2;
      room403b1 = r403n3;
      room403b4 = r403n20;
      room409b1 = r409n3;
      room409b2 = r409n20;
    }
    if (date == December2) {
      day = day1;
      room403b1 = r403n4;
      room403b4 = r403n21;
      room409b1 = r409n4;
      room409b2 = r409n21;
    }
    if (date == December3) {
      day = day4;
      room403b1 = r403n5;
      room403b4 = r403n22;
      room409b1 = r409n5;
      room409b2 = r409n22;
    }
    if (date == December6) {
      day = day3;
      room403b1 = r403n6;
      room403b4 = r403n23;
      room409b1 = r409n6;
      room409b2 = r409n23;
    }
    if (date == December7) {
      day = day2;
      room403b1 = r403n7;
      room403b4 = r403n24;
      room409b1 = r409n7;
      room409b2 = r409n24;
    }
    if (date == December8) {
      day = day1;
      room403b1 = r403n8;
      room403b4 = r403n25;
      room409b1 = r409n8;
      room409b2 = r409n25;
    }
    if (date == December9) {
      day = day4;
      room403b1 = r403n9;
      room403b4 = r403n26;
      room409b1 = r409n9;
      room409b2 = r409n26;
    }
    if (date == December10) {
      day = day3;
      room403b1 = r403n10;
      room403b4 = r403n27;
      room409b1 = r409n10;
      room409b2 = r409n27;
    }
    if (date == December13) {
      day = day2;
      room403b1 = r403n11;
      room403b4 = r403n28;
      room409b1 = r409n11;
      room409b2 = r409n28;
    }
    if (date == December14) {
      day = day1;
      room403b1 = r403n12;
      room403b4 = r403n29;
      room409b1 = r409n12;
      room409b2 = r409n29;
    }
    if (date == December15) {
      day = day4;
      room403b1 = r403n13;
      room403b4 = r403n30;
      room409b1 = r409n13;
      room409b2 = r409n30;
    }
    if (date == December16) {
      day = day3;
      room403b1 = r403n14;
      room403b4 = r403n31;
      room409b1 = r409n14;
      room409b2 = r409n31;
    }
    if (date == December17) {
      day = day2;
      room403b1 = r403n15;
      room403b4 = r403n32;
      room409b1 = r409n15;
      room409b2 = r409n32;
    }
    //END OF EXPERIMENT

    //START OF EXTRA DAYS
    if (date == December20) {
      day = day1;
      room403b1 = r403n16;
      room403b4 = r403n33;
      room409b1 = r409n16;
      room409b2 = r409n33;
    }
    if (date == December21) {
      day = day4;
      room403b1 = r403n17;
      room403b4 = r403n34;
      room409b1 = r409n17;
      room409b2 = r409n34;
    }
    //END OF EXTRA DAYS

    const firstBlockStart = 835;
    const secondBlockStart = 940;
    const thirdBlockStart = 1035;

    var diffInTimeFirstBlock = firstBlockStart - TimeInt;
    var diffInTimeSecondBlock = secondBlockStart - TimeInt;
    var diffInTimeThirdBlock = thirdBlockStart - TimeInt;

    const tardy = "tardy";
    const present = "present";
    const absent = "absent";

    var attendance;

    //DAY 1
    if (day == day1) {
      //ROOM 403 BLOCK 1
      if (data == room403b1) {
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
      if (data == room409b1) {
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
      if (data == room409b2) {
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
      if (data == room403b4) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 4 ON A DAY 1",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
    }

    //DAY 2
    if (day == day2) {
      if (data == room403b1) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 1 ON A DAY 2",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
      if (data == room409b1) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 1 ON A DAY 2",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
      //ROOM 409 BLOCK 2
      if (data == room409b2) {
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
      //ROOM 403 BLOCK 4
      if (data == room403b4) {
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
    }
    //DAY 3
    if (day == day3) {
      if (data == room409b2) {
        Alert.alert(
          "YOU DO NOT HAVE BLOCK 2 ON A DAY 3",
          "CHECK YOUR SCHEDULE TO FIND WHICH CLASS YOU HAVE RIGHT NOW",
          [{ text: "OK", onPress: () => navigation.navigate("Attenda") }]
        );
      }
      //ROOM 403 BLOCK 4
      if (data == room403b4) {
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
      //ROOM 403 BLOCK 1
      if (data == room403b1) {
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
      if (data == room409b1) {
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
    }
    //DAY 4
    if (day == day4) {
      //ROOM 403 BLOCK 4
      if (data == room403b4) {
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
      //ROOM 403 BLOCK 1
      if (data == room403b1) {
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
      if (data == room409b1) {
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
      if (data == room409b2) {
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
