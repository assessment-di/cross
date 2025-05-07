import React, { useContext } from 'react'
import { Text, ActionCard, Box, Button } from '@island.is/island-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'
import { LocaleContext } from '../../../i18n/LocaleContext'

function Dashboard() {
  const { formatMessage } = useIntl()
  const { locale } = useContext(LocaleContext)

  const prevYear = new Date().getFullYear() - 1;
  const lastUpdateDate = new Date().toLocaleString(locale, { timeZone: "UTC" });

  const cardYears = ([...Array(12).keys()]).map((_, i) => prevYear - i - 1);

  return (
    <>
      <Text variant="h1" as="h1">
        <FormattedMessage id="dashboardTitle" /> {prevYear}
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        borderColor={'blue100'}
        borderRadius="large"
        borderWidth="standard"
        paddingX={[3, 3, 4]}
        paddingY={3}
        marginX={[3, 3, 4]}
        marginY={3}
        background={'blue100'}
      >
        <Text variant="h3" marginBottom={3}>
          <FormattedMessage id="dashboardCardTitle" />
        </Text>
        <Text marginBottom={3}>
          <FormattedMessage id="dashboardCardRow1" />:
        </Text>
        <Text marginBottom={3}>
          <FormattedMessage id="dashboardCardRow2" />:
        </Text>
        <Text marginBottom={3}>
          <FormattedMessage id="dashboardCardUpdate" /> {lastUpdateDate}
        </Text>
        <Button>
          <FormattedMessage id="dashboardCardButton" />
        </Button>
      </Box>

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
