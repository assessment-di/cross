import React, { PropsWithChildren } from 'react'
import { IntlProvider } from 'react-intl'
import icelandicTranslations from './locales/is'
import englishTranslations from './locales/en'

export enum Locales {
  EN = "en-US",
  IS = "is-IS",
}

export const defaultLocale: Locales = Locales.EN;

export const locales: Record<Locales, { name: string, messages: Record<string, string> }> = {
  [Locales.EN]: {
    name: 'en',
    messages: englishTranslations
  },
  [Locales.IS]: {
    name: 'is',
    messages: icelandicTranslations
  },
};

type Props = {
  locale: Locales;
}

function I18n({ children, locale }: PropsWithChildren<Props>) {
  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={locales[locale]?.messages ?? locales[defaultLocale]?.messages}
    >
      {children}
    </IntlProvider>
  )
}

export default I18n
