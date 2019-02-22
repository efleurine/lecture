import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Text, ActionSheet } from "react-native-ui-lib";

// any js module
import NavigationService from "../../routes";

// NavigationService.navigate('ChatScreen', { userName: 'Lucy' });

export default class ActionComponent extends React.Component<*> {
  state = {
    visible: false
  };
  onPress = () => {
    this.setState({ visible: true });
  };

  onLongPress = () => {
    this.setState({ visible: true });
  };

  goTo = screen => {
    NavigationService.navigate(screen);
  };

  pickOption(index) {
    console.log("the action to do");
    console.log(index);
  }
  render() {
    const {
      onPress,
      onLongPress,
      testID,
      accessibilityLabel,
      ...props
    } = this.props;

    const { visible } = this.state;

    return (
      <TouchableWithoutFeedback
        onPress={this.onPress}
        onLongPress={this.onLongPress}
        testID={testID}
        hitSlop={{ left: 15, right: 15, top: 5, bottom: 5 }}
        accessibilityLabel={accessibilityLabel}
      >
        <View>
          <ActionSheet
            title="Title"
            message="Message of action sheet"
            cancelButtonIndex={3}
            destructiveButtonIndex={0}
            useNativeIOS={false}
            options={[
              { label: "option 1", onPress: () => this.pickOption("option 1") },
              { label: "option 2", onPress: () => this.pickOption("option 2") },
              { label: "option 3", onPress: () => this.pickOption("option 3") },
              { label: "cancel", onPress: () => this.pickOption("cancel") }
            ]}
            visible={visible}
            onDismiss={() => this.setState({ visible: false })}
          />
          <View {...props} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
