import React from 'react'
import { Button } from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'

const HeaderMenu: React.FC = () => {
  return (
    <Button variant="utility" icon="menu" iconType="outline">
      <FormattedMessage id="menu" />
    </Button>
  )
}

export default HeaderMenu
