import React, { Fragment } from 'react'
import { Text, Box, Button, Divider } from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'
import * as styles from './carsCard.css'
import { Car } from '../../hooks/useTaxReturnData'

type Props = {
  cars: Car[]
}

function CarsCard({ cars }: Props) {
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
          <FormattedMessage id="openedTaxCard6Title" />
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

      {cars.map(({ carNumber, year, estimatedValue, id }, index) => (
        <Fragment key={id}>
          {index > 0 ? <Divider /> : null}
          <Text marginTop={3}>
            <FormattedMessage id="openedTaxCard6Row1" />:
          </Text>
          <Text marginBottom={3}>{carNumber}</Text>

          <Text>
            <FormattedMessage id="openedTaxCard6Row3" />:
          </Text>
          <Text marginBottom={3}>{year}</Text>

          <Text>
            <FormattedMessage id="openedTaxCard6Row55" />:
          </Text>
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
        </Fragment>
      ))}
    </Box>
  )
}

export default CarsCard
