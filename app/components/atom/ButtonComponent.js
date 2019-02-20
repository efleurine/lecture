import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";

export default class ButtonComponent extends React.Component<*> {
  onPress = () => {
    console.log("I was pressed");
  };

  onLongPress = () => {
    console.log("I was longpressed");
  };
  render() {
    const {
      onPress,
      onLongPress,
      testID,
      accessibilityLabel,
      ...props
    } = this.props;

    console.log("I will render");

    return (
      <TouchableWithoutFeedback
        onPress={this.onPress}
        onLongPress={this.onLongPress}
        testID={testID}
        hitSlop={{ left: 15, right: 15, top: 5, bottom: 5 }}
        accessibilityLabel={accessibilityLabel}
      >
        <View {...props} />
      </TouchableWithoutFeedback>
    );
  }
}
