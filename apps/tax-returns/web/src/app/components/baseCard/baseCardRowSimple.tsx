import React, { ReactNode } from 'react'
import { Text } from '@island.is/island-ui/core'

type Props = {
  title: ReactNode | string
  value: string | number
}

const BaseCardRowSimple: React.FC<React.PropsWithChildren<Props>> = ({ title, value }) => {
  return (
    <>
      <Text>{title}:</Text>
      <Text marginBottom={3}>{value}</Text>
    </>
  )
}

export default BaseCardRowSimple
