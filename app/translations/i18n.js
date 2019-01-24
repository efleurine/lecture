import { AsyncStorage } from "react-native";
import RNLanguages from "react-native-languages";
import i18n from "i18n-js";

import en from "./en";
import fr from "./fr";
import ht from "./ht";

const langKey = "@ln";

const loadPreferedLanguage = async () => {
  let value = RNLanguages.language;
  try {
    value = await AsyncStorage.getItem(langKey);
  } catch (error) {
    // Error retrieving data
  }
  return value;
};

const savePreferedLanguage = async value => {
  try {
    const value = await AsyncStorage.setItem(langKey, value);
  } catch (error) {
    // We will just default to the system language
  }
};

i18n.defaultLocale = "en";

loadPreferedLanguage().then(value => {
  i18n.locale = value;
  i18n.fallbacks = true;
  i18n.translations = { en, fr, ht };
});

export default i18n;
