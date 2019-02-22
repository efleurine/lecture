import React from "react";
import { View, Text } from "react-native";


export default class Screen extends React.Component {
  render() {
    return (
      <View>
        <Text>This screen should never appear</Text>
      </View>
    );
  }
}
