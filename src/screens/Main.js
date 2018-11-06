/* @flow */

import * as React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";
import { BottomNavigation, Appbar } from "react-native-paper";

type State = {
  index: number,
  routes: Array<{
    key: string,
    title: string,
    icon: string,
    color: string
  }>
};

const PhotoGallery = ({ route }) => {
  const PHOTOS = Array.from({ length: 24 }).map(
    (_, i) => `https://unsplash.it/300/300/?random&__id=${route.key}${i}`
  );

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {PHOTOS.map(uri => (
        <View key={uri} style={styles.item}>
          <Image source={{ uri }} style={styles.photo} />
        </View>
      ))}
    </ScrollView>
  );
};

class One extends React.Component {
  componentDidMount() {
    console.log("I just mounted");
  }

  componentWillUnmount() {
    console.log("I will soon unmount");
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <Text>One</Text>
        </View>
      </ScrollView>
    );
  }
}

class Two extends React.Component {
  componentDidMount() {
    console.log("2 I just mounted");
  }

  componentWillUnmount() {
    console.log("2 I will soon unmount");
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <Text>One</Text>
        </View>
      </ScrollView>
    );
  }
}

class Three extends React.Component {
  static navigationOptions = {
    title: "three",
    headerTitleStyle: {
      flex: 1,
      textAlign: "center"
    },
    headerStyle: {
      elevation: 0
    }
  };
  componentDidMount() {
    console.log("3 I just mounted");
  }

  componentWillUnmount() {
    console.log("3 I will soon unmount");
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <Text>3 One</Text>
        </View>
      </ScrollView>
    );
  }
}

class Four extends React.Component {
  componentDidMount() {
    console.log("4 I just mounted");
  }

  componentWillUnmount() {
    console.log("4 I will soon unmount");
  }

  render() {
    return (
      <Appbar style={styles.bottom}>
        <Appbar.Action
          icon="archive"
          onPress={() => console.log("Pressed archive")}
        />
        <Appbar.Action
          icon="mail"
          onPress={() => console.log("Pressed mail")}
        />
        <Appbar.Action
          icon="label"
          onPress={() => console.log("Pressed label")}
        />
        <Appbar.Action
          icon="delete"
          onPress={() => console.log("Pressed delete")}
        />
      </Appbar>
    );
  }
}

export default class ButtomNavigationExample extends React.Component<
  {},
  State
> {
  static title = "Bottom Navigation";
  // static navigationOptions = {
  //   title: "Discover",
  //   headerTitleStyle: {
  //     flex: 1,
  //     textAlign: "center"
  //   },
  //   headerStyle: {
  //     elevation: 0
  //   }
  // };

  state = {
    index: 0,
    routes: [
      {
        key: "album",
        title: "Album",
        icon: "photo-album",
        color: "#6200ee",
        component: One
      },
      {
        key: "library",
        title: "Library",
        icon: "inbox",
        color: "#2962ff",
        component: Two
      },
      {
        key: "favorites",
        title: "Favorites",
        icon: "favorite",
        color: "#00796b",
        component: Three
      },
      {
        key: "purchased",
        title: "Purchased",
        icon: "shop",
        color: "#c51162",
        component: Four
      }
    ]
  };

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={index => this.setState({ index })}
        renderScene={BottomNavigation.SceneMap({
          album: One,
          library: Two,
          favorites: Three,
          purchased: Four
        })}
      />
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 4
  },
  item: {
    height: Dimensions.get("window").width / 2,
    width: "50%",
    padding: 4
  },
  photo: {
    flex: 1,
    resizeMode: "cover"
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  }
});
