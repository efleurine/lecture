import React from "react";
import { View, Text } from "react-native";

export default class Placeholder extends React.Component {
  static navigationOptions = {
    title: "Placeholder!"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Placeholder Tout Voum se Dom</Text>
      </View>
    );
  }
}
