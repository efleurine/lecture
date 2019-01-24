import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
// import { withNamespaces } from "react-i18next";

import PlaceholderScreen from "../screens/Placeholder";
import LaunchScreen from "../screens/Launch";
import OnboardingScreen from "../screens/Onboarding";
import HomeScreen from "../screens/Home";

export const routeNames = {
  Launch: "Launch",
  Onboarding: "Onboarding",
  Home: "Home",
  Placeholder: "Placeholder",
  AppStack: "AppStack",
  AuthStack: "AuthStack"
};

const AppStack = createStackNavigator(
  {
    [routeNames.Home]: { screen: HomeScreen },
    [routeNames.Placeholder]: { screen: PlaceholderScreen }
  },
  {
    initialRouteName: routeNames.Home
  }
);

const AuthStack = createStackNavigator({
  [routeNames.Onboarding]: { screen: OnboardingScreen }
});

const MainNavigator = createSwitchNavigator(
  {
    [routeNames.Launch]: { screen: LaunchScreen },
    [routeNames.AppStack]: AppStack,
    [routeNames.AuthStack]: AuthStack
  },
  {
    initialRouteName: routeNames.Launch
  }
);

// Wrapping a stack with translation hoc asserts we get new render on language change
// the hoc is set to only trigger rerender on languageChanged
// class WrappedStack extends React.Component {
//   static router = MainNavigator.router;
//   render() {
//     const { t } = this.props;
//     return <MainNavigator screenProps={{ t }} {...this.props} />;
//   }
// }
// const ReloadAppOnLanguageChange = withNamespaces("common", {
//   bindI18n: "languageChanged",
//   bindStore: false
// })(createAppContainer(WrappedStack));

// The entry point using a react navigation stack navigation
// gets wrapped by the I18nextProvider enabling using translations
// https://github.com/i18next/react-i18next#i18nextprovider
// export class AppContainer extends React.PureComponent {
//   render() {
//     return <ReloadAppOnLanguageChange />;
//   }
// }

export default createAppContainer(MainNavigator);
