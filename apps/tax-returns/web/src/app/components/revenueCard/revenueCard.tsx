import React from 'react'
import { Text, Box, Button } from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'
import * as styles from './revenueCard.css'
import { Revenue } from '../../hooks/useTaxReturnData'

type Props = Revenue & {}

const getTitleIdFromType = (type: Revenue['type']) => {
  switch (type) {
    case 'salary':
      return 'openedTaxCard2Title'
    case 'vehicleAllowance':
      return 'openedTaxCard3Title'
    case 'pensionsAndGrants':
      return 'openedTaxCard4Title'
    default:
      return 'Unknown'
  }
}

function RevenueCard({ type, description, amount }: Props) {
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
          <FormattedMessage id={getTitleIdFromType(type)} />
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

      <Text>{description}:</Text>

      <div className={styles.container}>
        <Text color="roseTinted400" fontWeight="medium">
          {amount}
        </Text>
        <Button
          variant="primary"
          colorScheme="negative"
          icon="pencil"
          iconType="outline"
          size="medium"
          circle
        />
        <Button
          variant="primary"
          colorScheme="negative"
          icon="trash"
          iconType="outline"
          size="medium"
          circle
        />
      </div>
    </Box>
  )
}

export default RevenueCard
