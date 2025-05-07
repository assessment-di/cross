import React, { Fragment } from 'react'
import { Divider } from '@island.is/island-ui/core'
import { useIntl } from 'react-intl'
import { Car } from '../../../hooks/useTaxReturnData'
import BaseCard, { BaseCardProps } from '../../../components/baseCard/baseCard'
import BaseCardRowWithAction from '../../../components/baseCard/baseCardRowWithAction'
import BaseCardRowSimple from '../../../components/baseCard/baseCardRowSimple'

type Props = BaseCardProps & {
  cars: Car[]
  onEdit: (updated: Car) => void;
}

const CarsCard: React.FC<Props> = ({ cars, isReadonly, onRemove, onEdit }) => {
  const { formatMessage } = useIntl()

  return (
    <BaseCard title={formatMessage({ id: 'openedTaxCard6Title' })}>
      {cars.map(({ carNumber, year, estimatedValue, id }, index) => (
        <Fragment key={id}>
          {index > 0 ? <Divider /> : null}
          <BaseCardRowSimple
            title={formatMessage({ id: 'openedTaxCard6Row1' })}
            value={carNumber}
          />
          <BaseCardRowSimple
            title={formatMessage({ id: 'openedTaxCard6Row3' })}
            value={year}
          />
          <BaseCardRowWithAction
            title={formatMessage({ id: 'openedTaxCard6Row55' })}
            value={estimatedValue}
            isReadonly={isReadonly}
            onRemove={() => onRemove(id)}
            onEdit={(newAmount: number) => {
              onEdit({
                carNumber,
                year,
                id,
                estimatedValue: +newAmount
              })
            }}
          />
        </Fragment>
      ))}
    </BaseCard>
  )
}

export default CarsCard
