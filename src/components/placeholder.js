import React from "react";
import { View, Text } from "react-native";

export default class Placeholder extends React.PureComponent {
  onPress = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }
  };
  render() {
    const text = this.props.name || "";
    return (
      <View>
        <Text>This is your lovely placeholder here</Text>
        <Text onPress={this.onPress}>{text}</Text>
      </View>
    );
  }
}
