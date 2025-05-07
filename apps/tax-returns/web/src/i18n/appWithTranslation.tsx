import React, { PropsWithChildren, useState } from 'react'
import I18n, { defaultLocale, Locales } from './I18n'
import { LocaleContext } from './LocaleContext'

type Props = {}

function AppWithTranslation({ children }: PropsWithChildren<Props>) {
  const [locale, setLocale] = useState<Locales>(defaultLocale)

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <I18n locale={locale}>
        {children}
      </I18n>
    </LocaleContext.Provider>
  )
}

export default AppWithTranslation;
