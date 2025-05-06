import React, { useContext } from 'react'
import { AsyncSearchInput, Button, Header } from '@island.is/island-ui/core'
import { useIntl, FormattedMessage } from 'react-intl'
import { LocaleContext } from '../../../i18n/LocaleContext'
import { Locales, locales } from '../../../i18n/I18n'

export function HeaderGlobal() {
  const { formatMessage } = useIntl()
  const { locale, setLocale } = useContext(LocaleContext)

  const switchLanguage = () => {
    const nextLocale = locale === Locales.EN ? Locales.IS : Locales.EN
    setLocale(nextLocale)
  }

  return (
    <Header
      info={{ title: formatMessage({ id: 'title' }) }}
      headerItems={
        <>
          <AsyncSearchInput
            buttonProps={
              {
                // onClick: () => {
                //   handleSearch(searchValue)
                // },
                // onFocus: () => setHasFocus(true),
                // onBlur: () => setHasFocus(false),
              }
            }
            inputProps={{
              name: 'global-search',
              inputSize: 'medium',
              placeholder: formatMessage({ id: 'globalSearch' }),
              colored: true,
              color: 'blue',
              // onChange: (ev) => setSearchValue(ev.target.value),
              // value: searchValue,
              // onKeyDown: (ev) => {
              //   if (ev.key === 'Enter') {
              //     handleSearch(searchValue)
              //   }
              // },
            }}
            hasFocus={false}
            // loading={loading}
          />
          <Button variant="utility" icon="person" iconType="outline">
            <FormattedMessage id="login" />
          </Button>
          <Button variant="utility" onClick={switchLanguage}>
            {locales[locale].name.toUpperCase()}
          </Button>
          <Button variant="utility" icon="menu" iconType="outline">
            <FormattedMessage id="menu" />
          </Button>
        </>
      }
    />
  )
}

export default HeaderGlobal
