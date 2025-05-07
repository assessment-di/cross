import React, { ReactNode } from 'react'
import { Text, Button } from '@island.is/island-ui/core'
import * as styles from './baseCard.css'

type Props = {
  title: ReactNode | string
  value: any
}

const BaseCardRowWithAction: React.FC<React.PropsWithChildren<Props>> = ({ title, value }) => {
  return (
    <>
      <Text>{title}:</Text>
      <div className={styles.container}>
        <Text color="roseTinted400" fontWeight="medium">
          {value}
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
    </>
  )
}

export default BaseCardRowWithAction
