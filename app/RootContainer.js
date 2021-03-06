import React from "react";
// import i18n from "i18n-js";
import { AnimatableManager } from "react-native-ui-lib";
import * as Animatable from "react-native-animatable";
// import RNLanguages from "react-native-languages"; // will allow to know when the user change the languages
import SplashScreen from "react-native-splash-screen";
import Amplify, { Auth } from 'aws-amplify';

import awsmobile from '../aws-exports';
Amplify.configure(awsmobile);



import { Router, NavigationService } from "./routes";

import Placeholder from "./screens/Placeholder";

// IMPORTANT! Make uilib's animations available globally for the app's use (option to pass adittional animation definitions)
Animatable.initializeRegistryWithDefinitions(
  AnimatableManager.loadAnimationDefinitions(/** customAnimationsDefinitions */)
);

// import slowlog from "react-native-slowlog";

export default class RootContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // RNLanguages.addEventListener("change", this._onLanguagesChange);
    // console.log(Animatable);
    // console.log(AnimatableManager);
    SplashScreen.hide();
  }

  componentWillUnmount() {
    // RNLanguages.removeEventListener("change", this._onLanguagesChange);
  }

  _onLanguagesChange = ({ language }) => {
    console.log("the current language is", language);
    // i18n.locale = language; // update the language - can have fall back
  };

  render() {
    return (
      <Router
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
