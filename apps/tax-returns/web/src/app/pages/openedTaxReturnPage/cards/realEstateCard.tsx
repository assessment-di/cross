import React from 'react'
import { useIntl } from 'react-intl'
import { RealEstate } from '../../../hooks/useTaxReturnData'
import BaseCard, { BaseCardProps } from '../../../components/baseCard/baseCard'
import BaseCardRowWithAction from '../../../components/baseCard/baseCardRowWithAction'
import BaseCardRowSimple from '../../../components/baseCard/baseCardRowSimple'

type Props = RealEstate & BaseCardProps & {
  onEdit: (updated: RealEstate) => void;
}

const RealEstateCard: React.FC<Props> = ({ number, address, estimatedValue, id, isReadonly, onRemove, onEdit }) => {
  const { formatMessage } = useIntl()

  const onDelete = () => {
    onRemove(id)
  }

  const onSubmitEdit = (newAmount: number) => {
    onEdit({
      number,
      address,
      id,
      estimatedValue: +newAmount
    })
  }

  return (
    <BaseCard title={formatMessage({ id: 'openedTaxCard5Title' })}>
      <BaseCardRowSimple title={formatMessage({ id: 'openedTaxCard5Row1' })} value={number} />
      <BaseCardRowSimple title={formatMessage({ id: 'openedTaxCard5Row3' })} value={address} />
      <BaseCardRowWithAction
        title={formatMessage({ id: 'openedTaxCard5Row5' })}
        value={estimatedValue}
        isReadonly={isReadonly}
        onRemove={onDelete}
        onEdit={onSubmitEdit}
      />
    </BaseCard>
  )
}

export default RealEstateCard
