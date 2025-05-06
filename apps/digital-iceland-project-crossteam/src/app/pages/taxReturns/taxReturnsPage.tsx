import React from 'react'
import { Text, ActionCard } from '@island.is/island-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'

function TaxReturnsPage() {
  const { formatMessage } = useIntl()

  return (
    <>
      <Text variant="h1" as="h1">
        <FormattedMessage id="taxReturnsTitle" />
      </Text>
      <ActionCard
        heading={formatMessage({ id: 'taxReturnsCardTitle' })}
        cta={{
          size: 'small',
          label: formatMessage({ id: 'taxReturnsCardButton' }),
        }}
      />
      <Text variant="intro" as="p">
        <FormattedMessage id="taxReturnsBodyText" />
      </Text>
    </>
  )
}

export default TaxReturnsPage;
