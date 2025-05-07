import React, { useMemo } from 'react'
import { useIntl } from 'react-intl'
import { Revenue } from '../../../hooks/useTaxReturnData'
import BaseCard, { BaseCardProps } from '../../../components/baseCard/baseCard'
import BaseCardRowWithAction from '../../../components/baseCard/baseCardRowWithAction'

const getTitleIdFromType = (type: Revenue['type']) => {
  switch (type) {
    case 'salary':
      return 'openedTaxCard2Title'
    case 'vehicleAllowance':
      return 'openedTaxCard3Title'
    case 'pensionsAndGrants':
      return 'openedTaxCard4Title'
    default:
      return 'Unknown'
  }
}

type Props = Revenue & BaseCardProps & {
  onEdit: (updated: Revenue) => void
}

const RevenueCard: React.FC<Props> = ({
  type,
  description,
  amount,
  isReadonly,
  id,
  onRemove,
  onEdit,
}) => {
  const { formatMessage } = useIntl()

  const title = useMemo(() => {
    return formatMessage({ id: getTitleIdFromType(type) })
  }, [formatMessage, type])

  const onSubmitEdit = (newAmount: number) => {
    onEdit({
      type,
      description,
      id,
      amount: +newAmount
    })
  }

  const onDelete = () => {
    onRemove(id)
  }

  return (
    <BaseCard title={title}>
      <BaseCardRowWithAction
        title={description}
        value={amount}
        isReadonly={isReadonly}
        onRemove={onDelete}
        onEdit={onSubmitEdit}
      />
    </BaseCard>
  )
}

export default RevenueCard
