import React from "react";
import { View } from "react-native";
import Placeholder from "../components/placeholder";
import Back from "../components/backbutton";
import Text from "../components/text";

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: "Main",
    headerTitleStyle: {
      flex: 1,
      textAlign: "center"
    },
    headerStyle: {
      elevation: 0
    }
  };

  back = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View>
        <Placeholder name="Main Screen" />
        <Text text="bring me back" onPress={this.back} />
        <Back />
      </View>
    );
  }
}
