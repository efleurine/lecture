import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { Slider, SlideWrapper } from "../Slider";

import Icon from "react-native-vector-icons/SimpleLineIcons";

import Openning from "./Openning";
import JTBB from "./JTBD";
import Account from "./Account";

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});

function Ionicons(props) {
  return <View {...props} />;
}

function ButtonIcon({ name }) {
  return (
    <Icon
      name={name}
      color="rgba(255, 255, 255, .9)"
      size={24}
      style={{ backgroundColor: "transparent" }}
    />
  );
}

const slides = [
  // {
  //   key: "somethun",
  //   title: "Title 1",
  //   text: "Description.\nSay something cool",
  //   image: require("../../assets/images/1.jpg"),
  //   imageStyle: styles.image,
  //   backgroundColor: "#59b2ab"
  // },
  {
    key: "openning",
    title: "Nimpo",
    text: "Say something",
    image: require("../../assets/images/3.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#2ce5",
    useRenderer: "openning"
  },
  {
    key: "jtbd1",
    title: "Nimpo",
    text: "Say something",
    image: require("../../assets/images/3.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#2ce5",
    useRenderer: "jtbd"
  },
  {
    key: "jtbd2",
    title: "Nimpo",
    text: "Say something",
    image: require("../../assets/images/3.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#2ce5",
    useRenderer: "jtbd"
  },
  {
    key: "jtbd3",
    title: "Nimpo",
    text: "Say something",
    image: require("../../assets/images/3.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#2ce5",
    useRenderer: "jtbd"
  },
  {
    key: "auth",
    title: "Nimpo",
    text: "Say something",
    image: require("../../assets/images/3.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#2ce5",
    useRenderer: "account"
  }
];

class Intro extends React.PureComponent {
  _renderItem = props => {
    const { useRenderer } = props;
    return (
      <SlideWrapper {...props}>
        {useRenderer === "openning" && <Openning {...props} />}
        {useRenderer === "jtbd" && <JTBB {...props} />}
        {useRenderer === "account" && <Account {...props} />}
      </SlideWrapper>
    );
  };

  _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <ButtonIcon name="arrow-left-circle" />
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <ButtonIcon name="arrow-right-circle" />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: "transparent" }}
        />
      </View>
    );
  };

  render() {
    const { onDone } = this.props;
    // TODO -  prev / next / done button
    const dotStyle = { backgroundColor: "rgba(0, 0, 0, .2)" };
    const activeDotStyle = { backgroundColor: "rgba(255, 255, 255, .9)" };
    return (
      <Slider
        slides={slides}
        onDone={onDone}
        renderItem={this._renderItem}
        showPrevButton={true}
        renderPrevButton={this._renderPrevButton}
        renderNextButton={this._renderNextButton}
        hideDoneButton
      />
    );
  }
}

export default Intro;
