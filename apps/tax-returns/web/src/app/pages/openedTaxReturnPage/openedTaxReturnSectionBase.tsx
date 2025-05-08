import React, { PropsWithChildren } from 'react'
import {
  Text,
  Button,
  Icon,
  Box,
  ResponsiveSpace,
} from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'

type Props = {
  titleIcon?: string
  title: string
  isReadonly: boolean
  marginTop?: ResponsiveSpace
  addBtnText: string
}

const OpenedTaxReturnSectionBase: React.FC<PropsWithChildren<Props>> = ({
  titleIcon,
  title,
  children,
  isReadonly,
  marginTop,
  addBtnText
}) => {

  return (
    <>
      <Text variant="h2" as="h2" marginY={3} marginTop={marginTop}>
        {titleIcon ? (
          <>
            <Icon
              // @ts-ignore
              icon={titleIcon}
              type="outline"
              color="blue400"
            />{' '}
          </>
        ) : null}
        {title}
      </Text>

      {children}

      <Box display="flex" justifyContent="flexEnd">
        {!isReadonly ? (
          <Button variant="ghost" icon="add">
            {addBtnText}
          </Button>
        ) : null}
      </Box>
    </>
  )
}

export default OpenedTaxReturnSectionBase
