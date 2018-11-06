import { createSwitchNavigator } from "react-navigation";

import launch from "./launch";
import main from "./main";
import intro from "./intro";
// import test from "../../archive/test";

const switchNavigator = createSwitchNavigator(
  {
    launch,
    main,
    intro
    // test
  },
  {
    initialRouteName: "main"
  }
);

export default switchNavigator;
