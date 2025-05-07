import React from 'react'
import { Text, Box, Button } from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'
import { Loan } from '../../hooks/useTaxReturnData'
import * as styles from './loanCard.css'

type Props = Loan & {}

function LoanCard({
  purchaseYear,
  residentialLocation,
  loanProvider,
  loanProviderSSN,
  loanNumber,
  loanDate,
  loanTimeYears,
  totalPayments,
  installmentOfNominalValue,
  interestExpenses,
  remainingDebt,
}: Props) {
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
      background="white"
    >
      <div className={styles.title}>
        <Text variant="h3" marginBottom={3}>
          <FormattedMessage id="openedTaxCard7Title" />
        </Text>
        <Button
          variant="primary"
          colorScheme="negative"
          icon="informationCircle"
          iconType="outline"
          size="small"
          circle
        />
      </div>

      <Text>
        <FormattedMessage id="openedTaxCard7Row1" />:
      </Text>
      <Text marginBottom={3}>{purchaseYear}</Text>

      <Text>
        <FormattedMessage id="openedTaxCard7Row3" />:
      </Text>
      <Text marginBottom={3}>{residentialLocation}</Text>

      <Text>
        <FormattedMessage id="openedTaxCard7Row5" />:
      </Text>
      <Text marginBottom={3}>{loanProvider}</Text>

      <Text>
        <FormattedMessage id="openedTaxCard7Row7" />:
      </Text>
      <Text marginBottom={3}>{loanProviderSSN}</Text>

      <Text>
        <FormattedMessage id="openedTaxCard7Row8" />:
      </Text>
      <Text marginBottom={3}>{loanNumber}</Text>

      <Text>
        <FormattedMessage id="openedTaxCard7Row10" />:
      </Text>
      <Text marginBottom={3}>{loanDate}</Text>

      <Text>
        <FormattedMessage id="openedTaxCard7Row12" />:
      </Text>
      <Text marginBottom={3}>{loanTimeYears}</Text>

      <Text>
        <FormattedMessage id="openedTaxCard7Row14" />:
      </Text>
      <Text marginBottom={3}>{totalPayments}</Text>

      <Text>
        <FormattedMessage id="openedTaxCard7Row15" />:
      </Text>
      <Text marginBottom={3}>{installmentOfNominalValue}</Text>

      <Text>
        <FormattedMessage id="openedTaxCard7Row17" />:
      </Text>
      <Text marginBottom={3}>{interestExpenses}</Text>

      <Text>
        <FormattedMessage id="openedTaxCard7Row16" />:
      </Text>
      <Text marginBottom={3}>{remainingDebt}</Text>

      {/*<Text marginBottom={3}>*/}
      {/*  {address}*/}
      {/*</Text>*/}

      {/*<div className={styles.container}>*/}
      {/*  <Text color="roseTinted400" fontWeight="medium">*/}
      {/*    {estimatedValue}*/}
      {/*  </Text>*/}
      {/*  <Button variant="primary" colorScheme="negative" icon="pencil" iconType="outline" size="medium" circle />*/}
      {/*  <Button variant="primary" colorScheme="negative" icon="trash" iconType="outline" size="medium" circle/>*/}
      {/*</div>*/}
    </Box>
  )
}

export default LoanCard
