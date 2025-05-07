import React from 'react'
import { Button, Box, Text } from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'
import * as style from './baseCard.css'

type Props = {
  onCancel: () => void;
  onDelete: () => void;
}

const DeleteActionBox: React.FC<React.PropsWithChildren<Props>> = ({ onCancel, onDelete}) => {
  return (
    <Box
      background="red200"
      borderColor="blue200"
      borderRadius="large"
      borderWidth="standard"
      padding={3}
    >
      <Text fontWeight="medium">
        <FormattedMessage id="openedTaxCard7Placeholder" />
      </Text>

      <div className={style.editAction}>
        <Button variant="ghost" fluid size="small" onClick={onCancel}>
          <FormattedMessage id="openedTaxCard6ButtonCancel" />
        </Button>
        <Button fluid size="small" onClick={onDelete}>
          <FormattedMessage id="openedTaxCard7ButtonDelete" />
        </Button>
      </div>
    </Box>
  )
}

export default DeleteActionBox
