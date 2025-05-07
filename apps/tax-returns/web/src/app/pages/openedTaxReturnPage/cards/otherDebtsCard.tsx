import React, { Fragment } from 'react'
import { Text, Divider } from '@island.is/island-ui/core'
import { useIntl } from 'react-intl'
import { OtherDebt } from '../../../hooks/useTaxReturnData'
import BaseCard, { BaseCardProps } from '../../../components/baseCard/baseCard'
import BaseCardRowWithAction from '../../../components/baseCard/baseCardRowWithAction'

type Props = BaseCardProps & {
  otherDebts: OtherDebt[]
}

const OtherDebtsCard: React.FC<Props> = ({ otherDebts, isReadonly }) => {
  const { formatMessage } = useIntl()

  return (
    <BaseCard title={formatMessage({ id: "openedTaxCard8Title" })}>
      {otherDebts.map(
        ({ description, interestExpenses, remainingDebt, id }, index) => (
          <Fragment key={id}>
            {index > 0 ? <Divider /> : null}
            <Text marginY={3}>
              {description}
            </Text>
            <BaseCardRowWithAction title={formatMessage({ id: "openedTaxCard8Row3" })} value={interestExpenses} isReadonly={isReadonly} />
            <BaseCardRowWithAction title={formatMessage({ id: "openedTaxCard8Row4" })} value={remainingDebt} isReadonly={isReadonly} />
          </Fragment>
        ),
      )}
    </BaseCard>
  )
}

export default OtherDebtsCard
