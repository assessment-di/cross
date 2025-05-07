import React from 'react'
import { useIntl } from 'react-intl'
import { RealEstate } from '../../../hooks/useTaxReturnData'
import BaseCard from '../../../components/baseCard/baseCard'
import BaseCardRowWithAction from '../../../components/baseCard/baseCardRowWithAction'
import BaseCardRowSimple from '../../../components/baseCard/baseCardRowSimple'

type Props = RealEstate & {}

const RealEstateCard: React.FC<Props> = ({ number, address, estimatedValue }) =>  {
  const { formatMessage } = useIntl()

  return (
    <BaseCard title={formatMessage({ id: "openedTaxCard5Title" })}>
      <BaseCardRowSimple title={formatMessage({ id: "openedTaxCard5Row1" })} value={number} />
      <BaseCardRowSimple title={formatMessage({ id: "openedTaxCard5Row3" })} value={address} />
      <BaseCardRowWithAction title={formatMessage({ id: "openedTaxCard5Row5" })} value={estimatedValue} />
    </BaseCard>
  )
}

export default RealEstateCard
