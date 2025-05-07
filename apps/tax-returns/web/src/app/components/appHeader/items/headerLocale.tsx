import React, { useContext } from 'react'
import { Button, Hidden } from '@island.is/island-ui/core'
import { LocaleContext } from '../../../../i18n/LocaleContext'
import { Locales, locales } from '../../../../i18n/I18n'

const HeaderLocale: React.FC = () => {
  const { locale, setLocale } = useContext(LocaleContext)

  const switchLanguage = () => {
    const nextLocale = locale === Locales.EN ? Locales.IS : Locales.EN
    setLocale(nextLocale)
  }

  return (
    <Hidden below="md">
      <Button variant="utility" onClick={switchLanguage}>
        {locales[locale].name.toUpperCase()}
      </Button>
    </Hidden>
  )
}

export default HeaderLocale
