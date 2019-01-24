import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Slider } from "../Slider";

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320
  }
});

const slides = [
  {
    key: "somethun",
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../../assets/images/1.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#59b2ab"
  },
  {
    key: "somethun-dos",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../../assets/images/2.jpeg"),
    imageStyle: styles.image,
    backgroundColor: "#febe29"
  },
  {
    key: "somethun1",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../../assets/images/3.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#22bcb5"
  }
];

const Intro = ({ onDone }) => <Slider slides={slides} onDone={onDone} />;

export default Intro;
