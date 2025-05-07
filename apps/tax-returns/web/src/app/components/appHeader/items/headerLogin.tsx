import React from 'react'
import { Button, Hidden } from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'

function HeaderLogin() {
  return (
    <>
      <Hidden above="md">
        <Button variant="utility" icon="person" iconType="outline" />
      </Hidden>

      <Hidden below="lg">
        <Button variant="utility" icon="person" iconType="outline">
          <FormattedMessage id="login" />
        </Button>
      </Hidden>
    </>
  )
}

export default HeaderLogin
