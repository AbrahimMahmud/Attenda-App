import React, { Component, useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC16hj_nJV6eRLYIVtdPgANAWQcCAwXh7o",
  authDomain: "attendatest1.firebaseapp.com",
  projectId: "attendatest1",
  storageBucket: "attendatest1.appspot.com",
  messagingSenderId: "536633913499",
  appId: "1:536633913499:web:54ac5d35edd5ffa4a4163e",
  measurementId: "G-MEGB0P7Z33",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import MainScreen from "./components/Main";
import LoginScreen from "./components/auth/Login";
import ScheduleInfoScreen from "./components/auth/ScheduleInfo";
import Scanner from "./components/main/Scanner";

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Loading...</Text>
        </View>
      );
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Attenda">
            <Stack.Screen
              name="Attenda"
              component={MainScreen}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: "#B6E3FC" },
                headerTintColor: "#B6E3FC"
              }}
            />
            <Stack.Screen
              name="Schedule Information"
              component={ScheduleInfoScreen}
              options={{ headerStyle: { backgroundColor: "#B6E3FC" }, headerShown: true }}
            />
            <Stack.Screen name="ScannerScreen" component={Scanner} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
