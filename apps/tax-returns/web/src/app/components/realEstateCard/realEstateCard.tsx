import React from 'react'
import { Text, Box, Button } from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'
import * as styles from './realEstateCard.css'
import { RealEstate } from '../../hooks/useTaxReturnData'

type Props = RealEstate & {}

function RealEstateCard({ number, address, estimatedValue }: Props) {
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
          <FormattedMessage id="openedTaxCard5Title" />
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
        <FormattedMessage id="openedTaxCard5Row1" />:
      </Text>
      <Text marginBottom={3}>{number}</Text>

      <Text>
        <FormattedMessage id="openedTaxCard5Row3" />:
      </Text>

      <Text marginBottom={3}>{address}</Text>

      <div className={styles.container}>
        <Text color="roseTinted400" fontWeight="medium">
          {estimatedValue}
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

export default RealEstateCard
