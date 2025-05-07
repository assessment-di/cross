import React from 'react'
import { Button, Hidden } from '@island.is/island-ui/core'
import HeaderTitle from './items/headerTitle'
import HeaderSearch from './items/headerSearch'
import HeaderLogin from './items/headerLogin'
import HeaderLocale from './items/headerLocale'
import HeaderMenu from './items/headerMenu'

const HeaderItems: React.FC = () => {
  return (
    <>
      <HeaderTitle />
      <HeaderSearch />
      <HeaderLogin />
      <Hidden above="xs">
        <Button variant="utility" icon="notifications" iconType="outline" />
      </Hidden>
      <HeaderLocale />
      <HeaderMenu />
    </>
  )
}

export default HeaderItems
