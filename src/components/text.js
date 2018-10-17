import React from "react";
import { View, Text } from "react-native";

const BasicText = ({ containerStyle, text, chidlren, ...rest }) => (
  <View style={containerStyle}>
    <Text {...rest}>
      {text}
      {chidlren}
    </Text>
  </View>
);

export default BasicText;
