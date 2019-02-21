import React from "react";
import { View, Text } from "react-native";
import SplashScreen from "react-native-splash-screen";
import i18n from "../translations/i18n";

export default class Placeholder extends React.Component {
  static navigationOptions = {
    title: "Placeholder!"
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Placeholder Tout Voum se Dom</Text>
      </View>
    );
  }
}
