import React from "react";
import { View, ActivityIndicator, AsyncStorage } from "react-native";

import { appKey } from "../config/asyncKeys";
import { routeNames } from "../routes";

export default class Launch extends React.Component {
  static navigationOptions = {
    title: "Launch Screen"
  };

  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    try {
      const firstTime = await AsyncStorage.getItem(appKey);
      const route = firstTime ? routeNames.AppStack : routeNames.AuthStack;
      this.props.navigation.navigate(route);
    } catch (error) {}
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
