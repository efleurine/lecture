import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

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
    [routeNames.AppStack]: AppStack,
    [routeNames.AuthStack]: AuthStack
  },
  {
    initialRouteName: routeNames.AuthStack
  }
);

export default createAppContainer(MainNavigator);
