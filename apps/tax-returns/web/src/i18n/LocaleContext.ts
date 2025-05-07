import { createContext } from "react";
import { defaultLocale, Locales } from './I18n'

export const LocaleContext = createContext({
  locale: defaultLocale,
  setLocale: (nextLocale: Locales) => {
    /* eslint-disable no-console */
    console.log(`Set locale to ${nextLocale}`)
  },
});
