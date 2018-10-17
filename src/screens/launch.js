import React from "react";
import { View } from "react-native";

import Placeholder from "../components/placeholder";
import Text from "../components/text";

export default class LaunchScreen extends React.Component {
  static navigationOptions = {
    title: "Launch",
    headerTitleStyle: {
      flex: 1,
      textAlign: "center"
    },
    headerStyle: {
      elevation: 0
    }
  };
  componentDidMount() {
    console.log("component is mounted");
  }

  skip = () => {
    console.log("user wants to skip");
    this.props.navigation.navigate("MainStack");
  };
  render() {
    return (
      <View>
        <Text text="Autour d'un livre" />
        <View>
          <Text text="Une jeunesse qui lit" />
          <Text text="est" />
          <Text text="Une jeune qui pense" />
        </View>
        <Text onPress={this.skip} text="Skip" />
      </View>
    );
  }
}
