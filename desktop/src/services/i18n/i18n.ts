import i18n from "i18next";
// import fallbackDictionary from "../../i18n/fallback";
import { initReactI18next } from "react-i18next";


/**
 * TODO: Make it work with the fallback dictionary, and other dictonaries.
 */
i18n.use(initReactI18next)
    .init({
        // fallbackDictionary,
        lng: "en",
        interpolation: {
            escapeValue: false
        },
    })

export default i18n;