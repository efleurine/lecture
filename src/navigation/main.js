import React from "react";
import { createStackNavigator } from "react-navigation";

import MainScreen from "../screens/main";

const StacksOverTabs = createStackNavigator(
  {
    Main: {
      screen: MainScreen
    }
  },
  {}
);

export default StacksOverTabs;
