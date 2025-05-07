import React from 'react'
import { Text, Box, Button, Divider } from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'
import * as styles from './otherDebtsCard.css'
import { Loan, OtherDebt } from '../../hooks/useTaxReturnData'

type Props = {
  otherDebts: OtherDebt[]
}

function OtherDebtsCard({ otherDebts }: Props) {
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
          <FormattedMessage id="openedTaxCard8Title" />
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

      {otherDebts.map(
        ({ description, interestExpenses, remainingDebt, id }, index) => (
          <>
            {index > 0 ? <Divider /> : null}
            <Text marginTop={index > 0 ? 3 : undefined}>{description}</Text>
            <Text>
              <FormattedMessage id="openedTaxCard8Row3" />:
            </Text>
            <Text marginBottom={3}>{interestExpenses}</Text>
            <Text>
              <FormattedMessage id="openedTaxCard8Row4" />:
            </Text>
            <Text marginBottom={3}>{remainingDebt}</Text>
          </>
        ),
      )}

      {/*<div className={styles.container}>*/}
      {/*  <Text color="roseTinted400" fontWeight="medium">*/}
      {/*    ???*/}
      {/*  </Text>*/}
      {/*  <Button variant="primary" colorScheme="negative" icon="pencil" iconType="outline" size="medium" circle />*/}
      {/*  <Button variant="primary" colorScheme="negative" icon="trash" iconType="outline" size="medium" circle/>*/}
      {/*</div>*/}
    </Box>
  )
}

export default OtherDebtsCard
