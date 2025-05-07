import React, { useContext, ReactNode } from 'react'
import { Text, Box, Button, Divider } from '@island.is/island-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'
import { LocaleContext } from '../../../i18n/LocaleContext'
import * as styles from './taxReturnCard.css'
import TaxReturnCardRow from './taxReturnCardRow'

type Props = {
  title: ReactNode | string
  actionButtonContent?: ReactNode | string
  totalPaid: number
  taxReturn: number
  lastUpdateDate: Date
}

function TaxReturnCard({
  title,
  totalPaid,
  taxReturn,
  lastUpdateDate = new Date(),
  actionButtonContent,
}: Props) {
  const { locale } = useContext(LocaleContext)
  const lastUpdate = lastUpdateDate.toLocaleString(locale, { timeZone: 'UTC' })
  const { formatMessage } = useIntl()

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
      {title}

      <div className={styles.container}>
        <TaxReturnCardRow
          title={formatMessage({ id: 'dashboardCardRow1' })}
          value={totalPaid}
        />
        <TaxReturnCardRow
          title={formatMessage({ id: 'dashboardCardRow2' })}
          value={taxReturn}
        />
      </div>

      <Divider />

      <div className={styles.actions}>
        <Text textAlign={'center'}>
          <FormattedMessage id="dashboardCardUpdate" /> {lastUpdate}
        </Text>

        <Button fluid size="medium">
          {actionButtonContent || <FormattedMessage id="dashboardCardButton" />}
        </Button>
      </div>
    </Box>
  )
}

export default TaxReturnCard
