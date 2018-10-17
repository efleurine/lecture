/**
 * The first visual component in the app.  It is the ancestor of all other screens and components.
 */
import React from "react";
import { View, StyleSheet } from "react-native";
// import SplashScreen from "react-native-smart-splash-screen";
// import { globalStyles } from "./themes";
import Navigator from "./navigation/navigator";

export default class RootContainer extends React.Component {
  render() {
    return <Navigator />;
  }
}

// export default class RootContainer extends React.PureComponent {
//   componentDidMount() {
//     SplashScreen.close({
//       animationType: SplashScreen.animationType.scale,
//       duration: 850,
//       delay: 500
//     });
//   }

//   render() {
//     return (
//       <View style={globalStyles.fillAll}>
//         <Navigator />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  fillAll: {
    flex: 1
  }
});
