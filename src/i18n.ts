import { initReactI18next } from 'react-i18next'
import exercises_en from './locales/en/exercises.json'
import exercises_de from './locales/de/exercises.json'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const defaultNS = 'exercises'
export const resources = {
  en: {
    exercises: exercises_en,
  },
  de: {
    exercises: exercises_de,
  },
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: ['exercises'],
    interpolation: {
      escapeValue: false,
    },
    defaultNS,
    resources,
  })

export default i18n
