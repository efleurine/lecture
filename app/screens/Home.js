import React from "react";

import { View, TextInput, Text, Button } from "react-native-ui-lib";
import { withAuthenticator } from "aws-amplify-react-native";

import SplashScreen from "react-native-splash-screen";

import sheet from "../config/sheet";
import FBLogin from "../components/Auth/FBLogin";

import BasicAuth from "../components/Auth/Basic";
// import Icon from "react-native-vector-icons/MaterialIcons";

import Watermark from "../components/Message/Watermark";

import i18n from "../translations/i18n";

import { MainContainer } from "../components/atom";

const FirstReadingInvitation = () => (
  <View flexG center>
    <Watermark text="No reading yet" />
    <Watermark text="hum, guess what" />
    <Watermark text="Today is the best day to start reading" />
  </View>
);
const ButtonSpace = 20;
export class Home extends React.PureComponent {
  static navigationOptions = {
    // headerTitle: <LogoTitle />,
    title: "Home",
    headerStyle: {
      margin: 0,
      elevation: 0
    }
  };

  state = {
    text: "",
    firstQuery: ""
  };

  componentDidMount() {}

  fblogin = () => {};

  fblogout = () => {};

  fr = () => {
    console.log("vers le francais");
    i18n.locale = "ht";
    this.setState({ fr: "fr" });
  };

  go = () => {
    console.log("go");
  };

  render() {
    return (
      <View flex>
        {/* <MainContainer>
          <Text grayOut>Welcome to your home screen</Text>
          <Text>{i18n.t("current", { language: i18n.currentLocale() })}</Text>
        </MainContainer> */}
        <View>
          <Text onPress={this.fr}>Vers le français</Text>
          <Text>Cool</Text>
        </View>
        <View flexG>
          {/* <AudioExemple /> */}
          <Button
            backgroundColor="#30B650"
            label="SHUFFLE PLAY"
            labelStyle={{ fontWeight: "600" }}
            style={{ marginBottom: ButtonSpace }}
            enableShadow
            onPress={this.go}
          />

          {/* <FirstReadingInvitation /> */}
        </View>
      </View>
    );
  }
}

export default withAuthenticator(Home);
