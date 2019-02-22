import React from "react";
import ActionComponent from "./ActionComponent";
import { BottomTabBar } from "react-navigation-tabs";

export default class CustomBottomTabBar extends React.PureComponent {
  overrideList = ["CreateAction"];

  getButtonComponent = ({ route }) => {
    const { key } = route;
    if (this.overrideList.includes(key)) {
      console.log("we got one");
      return ActionComponent;
    }
    return null;
  };

  render() {
    const customProps = {
      ...this.props,
      getButtonComponent: this.getButtonComponent
    };
    return <BottomTabBar {...customProps} />;
  }
}
