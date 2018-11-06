import T from "prop-types";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import withHOC from "./hoc";

const Icon = withHOC(MaterialIcons);

Icon.propTypes = {
  size: T.number
};

Icon.defaultProps = {
  size: 25
};

export default Icon;
