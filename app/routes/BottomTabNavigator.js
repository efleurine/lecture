import React from "react";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import Feather from "react-native-vector-icons/Feather";
import Simple from "react-native-vector-icons/SimpleLineIcons";

import { CustomBottomTabBar } from "../components/atom";
import routeNames from "./names";
import * as Screens from "../screens";

const BottomTabNavigator = createBottomTabNavigator(
  {
    [routeNames.Home]: { screen: Screens.HomeScreen },
    CreateAction: {
      screen: Screens.ActionSheet,
      navigationOptions: {
        title: "create"
        // tabBarOnPress: ({ navigation, defaultHandler }) => {
        //   console.log("tarBarOnPress");
        //   defaultHandler();
        // }
      }
    },
    [routeNames.Settings]: {
      screen: Screens.Settings
    }
  },
  {
    initialRouteName: routeNames.Home,
    tabBarComponent: props => (
      <CustomBottomTabBar {...props} style={{ borderTopColor: "#605F60" }} />
    ),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Feather;
        let iconName;

        switch (routeName) {
          case routeNames.Home:
            iconName = "book-open";
            break;
          case routeNames.Settings:
            iconName = "settings";
            break;
          default:
            iconName = "plus";
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

export default BottomTabNavigator;
