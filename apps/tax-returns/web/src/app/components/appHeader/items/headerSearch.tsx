import React from 'react'
import { AsyncSearchInput, Hidden } from '@island.is/island-ui/core'
import { useIntl } from 'react-intl'

const HeaderSearch: React.FC = () => {
  const { formatMessage } = useIntl()

  return (
    <Hidden below="xl">
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
    </Hidden>
  )
}

export default HeaderSearch
