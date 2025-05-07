import React, { ReactNode } from 'react'
import { Text} from '@island.is/island-ui/core'

type Props = {
  title: ReactNode | string
  value: ReactNode | string
}

const TaxReturnCardRow: React.FC<React.PropsWithChildren<Props>> = ({ title, value }) => {
  return (
    <>
      <Text>{title}:</Text>
      <Text color="roseTinted400" fontWeight="medium" textAlign="right">
        {value}
      </Text>
    </>
  )
}

export default TaxReturnCardRow
