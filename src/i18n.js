import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enLocalization from "./locales/en/translation.json"
import ruLocalization from "./locales/ru/translation.json"

i18n.use(initReactI18next).init({
    fallbackLng: 'ru',
    debug: true,
    resources: {
        en: enLocalization,
        ru: ruLocalization
    },
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
})
