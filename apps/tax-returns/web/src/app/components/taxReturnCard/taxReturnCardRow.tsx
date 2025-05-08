import React, { ReactNode } from 'react'
import { Text} from '@island.is/island-ui/core'

type Props = {
  title: ReactNode | string
  value: ReactNode | string,
  type?: 'default' | 'success'
}

const TaxReturnCardRow: React.FC<React.PropsWithChildren<Props>> = ({ title, value, type = 'default' }) => {
  const valueColor = type === 'success' ? 'mint800' : 'blue600'

  return (
    <>
      <Text>{title}:</Text>
      <Text color={valueColor} fontWeight="medium" textAlign="right">
        {value}
      </Text>
    </>
  )
}

export default TaxReturnCardRow
