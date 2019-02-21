import React from "react";
import { View } from "react-native-ui-lib";

class SildeWrapper extends React.PureComponent {
  render() {
    const style = {
      backgroundColor: this.props.backgroundColor,
      // paddingTop: this.props.topSpacer,
      paddingBottom: this.props.bottomSpacer,
      width: this.props.width,
      height: this.props.height
    };
    console.log(style);
    return <View style={[style]}>{this.props.children}</View>;
  }
}

export default SildeWrapper;
