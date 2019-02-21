import React from "react";
import { UIManager } from "react-native";

import RootContainer from "./RootContainer";
// import "./config/setupTheme";

UIManager.setLayoutAnimationEnabledExperimental && //eslint-disable-line
  UIManager.setLayoutAnimationEnabledExperimental(true);

const App = () => <RootContainer />;

console.ignoredYellowBox = ["Warning: isMounted(...)"];

export default App;
