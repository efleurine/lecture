import React from "react";
// import i18n from "i18n-js";
import { AnimatableManager } from "react-native-ui-lib";
import * as Animatable from "react-native-animatable";
import RNLanguages from "react-native-languages"; // will allow to know when the user change the languages

import AppContainer from "./routes";

// IMPORTANT! Make uilib's animations available globally for the app's use (option to pass adittional animation definitions)
Animatable.initializeRegistryWithDefinitions(
  AnimatableManager.loadAnimationDefinitions(/** customAnimationsDefinitions */)
);

export default class RootContainer extends React.Component {
  componentDidMount() {
    RNLanguages.addEventListener("change", this._onLanguagesChange);
  }

  componentWillUnmount() {
    RNLanguages.removeEventListener("change", this._onLanguagesChange);
  }

  _onLanguagesChange = ({ language }) => {
    console.log("the current language is", language);
    // i18n.locale = language; // update the language - can have fall back
  };

  render() {
    return <AppContainer />;
  }
}