import React from 'react'
import { Text, ActionCard, Box } from '@island.is/island-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'
import TaxReturnCard from '../../components/taxReturnCard/taxReturnCard'

function Dashboard() {
  const { formatMessage } = useIntl()

  const prevYear = new Date().getFullYear() - 1;
  const cardYears = ([...Array(12).keys()]).map((_, i) => prevYear - i - 1);

  return (
    <>
      <TaxReturnCard
        totalPaid={2808000}
        taxReturn={32227}
        lastUpdateDate={new Date()}
        title={
          <Text variant="h3" marginBottom={3}>
            <FormattedMessage id="dashboardTitle" /> {prevYear}
          </Text>
        }
      />

      <Text variant="h3" as="h1" marginBottom={3}>
        <FormattedMessage id="dashboardSectionsTitle" />
      </Text>

      {cardYears.map((year) => (
        <Box marginBottom={3} key={year}>
          <ActionCard
            heading={`${formatMessage({ id: 'dashboardSectionHeader' })} ${year}`}
            cta={{
              size: 'small',
              icon: 'arrowForward',
              label: ' ',
              buttonType: {
                variant: 'ghost',
                circle: true,
              },
            }}
          />
        </Box>
      ))}
    </>
  )
}

export default Dashboard
