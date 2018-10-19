import React from "react";
import T from "prop-types";
import { View } from "react-native";
import FBSDK from "react-native-fbsdk";

const { LoginButton } = FBSDK;

export default function FBLogin(props) {
  return (
    <View>
      <LoginButton
        onLoginFinished={props.onLoginFinished}
        onLogoutFinished={props.onLogoutFinished}
      />
    </View>
  );
}

FBLogin.propTypes = {
  onLoginFinished: T.func.isRequired,
  onLogoutFinished: T.func.isRequired
};
