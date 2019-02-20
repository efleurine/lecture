import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";

import PlaceholderScreen from "../screens/Placeholder";
import LaunchScreen from "../screens/Launch";
import OnboardingScreen from "../screens/Onboarding";
import HomeScreen from "../screens/Home";
import { ButtonComponent } from "../components/atom";

export const routeNames = {
  Launch: "Launch",
  Onboarding: "Onboarding",
  Home: "Home",
  Placeholder: "Placeholder",
  AppStack: "AppStack",
  AuthStack: "AuthStack"
};

class CustomBottomTabBar extends React.PureComponent {
  overrideList = ["CreateAction"];

  getButtonComponent = ({ route }) => {
    const { key } = route;
    if (this.overrideList.includes(key)) {
      console.log("we got one");
      return ButtonComponent;
    }
    return null;
  };

  render() {
    const customProps = {
      ...this.props,
      getButtonComponent: this.getButtonComponent
    };
    return <BottomTabBar {...customProps} />;
  }
}

// const CustomBottomTabBar = props => <BottomTabBar2 {...props} />;
const AppStack = createBottomTabNavigator(
  {
    [routeNames.Home]: { screen: HomeScreen },
    CreateAction: {
      screen: PlaceholderScreen,
      navigationOptions: { title: "create" }
    },
    [routeNames.Placeholder]: { screen: PlaceholderScreen }
  },
  {
    initialRouteName: routeNames.Home,
    tabBarComponent: props => (
      <CustomBottomTabBar {...props} style={{ borderTopColor: "#605F60" }} />
    )
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
    initialRouteName: routeNames.AppStack //AuthStack
  }
);

export default createAppContainer(MainNavigator);
