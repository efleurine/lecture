import {
  AnimatableManager,
  ThemeManager,
  Constants,
  Assets,
  Colors,
  Typography
} from "react-native-ui-lib"; //eslint-disable-line

Colors.loadColors({
  pink: "#FF69B4",
  gold: "#FFD700",
  grayOut: "#C4C4C4"
});

Typography.loadTypographies({
  h1: { fontSize: 58, fontWeight: "300", lineHeight: 80 },
  h2: { fontSize: 46, fontWeight: "300", lineHeight: 64 }
});

/** Examples - uncomment when needed */
// Typography.loadTypographies({
//   h1: {fontSize: 58, fontWeight: '300', lineHeight: 80},
//   h2: {fontSize: 46, fontWeight: '300', lineHeight: 64},
// });

// Colors.loadColors({
//   pink: '#FF69B4',
//   gold: '#FFD700',
// });

// ThemeManager.setTheme({
//   primaryColor: Colors.purple30,
//   CTA: {
//     backgroundColor: Colors.purple30,
//     textColor: Colors.dark10,
//   },
//   titleColor: Colors.blue10,
//   subtitleColor: Colors.blue40,
// });

// ThemeManager.setComponentTheme('Picker', (props) => {
//   if (props.useNativePicker) {
//     return {
//       topBarProps: {
//         doneLabel: Constants.isIOS ? 'Done2' : 'OK2',
//         cancelLabel: Constants.isIOS ? 'Cancel2' : 'CANCEL2',
//       },
//     };
//   }
// });

// Assets.loadAssetsGroup('icons.general', {
//   camera: require('./assets/icons/cameraSelected.png'),
// });

// AnimatableManager.loadAnimationPresets({
//   preset1: {
//     animation: 'fadeIn',
//     easing: 'ease-out-quint',
//     duration: 1000,
//     useNativeDriver: true,
//   },
//   preset2: {
//     animation: 'fadeInLeft',
//     easing: 'ease-out-expo',
//     duration: 500,
//     useNativeDriver: true,
//   },
// });

// const customAnimationsDefinitions = {
//   customAnimation1: {
//     from: {opacity: 0, translateY: 20},
//     to: {opacity: 1, translateY: 0},
//   },
//   customAnimation2: {
//     from: {opacity: 0, translateY: 40},
//     to: {opacity: 1, translateY: 0},
//   },
// };
