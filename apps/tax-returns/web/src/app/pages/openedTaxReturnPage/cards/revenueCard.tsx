import React, { useMemo } from 'react'
import { useIntl } from 'react-intl'
import { Revenue } from '../../../hooks/useTaxReturnData'
import BaseCard from '../../../components/baseCard/baseCard'
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

type Props = Revenue & {}

const RevenueCard: React.FC<Props> = ({ type, description, amount }) => {
  const { formatMessage } = useIntl()

  const title = useMemo(() => {
    return formatMessage({ id: getTitleIdFromType(type) })
  }, [formatMessage, type])

  return (
    <BaseCard title={title}>
      <BaseCardRowWithAction title={description} value={amount} />
    </BaseCard>
  )
}

export default RevenueCard
