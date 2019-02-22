import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import { LaunchScreen, OnboardingScreen } from "../screens";

import routeNames from "./names";
import BottomTabNavigator from "./BottomTabNavigator";

const AuthStack = createStackNavigator(
  {
    [routeNames.Onboarding]: { screen: OnboardingScreen }
  },
  {
    headerMode: "none"
  }
);

const MainNavigator = createSwitchNavigator(
  {
    [routeNames.Launch]: { screen: LaunchScreen },
    [routeNames.AppStack]: BottomTabNavigator,
    [routeNames.AuthStack]: AuthStack
  },
  {
    initialRouteName: routeNames.AppStack // AuthStack
  }
);

export default createAppContainer(MainNavigator);
