import React, { useContext } from 'react'
import {
  Text,
  Box,
  Button,
  Divider
} from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'
import { LocaleContext } from '../../../i18n/LocaleContext'
import * as styles from './taxReturnCard.css'

type Props = {
  year: number,
  totalPaid: number,
  taxReturn: number,
  lastUpdateDate: Date,
}

function TaxReturnCard({ year, totalPaid, taxReturn, lastUpdateDate = new Date() }: Props) {
  const { locale } = useContext(LocaleContext)
  const lastUpdate = lastUpdateDate.toLocaleString(locale, { timeZone: "UTC" });

  return (
    <Box
      display="flex"
      flexDirection="column"
      borderColor="blue200"
      borderRadius="large"
      borderWidth="standard"
      paddingX={[3, 3, 4]}
      paddingY={3}
      marginBottom={3}
      background="mint100"
    >
      <Text variant="h3" marginBottom={3}>
        <FormattedMessage id="dashboardTitle" /> {year}
      </Text>

      <div className={styles.container}>
        <Text>
          <FormattedMessage id="dashboardCardRow1" />:
        </Text>
        <Text color="roseTinted400" fontWeight="medium" textAlign="right">
          {totalPaid}
        </Text>
        <Text>
          <FormattedMessage id="dashboardCardRow2" />:
        </Text>
        <Text color="roseTinted400" fontWeight="medium" textAlign="right">
          {taxReturn}
        </Text>
      </div>
      <Divider  />

      <div className={styles.actions}>
        <Text textAlign={'center'}>
          <FormattedMessage id="dashboardCardUpdate" /> {lastUpdate}
        </Text>

        <Button fluid size="medium">
          <FormattedMessage id="dashboardCardButton" />
        </Button>
      </div>
    </Box>
  )
}

export default TaxReturnCard
