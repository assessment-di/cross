import React, { useState } from 'react'
import { Button, Box, Input } from '@island.is/island-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'
import * as style from './baseCard.css'

type Props = {
  onCancel: () => void;
  onSubmit: (newValue: string | number) => void;
}

const EditActionBox: React.FC<React.PropsWithChildren<Props>> = ({ onCancel, onSubmit}) => {
  const [value, setValue] = useState('')
  const { formatMessage } = useIntl()

  return (
    <Box
      background="mint200"
      borderColor="blue200"
      borderRadius="large"
      borderWidth="standard"
      padding={3}
    >
      <Input
        label={formatMessage({ id: 'openedTaxCard6InputPlaceholder' })}
        name="operatingLicenseSearchInput"
        backgroundColor={['blue', 'blue', 'white']}
        size="sm"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <div className={style.editAction}>
        <Button variant="ghost" fluid size="small" onClick={onCancel}>
          <FormattedMessage id="openedTaxCard6ButtonCancel" />
        </Button>
        <Button fluid size="small" onClick={() => onSubmit(value)}>
          <FormattedMessage id="openedTaxCard6ButtonSubmit" />
        </Button>
      </div>
    </Box>
  )
}

export default EditActionBox
