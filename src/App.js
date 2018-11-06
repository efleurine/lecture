/**
 * The purpose of this file is to setup Redux or any other non-visual "global" modules.
 */
import React from "react";
import { UIManager } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import RootContainer from "./RootContainer";

UIManager.setLayoutAnimationEnabledExperimental && //eslint-disable-line
  UIManager.setLayoutAnimationEnabledExperimental(true);

const App = () => (
  <PaperProvider>
    <RootContainer />
  </PaperProvider>
);

console.ignoredYellowBox = ["Warning: isMounted(...)"];
export default App;
