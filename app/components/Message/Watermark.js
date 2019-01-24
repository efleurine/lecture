import React from "react";
// import { View, Text } from "react-native";
import { View, Text } from "react-native-ui-lib";

class Watermark extends React.PureComponent {
  render() {
    const { text, children } = this.props;
    return (
      <Text grayOut>
        {text}
        {children}
      </Text>
    );
  }
}

export default Watermark;
