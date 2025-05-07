import React from 'react'
import { useIntl } from 'react-intl'
import { Loan } from '../../../hooks/useTaxReturnData'
import BaseCard, { BaseCardProps } from '../../../components/baseCard/baseCard'
import BaseCardRowWithAction from '../../../components/baseCard/baseCardRowWithAction'
import BaseCardRowSimple from '../../../components/baseCard/baseCardRowSimple'

type Props = Loan & BaseCardProps & {
  onEdit: (updated: Loan) => void;
}

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
  isReadonly,
  onRemove,
  onEdit,
}) => {
  const { formatMessage } = useIntl()

  const onSubmitEditTotalPayments = (newAmount: number) => {
    onEdit({
      purchaseYear,
      residentialLocation,
      loanProvider,
      loanProviderSSN,
      loanNumber,
      loanDate,
      loanTimeYears,
      installmentOfNominalValue,
      interestExpenses,
      remainingDebt,
      totalPayments: +newAmount
    })
  }

  const onSubmitEditInstallmentOfNominalValue = (newAmount: number) => {
    onEdit({
      purchaseYear,
      residentialLocation,
      loanProvider,
      loanProviderSSN,
      loanNumber,
      loanDate,
      loanTimeYears,
      totalPayments,
      interestExpenses,
      remainingDebt,
      installmentOfNominalValue: +newAmount
    })
  }
  const onSubmitEditInterestExpenses = (newAmount: number) => {
    onEdit({
      purchaseYear,
      residentialLocation,
      loanProvider,
      loanProviderSSN,
      loanNumber,
      loanDate,
      loanTimeYears,
      totalPayments,
      installmentOfNominalValue,
      remainingDebt,
      interestExpenses: +newAmount
    })
  }

  const onSubmitEditRemainingDebt = (newAmount: number) => {
    onEdit({
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
      remainingDebt: +newAmount
    })
  }

  return (
    <BaseCard title={formatMessage({ id: 'openedTaxCard7Title' })}>
      <BaseCardRowSimple
        title={formatMessage({ id: 'openedTaxCard7Row1' })}
        value={purchaseYear}
      />
      <BaseCardRowSimple
        title={formatMessage({ id: 'openedTaxCard7Row3' })}
        value={residentialLocation}
      />
      <BaseCardRowSimple
        title={formatMessage({ id: 'openedTaxCard7Row5' })}
        value={loanProvider}
      />
      <BaseCardRowSimple
        title={formatMessage({ id: 'openedTaxCard7Row7' })}
        value={loanProviderSSN}
      />
      <BaseCardRowSimple
        title={formatMessage({ id: 'openedTaxCard7Row8' })}
        value={loanNumber}
      />
      <BaseCardRowSimple
        title={formatMessage({ id: 'openedTaxCard7Row10' })}
        value={loanDate}
      />
      <BaseCardRowSimple
        title={formatMessage({ id: 'openedTaxCard7Row12' })}
        value={loanTimeYears}
      />
      <BaseCardRowWithAction
        title={formatMessage({ id: 'openedTaxCard7Row14' })}
        value={totalPayments}
        isReadonly={isReadonly}
        onRemove={onRemove}
        onEdit={onSubmitEditTotalPayments}
      />
      <BaseCardRowWithAction
        title={formatMessage({ id: 'openedTaxCard7Row15' })}
        value={installmentOfNominalValue}
        isReadonly={isReadonly}
        onRemove={onRemove}
        onEdit={onSubmitEditInstallmentOfNominalValue}
      />
      <BaseCardRowWithAction
        title={formatMessage({ id: 'openedTaxCard7Row17' })}
        value={interestExpenses}
        isReadonly={isReadonly}
        onRemove={onRemove}
        onEdit={onSubmitEditInterestExpenses}
      />
      <BaseCardRowWithAction
        title={formatMessage({ id: 'openedTaxCard7Row16' })}
        value={remainingDebt}
        isReadonly={isReadonly}
        onRemove={onRemove}
        onEdit={onSubmitEditRemainingDebt}
      />
    </BaseCard>
  )
}

export default LoanCard
