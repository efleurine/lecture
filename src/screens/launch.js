import React from "react";
import { View } from "react-native";

import Placeholder from "../components/placeholder";
import Text from "../components/text";
import FBLogin from "../components/fblogin";

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

  onFBLoginFinished(result) {
    console.log('the login was completed')
    console.log(result);
  }

  onFBLogoutFinished(result) {
    console.log(result);
  }

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
        <FBLogin
          onLoginFinished={this.onFBLoginFinished.bind(this)}
          onLogoutFinished={this.onFBLogoutFinished.bind(this)}
        />
      </View>
    );
  }
}
