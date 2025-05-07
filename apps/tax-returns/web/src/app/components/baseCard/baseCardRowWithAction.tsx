import React, { ReactNode, useState } from 'react'
import { Text, Button } from '@island.is/island-ui/core'
import * as styles from './baseCard.css'
import EditActionBox from './editActionBox'
import DeleteActionBox from './deleteActionBox'

type Mode = 'edit' | 'delete' | undefined

type Props = {
  title: ReactNode | string
  value: number
  onEdit?: (newValue: number) => void
  onRemove?: () => void
  isReadonly: boolean
}

const BaseCardRowWithAction: React.FC<React.PropsWithChildren<Props>> = ({ title, value, onEdit, onRemove, isReadonly }) => {
  const [mode, setMode] = useState<Mode>(undefined)

  const onCancel = () => setMode(undefined)
  const onSubmit = (newValue: number) => {
    onEdit?.(+newValue)
    onCancel()
  }
  const onDelete = () => {
    onRemove?.()
    onCancel()
  }

  return (
    <>
      <Text>{title}:</Text>
      <div className={styles.container}>
        <Text color="roseTinted400" fontWeight="medium">
          {value}
        </Text>
        {
          !isReadonly ? (
            <>
              <Button
                variant="primary"
                colorScheme="negative"
                icon="pencil"
                iconType="outline"
                size="medium"
                circle
                onClick={() => setMode('edit')}
              />
              <Button
                variant="primary"
                colorScheme="negative"
                icon="trash"
                iconType="outline"
                size="medium"
                circle
                onClick={() => setMode('delete')}
              />
            </>
          ) : null
        }
      </div>
      {mode === 'edit' ? <EditActionBox initialValue={value} onCancel={onCancel} onSubmit={onSubmit} /> : null}
      {mode === 'delete' ? <DeleteActionBox onCancel={onCancel} onDelete={onDelete} /> : null}
    </>
  )
}

export default BaseCardRowWithAction
