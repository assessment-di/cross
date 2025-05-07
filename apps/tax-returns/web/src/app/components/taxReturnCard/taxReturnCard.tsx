import React, { useContext, ReactNode } from 'react'
import classnames from 'classnames'
import { Text, Box, Button, Divider, Icon } from '@island.is/island-ui/core'
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
  isSubmitted?: boolean
  onSubmit?: () => void
  isSmall?: boolean
}

const TaxReturnCard: React.FC<React.PropsWithChildren<Props>> = ({
                                                                   title,
                                                                   totalPaid,
                                                                   taxReturn,
                                                                   lastUpdateDate = new Date(),
                                                                   actionButtonContent,
                                                                   isSubmitted,
                                                                   onSubmit,
                                                                   isSmall,
                                                                 }) => {
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
      position={isSmall ? 'sticky' : undefined}
      top={3}
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

      {!isSubmitted ? (
        <div
          className={classnames(styles.actions, {
            [styles.actionsSmall]: isSmall,
          })}
        >
          <Text textAlign={'center'} as="span" whiteSpace="pre">
            <FormattedMessage id="dashboardCardUpdate" /> {lastUpdate}
          </Text>

          <Button fluid size="medium" onClick={onSubmit}>
            {actionButtonContent || (
              <FormattedMessage id="dashboardCardButton" />
            )}
          </Button>
        </div>
      ) : (
        <Box
          className={styles.submitContainer}
          background="mint200"
          borderColor="blue200"
          borderRadius="large"
          borderWidth="standard"
          padding={3}
        >
          <Icon icon="checkmark" color="white" className={styles.checkIcon} />{' '}
          <Text fontWeight="medium" as="span">
            <FormattedMessage id="openedTaxSubmit" />
          </Text>
        </Box>
      )}
    </Box>
  )
}

export default TaxReturnCard
