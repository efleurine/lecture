import { createStackNavigator } from "react-navigation";
import LaunchScreen from "../screens/launch";

const launchNavigator = createStackNavigator(
  {
    launch: { screen: LaunchScreen }
  },
  {
    headerMode: "none"
  }
);

export default launchNavigator;
