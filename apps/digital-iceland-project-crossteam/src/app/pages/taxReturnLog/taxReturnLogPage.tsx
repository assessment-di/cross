import React, { useContext } from 'react'
import { Text, ActionCard, Box, Input, Button } from '@island.is/island-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'
import { LocaleContext } from '../../../i18n/LocaleContext'

function TaxReturnLogPage() {
  const { formatMessage } = useIntl()
  const { locale } = useContext(LocaleContext)

  const prevYear = new Date().getFullYear() - 1;
  const lastUpdateDate = new Date().toLocaleString(locale, { timeZone: "UTC" });

  const cardYears = ([...Array(12).keys()]).map((_, i) => prevYear - i - 1);

  return (
    <>
      <Text variant="h1" as="h1">
        <FormattedMessage id="taxReturnLogTitle" /> {prevYear}
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
          <FormattedMessage id="taxReturnLogCardTitle" />
        </Text>
        <Text marginBottom={3}>
          <FormattedMessage id="taxReturnLogCardRow1" />:
        </Text>
        <Text marginBottom={3}>
          <FormattedMessage id="taxReturnLogCardRow2" />:
        </Text>
        <Text marginBottom={3}>
          <FormattedMessage id="taxReturnLogCardUpdate" /> {lastUpdateDate}
        </Text>
        <Button>
          <FormattedMessage id="taxReturnLogCardButton" />
        </Button>
      </Box>

      <Text variant="h3" as="h1" marginBottom={3}>
        <FormattedMessage id="taxReturnLogSectionsTitle" /> {prevYear}
      </Text>
      {cardYears.map((year) => (
        <Box marginBottom={3}>
          <ActionCard
            heading={`${formatMessage({ id: 'taxReturnLogSectionHeader' })} ${year}`}
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

export default TaxReturnLogPage
