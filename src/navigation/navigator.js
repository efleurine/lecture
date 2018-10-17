import { createSwitchNavigator } from "react-navigation";

import LaunchStack from "./launch";
import MainStack from "./main";

const switchNavigator = createSwitchNavigator(
  {
    LaunchStack,
    MainStack
  },
  {
    initialRouteName: "LaunchStack"
  }
);

export default switchNavigator;
