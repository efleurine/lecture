import React from "react";
import { View, AsyncStorage } from "react-native";
import SplashScreen from "react-native-splash-screen";
// import { Auth } from "../components/auth";
import { Text, Button } from "react-native-ui-lib";
import Auth from "../components/Auth/Basic";

import { appKey } from "../config/asyncKeys";
import { routeNames } from "../routes";

import Intro from "../components/Onboarding/Intro";

export default class Onboarding extends React.Component {
  _checkIn = async () => {
    try {
      await AsyncStorage.setItem(appKey, "en"); // we set the language
      console.log("we set first time");
    } catch (error) {
      // Error saving data - would need to log this to see if it happens.
      // TODO log this error in error tracker
      console.log("eror happens in setting", error);
    }
  };

  _done = () => {
    this.props.navigation.navigate(routeNames.Home);
  };

  componentDidMount() {
    console.log("First time is there");
    SplashScreen.hide();
    this._checkIn();
  }
  render() {
    return <Intro onDone={this._done} />;
  }
}
