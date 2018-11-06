import { createStackNavigator } from "react-navigation";
import IntroScreen from "../screens/Intro";

const Intro = createStackNavigator(
  {
    intro: { screen: IntroScreen }
  },
  {
    headerMode: "none"
  }
);

export default Intro;
