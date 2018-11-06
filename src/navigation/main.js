import React from "react";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import MyReading from "../screens/MyReading";
import Connection from "../screens/Connection";
import EventNews from "../screens/EventNews";

const RouteConfigs = {};
const TabNavigatorConfig = {
  initialRouteName: "readings"
};

const Tabs = createMaterialTopTabNavigator(
  {
    "Mes Lectures": MyReading,
    "Mes Amis": Connection,
    Info: EventNews
  },
  {
    swipeEnabled: true,
    optimizationsEnabled: false,
    lazy: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "#fff"
      },
      indicatorStyle: {
        backgroundColor: "#000"
      }
    }
  }
);

const stack = createStackNavigator(
  {
    Test: {
      screen: Tabs
    }
  },
  {
    navigationOptions: {
      title: "Autour du livre",
      headerStyle: {
        elevation: 0
      }
    }
  }
);

export default stack;
