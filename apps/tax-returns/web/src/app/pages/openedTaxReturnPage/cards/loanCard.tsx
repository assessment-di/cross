import React from 'react'
import { useIntl } from 'react-intl'
import { Loan } from '../../../hooks/useTaxReturnData'
import BaseCard from '../../../components/baseCard/baseCard'
import BaseCardRowWithAction from '../../../components/baseCard/baseCardRowWithAction'
import BaseCardRowSimple from '../../../components/baseCard/baseCardRowSimple'

type Props = Loan & {}

const LoanCard: React.FC<Props> = ({
  purchaseYear,
  residentialLocation,
  loanProvider,
  loanProviderSSN,
  loanNumber,
  loanDate,
  loanTimeYears,
  totalPayments,
  installmentOfNominalValue,
  interestExpenses,
  remainingDebt,
}) => {
  const { formatMessage } = useIntl()

  return (
    <BaseCard title={formatMessage({ id: "openedTaxCard7Title" })}>
      <BaseCardRowSimple title={formatMessage({ id: "openedTaxCard7Row1" })} value={purchaseYear} />
      <BaseCardRowSimple title={formatMessage({ id: "openedTaxCard7Row3" })} value={residentialLocation} />
      <BaseCardRowSimple title={formatMessage({ id: "openedTaxCard7Row5" })} value={loanProvider} />
      <BaseCardRowSimple title={formatMessage({ id: "openedTaxCard7Row7" })} value={loanProviderSSN} />
      <BaseCardRowSimple title={formatMessage({ id: "openedTaxCard7Row8" })} value={loanNumber} />
      <BaseCardRowSimple title={formatMessage({ id: "openedTaxCard7Row10" })} value={loanDate} />
      <BaseCardRowSimple title={formatMessage({ id: "openedTaxCard7Row12" })} value={loanTimeYears} />
      <BaseCardRowWithAction title={formatMessage({ id: "openedTaxCard7Row14" })} value={totalPayments} />
      <BaseCardRowWithAction title={formatMessage({ id: "openedTaxCard7Row15" })} value={installmentOfNominalValue} />
      <BaseCardRowWithAction title={formatMessage({ id: "openedTaxCard7Row17" })} value={interestExpenses} />
      <BaseCardRowWithAction title={formatMessage({ id: "openedTaxCard7Row16" })} value={remainingDebt} />
    </BaseCard>
  )
}

export default LoanCard
