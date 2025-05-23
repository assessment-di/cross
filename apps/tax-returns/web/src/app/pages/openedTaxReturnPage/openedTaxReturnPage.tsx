import React, { useState } from 'react'
import { Text, Button, Box } from '@island.is/island-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'
import TaxReturnCard from '../../components/taxReturnCard/taxReturnCard'
import useTaxReturnData from '../../hooks/useTaxReturnData'
import OpenedTaxReturnSectionBase from './openedTaxReturnSectionBase'
import RevenueCard from './cards/revenueCard'
import RealEstateCard from './cards/realEstateCard'
import CarsCard from './cards/carsCard'
import LoanCard from './cards/loanCard'
import OtherDebtsCard from './cards/otherDebtsCard'
import * as styles from './openedTaxRevenuePage.css'

const OpenedTaxReturnPage: React.FC = () => {
  const [isReadonly, setIsReadonly] = useState<boolean>(false)
  const { formatMessage } = useIntl()
  const {
    data,
    removeCar,
    removeDebt,
    removeRealEstate,
    removeLoan,
    removeRevenue,
    editRevenue,
    editRealEstate,
    editCar,
    editLoan,
    editDebt,
  } = useTaxReturnData()
  const { revenues, debts, assets } = data
  const lastYear = new Date().getFullYear() - 1;

  return (
    <div className={styles.container}>
      <div>
        <Text variant="h2" as="h1" marginY={3} marginTop={0}>
          <FormattedMessage id="openedTaxTitle" /> {lastYear}
        </Text>
        <TaxReturnCard
          totalPaid={2808000}
          taxReturn={32227}
          lastUpdateDate={new Date()}
          title={
            <Text variant="h3" marginBottom={3}>
              <FormattedMessage id="openedTaxCardTitle" />
            </Text>
          }
          actionButtonContent={
            <FormattedMessage id="openedTaxCardButtonSubmit" />
          }
          isSubmitted={isReadonly}
          onSubmit={() => setIsReadonly(true)}
          isSmall
        />
      </div>

      <div>
        <OpenedTaxReturnSectionBase
          title={formatMessage({ id: 'openedTaxTitle2' })}
          titleIcon="wallet"
          isReadonly={isReadonly}
          marginTop={0}
          addBtnText={formatMessage({ id: 'openedTaxAddRevenue' })}
        >
          {revenues.map((revenue) => (
            <RevenueCard
              key={revenue.id}
              {...revenue}
              isReadonly={isReadonly}
              onRemove={removeRevenue}
              onEdit={editRevenue}
            />
          ))}
        </OpenedTaxReturnSectionBase>

        <OpenedTaxReturnSectionBase
          title={formatMessage({ id: 'openedTaxTitle3' })}
          titleIcon="home"
          isReadonly={isReadonly}
          addBtnText={formatMessage({ id: 'openedTaxAddRevenue' })}
        >
          {assets.realEstate.map((realEstate) => (
            <RealEstateCard
              key={realEstate.id}
              {...realEstate}
              isReadonly={isReadonly}
              onRemove={removeRealEstate}
              onEdit={editRealEstate}
            />
          ))}

          {assets.cars ? (
            <CarsCard
              cars={assets.cars}
              isReadonly={isReadonly}
              onRemove={removeCar}
              onEdit={editCar}
            />
          ) : null}
        </OpenedTaxReturnSectionBase>

        <OpenedTaxReturnSectionBase
          title={formatMessage({ id: 'openedTaxTitle4' })}
          titleIcon="receipt"
          isReadonly={isReadonly}
          addBtnText={formatMessage({ id: 'openedTaxAddDebt' })}
        >
          {debts.loan ? (
            <LoanCard
              {...debts.loan}
              isReadonly={isReadonly}
              onRemove={removeLoan}
              onEdit={editLoan}
            />
          ) : null}

          <Box display="flex" justifyContent="flexEnd">
            {!isReadonly ? (
              <Button variant="ghost" icon="add">
                <FormattedMessage id="openedTaxAddDebt2" />
              </Button>
            ) : null}
          </Box>

          {debts.otherDebts ? (
            <OtherDebtsCard
              otherDebts={debts.otherDebts}
              {...debts.loan}
              isReadonly={isReadonly}
              onRemove={removeDebt}
              onEdit={editDebt}
            />
          ) : null}
        </OpenedTaxReturnSectionBase>
      </div>
    </div>
  )
}

export default OpenedTaxReturnPage
