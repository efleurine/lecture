// Make sure the necessary permissions are already granted
import { PermissionsAndroid } from "react-native";
import { AudioRecorder, AudioUtils, AudioSource } from "react-native-audio";

export async function requestPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: "Avec un livre Record Permission",
        message: "Avec un livre needs your permission the audio recorder",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    console.log("Camera permission denied");
  } catch (err) {
    console.warn(err);
  }
  return false;
}

export function Play() {}

export function Record() {
  requestPermission().then(granted => {
    if (granted) {
    }
  });
}

export function Pause() {}

export function Stop() {}
