import React from "react";
import T from "prop-types";
import { View } from "react-native";
import FBSDK from "react-native-fbsdk";

const { LoginButton, AccessToken } = FBSDK;

// 277818926179548

export default class FBLogin extends React.Component {
  componentDidMount() {
    console.log("Login was just mounted");
  }

  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log("login has error: " + result.error);
              console.log(error);
              console.log(result);
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log("logout.")}
        />
      </View>
    );
  }
}

FBLogin.propTypes = {
  onLoginFinished: T.func.isRequired,
  onLogoutFinished: T.func.isRequired
};
