import React, { PropsWithChildren } from 'react'
import { Text, Button, Icon } from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'

type Props = {
  titleIcon?: string
  title: string;
}

const OpenedTaxReturnSectionBase: React.FC<PropsWithChildren<Props>> = ({ titleIcon, title, children }) => {
  return (
    <>
      <Text variant="h1" as="h1" marginY={3}>
        {titleIcon ? (
          <>
            <Icon icon="wallet" type="outline" color="blue400" />{' '}
          </>
        ) : null}
        {title}
      </Text>

      {children}

      <Button variant="ghost" icon="add">
        <FormattedMessage id="openedTaxAddRevenue" />
      </Button>
    </>
  )
}

export default OpenedTaxReturnSectionBase
