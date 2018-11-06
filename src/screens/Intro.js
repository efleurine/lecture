import React from "react";
import { View, Text, Dimensions } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import Auth from "../components/Auth";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const slides = [
  // {
  //   key: "into",
  //   msg: ["Une jeunesse qui lit est une jeunesse qui pense"]
  // },
  {
    key: "auth",
    msg: ["Je pense donc je suis"]
  }
];

class Intro extends React.Component {
  skipAccountCreation() {}
  onLoginComplete = () => {
    // LOG THE KIND OF LOGIN USED
    this.onDone();
  };

  onSkip = () => {
    // TODO log the user choose to skip ahead
    this.onDone();
  };

  onDone = () => {
    this.props.navigation.navigate("main");
  };

  renderAuth = data => {
    const { msg } = data;
    return (
      <View>
        <Text>{msg[0]}</Text>
        <Auth onLoginComplete={this.onLoginComplete} />
      </View>
    );
  };

  renderOnboarding = data => {
    const { msg } = data;
    return (
      <View>
        <Text>{msg[0]}</Text>
      </View>
    );
  };

  renderItem(options) {
    let render = null;
    switch (options.key) {
      case "auth":
        render = this.renderAuth;
        break;
      default:
        render = this.renderOnboarding;
        break;
    }
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: "white",
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT
        }}
      >
        {render(options)}
      </View>
    );
  }

  render() {
    return (
      <AppIntroSlider
        showSkipButton
        showPrevButton
        bottomButton
        slides={slides}
        renderItem={this.renderItem.bind(this)}
        bottomButton
        onSkip={this.onSkip}
        onDone={this.onDone}
      />
    );
  }
}

export default Intro;
