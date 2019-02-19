import RNLanguages from "react-native-languages";
import i18n from "i18n-js";

import en from "./en";
import fr from "./fr";
import ht from "./ht";

i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.translations = { en, fr, ht };

export default i18n;
