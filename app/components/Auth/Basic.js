import React from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-ui-lib";

export default class Auth extends React.Component {
  state = {
    step: "s", // l c
    email: "",
    pass: "",
    passConf: "",
    code: ""
  };
  componentDidMount() {
    // this.props.onLoginComplete();
  }

  renderSignup() {
    const { email, pass, passConf, step } = this.state;
    if (step != "s") return null;
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
          Create account
        </Button>
      </View>
    );
  }

  renderConfirmation() {
    const { email, code, step } = this.state;
    if (step != "c") return null;
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
          Confirm
        </Button>
      </View>
    );
  }

  renderLogin() {
    const { email, pass, step } = this.state;
    if (step != "l") return null;
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
          Login
        </Button>
      </View>
    );
  }

  toggle() {
    const { step } = this.state;
    if (step === "s") return this.setState({ step: "c" });
    if (step === "c") return this.setState({ step: "l" });
    if (step === "l") return this.setState({ step: "s" });
  }

  render() {
    return (
      <React.Fragment>
        {this.renderSignup()}
        {this.renderConfirmation()}
        {this.renderLogin()}

        <Text onPress={() => this.toggle()}>Toggle</Text>
      </React.Fragment>
    );
  }
}
