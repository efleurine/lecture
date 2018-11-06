import React from "react";

const withHOC = WrappedComponent => {
  class HOC extends React.PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return HOC;
};

export default withHOC;
