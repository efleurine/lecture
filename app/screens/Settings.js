import React from "react";
import { View, Text } from "react-native";

export default class Placeholder extends React.Component {
  static navigationOptions = {
    title: "Seetings"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Settins screen</Text>
      </View>
    );
  }
}
