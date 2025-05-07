import React, { ReactNode, PropsWithChildren } from 'react'
import { Text, Box, Button } from '@island.is/island-ui/core'
import * as styles from './baseCard.css'

type Props = {
  title: ReactNode | string
}

const BaseCard: React.FC<React.PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      borderColor="blue200"
      borderRadius="large"
      borderWidth="standard"
      paddingX={[3, 3, 4]}
      paddingY={3}
      marginY={3}
      background="white"
    >
      <div className={styles.title}>
        <Text variant="h3" marginBottom={3}>
          {title}
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

      {children}
    </Box>
  )
}

export default BaseCard
