import React from "react";
import { View, Text } from "react-native";
import { TextInput , Button} from "react-native-paper";

export default class Auth extends React.Component {
  state = {
    email: "",
    pass: "",
    passConf: "",
    code: ""
  };
  componentDidMount() {
    // this.props.onLoginComplete();
  }

  renderSignup() {
    const { email, pass, passConf, code } = this.state;
    return (
      <View>
        <Text>Auth Component is there</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          label="Password"
          value={pass}
          onChangeText={pass => this.setState({ pass })}
        />
        <TextInput
          label="Confirm Password"
          value={passConf}
          onChangeText={passConf => this.setState({ passConf })}
        />
        <Button
          icon="add-a-photo"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>
      </View>
    );
  }

  renderConfirmation() {
    const { email, code } = this.state;
    return (
      <View>
        <Text>Auth Component is there</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          label="Verification code"
          value={code}
          onChangeText={code => this.setState({ code })}
        />
        <Button
          icon="add-a-photo"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>
      </View>
    );
  }

  renderSignin() {
    const { email, pass } = this.state;
    return (
      <View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          label="Password"
          value={pass}
          onChangeText={pass => this.setState({ pass })}
        />
        <Button
          icon="add-a-photo"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>
      </View>
    );
  }

  render() {
    // return this.renderSignup();
    // return this.renderConfirmation();
    return this.renderSignin();
  }
}
