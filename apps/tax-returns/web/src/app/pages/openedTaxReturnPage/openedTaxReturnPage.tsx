import React from 'react'
import {
  Text,
  Button,
} from '@island.is/island-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'
import TaxReturnCard from '../../components/taxReturnCard/taxReturnCard'
import useTaxReturnData from '../../hooks/useTaxReturnData'
import OpenedTaxReturnSectionBase from './openedTaxReturnSectionBase'
import RevenueCard from './cards/revenueCard'
import RealEstateCard from './cards/realEstateCard'
import CarsCard from './cards/carsCard'
import LoanCard from './cards/loanCard'
import OtherDebtsCard from './cards/otherDebtsCard'

const OpenedTaxReturnPage: React.FC = () => {
  const { formatMessage } = useIntl()
  const { data } = useTaxReturnData()
  const { revenues, debts, assets } = data

  return (
    <>
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
      />

      <OpenedTaxReturnSectionBase title={formatMessage({ id: 'openedTaxTitle2' })} titleIcon="wallet">
        {revenues.map((revenue) => (
          <RevenueCard key={revenue.id} {...revenue} />
        ))}
      </OpenedTaxReturnSectionBase>

      <OpenedTaxReturnSectionBase title={formatMessage({ id: 'openedTaxTitle3' })} titleIcon="home">
        {assets.realEstate.map((realEstate) => (
          <RealEstateCard key={realEstate.id} {...realEstate} />
        ))}

        {assets.cars ? <CarsCard cars={assets.cars} /> : null}
      </OpenedTaxReturnSectionBase>

      <OpenedTaxReturnSectionBase title={formatMessage({ id: 'openedTaxTitle4' })} titleIcon="receipt">
        {debts.loan ? <LoanCard {...debts.loan} /> : null}

        <Button variant="ghost" icon="add">
          <FormattedMessage id="openedTaxAddRevenue" />
        </Button>

        {debts.otherDebts ? (
          <OtherDebtsCard otherDebts={debts.otherDebts} {...debts.loan} />
        ) : null}
      </OpenedTaxReturnSectionBase>

      {/*<Box*/}
      {/*  display="flex"*/}
      {/*  flexDirection="column"*/}
      {/*  borderColor={'blue200'}*/}
      {/*  borderRadius="large"*/}
      {/*  borderWidth="standard"*/}
      {/*  paddingX={[3, 3, 4]}*/}
      {/*  paddingY={3}*/}
      {/*  marginX={[3, 3, 4]}*/}
      {/*  marginY={3}*/}
      {/*>*/}
      {/*  <Text variant="h3" marginBottom={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard6Title" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard6Row1" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard6Row2" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard6Row3" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard6Row4" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard6Row5" />:*/}
      {/*  </Text>*/}
      {/*  <Divider />*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard6Row11" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard6Row22" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard6Row33" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard6Row44" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard6Row55" />:*/}
      {/*  </Text>*/}
      {/*  <Box*/}
      {/*    display="flex"*/}
      {/*    flexDirection="column"*/}
      {/*    borderColor="mint200"*/}
      {/*    borderRadius="large"*/}
      {/*    borderWidth="standard"*/}
      {/*    paddingX={[3, 3, 4]}*/}
      {/*    paddingY={3}*/}
      {/*    marginX={[3, 3, 4]}*/}
      {/*    marginY={3}*/}
      {/*    background="mint200"*/}
      {/*  >*/}
      {/*    <Input*/}
      {/*      name="operatingLicenseSearchInput"*/}
      {/*      placeholder={formatMessage({ id: 'openedTaxCard6InputPlaceholder' })}*/}
      {/*      backgroundColor={['blue', 'blue', 'white']}*/}
      {/*      size="sm"*/}
      {/*      // icon={{ name: 'search', type: 'outline' }}*/}
      {/*      // onChange={(event) => onSearch(event.target.value)}*/}
      {/*    />*/}
      {/*    <Button variant="ghost">*/}
      {/*      <FormattedMessage id="openedTaxCard6ButtonCancel" />*/}
      {/*    </Button>*/}
      {/*    <Button>*/}
      {/*      <FormattedMessage id="openedTaxCard6ButtonSubmit" />*/}
      {/*    </Button>*/}
      {/*  </Box>*/}
      {/*</Box>*/}

      {/*<Button variant="ghost" icon="add">*/}
      {/*  <FormattedMessage id="openedTaxAddRevenue" />*/}
      {/*</Button>*/}

      {/*<Text variant="h1" as="h1">*/}
      {/*  <FormattedMessage id="openedTaxTitle4" />*/}
      {/*</Text>*/}

      {/*<Box*/}
      {/*  display="flex"*/}
      {/*  flexDirection="column"*/}
      {/*  borderColor={'blue200'}*/}
      {/*  borderRadius="large"*/}
      {/*  borderWidth="standard"*/}
      {/*  paddingX={[3, 3, 4]}*/}
      {/*  paddingY={3}*/}
      {/*  marginX={[3, 3, 4]}*/}
      {/*  marginY={3}*/}
      {/*>*/}
      {/*  <Text variant="h3" marginBottom={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Title" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row1" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row2" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row3" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row4" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row5" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row6" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row7" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row8" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row9" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row10" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row11" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row12" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row13" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row14" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row15" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard7Row16" />:*/}
      {/*  </Text>*/}
      {/*  <Box*/}
      {/*    display="flex"*/}
      {/*    flexDirection="column"*/}
      {/*    borderColor="red200"*/}
      {/*    borderRadius="large"*/}
      {/*    borderWidth="standard"*/}
      {/*    paddingX={[3, 3, 4]}*/}
      {/*    paddingY={3}*/}
      {/*    marginX={[3, 3, 4]}*/}
      {/*    marginY={3}*/}
      {/*    background="red200"*/}
      {/*  >*/}
      {/*    <Text marginY={3}>*/}
      {/*      <FormattedMessage id="openedTaxCard7Placeholder" />*/}
      {/*    </Text>*/}
      {/*    <Button variant="ghost">*/}
      {/*      <FormattedMessage id="openedTaxCard7ButtonCancel" />*/}
      {/*    </Button>*/}
      {/*    <Button>*/}
      {/*      <FormattedMessage id="openedTaxCard7ButtonDelete" />*/}
      {/*    </Button>*/}
      {/*  </Box>*/}
      {/*</Box>*/}

      {/*<Button variant="ghost" icon="add">*/}
      {/*  <FormattedMessage id="openedTaxAddRevenue" />*/}
      {/*</Button>*/}

      {/*<Box*/}
      {/*  display="flex"*/}
      {/*  flexDirection="column"*/}
      {/*  borderColor={'blue200'}*/}
      {/*  borderRadius="large"*/}
      {/*  borderWidth="standard"*/}
      {/*  paddingX={[3, 3, 4]}*/}
      {/*  paddingY={3}*/}
      {/*  marginX={[3, 3, 4]}*/}
      {/*  marginY={3}*/}
      {/*>*/}
      {/*  <Text variant="h3" marginBottom={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Title" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row1" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row2" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row3" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row4" />:*/}
      {/*  </Text>*/}

      {/*  <Divider />*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row11" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row3" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard6Row4" />:*/}
      {/*  </Text>*/}

      {/*  <Divider />*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row22" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row3" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row4" />:*/}
      {/*  </Text>*/}

      {/*  <Divider />*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row33" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row3" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row4" />:*/}
      {/*  </Text>*/}

      {/*  <Divider />*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row44" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row3" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row4" />:*/}
      {/*  </Text>*/}

      {/*  <Divider />*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row55" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row3" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCard8Row4" />:*/}
      {/*  </Text>*/}
      {/*</Box>*/}

      {/*<Button variant="ghost" icon="add">*/}
      {/*  <FormattedMessage id="openedTaxAddRevenue" />*/}
      {/*</Button>*/}

      {/*<Box*/}
      {/*  display="flex"*/}
      {/*  flexDirection="column"*/}
      {/*  borderColor="mint200"*/}
      {/*  borderRadius="large"*/}
      {/*  borderWidth="standard"*/}
      {/*  paddingX={[3, 3, 4]}*/}
      {/*  paddingY={3}*/}
      {/*  marginX={[3, 3, 4]}*/}
      {/*  marginY={3}*/}
      {/*  background="mint200"*/}
      {/*>*/}
      {/*  <Text variant="h3" marginBottom={3}>*/}
      {/*    <FormattedMessage id="openedTaxCardTitle" />*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCardRow1" />:*/}
      {/*  </Text>*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCardRow2" />:*/}
      {/*  </Text>*/}
      {/*  <Divider />*/}
      {/*  <Text marginY={3}>*/}
      {/*    <FormattedMessage id="openedTaxCardUpdate" /> {lastUpdateDate}*/}
      {/*  </Text>*/}
      {/*  <Button>*/}
      {/*    <FormattedMessage id="openedTaxCardButtonResubmit" />*/}
      {/*  </Button>*/}
      {/*  <Button variant="text">*/}
      {/*    <FormattedMessage id="openedTaxCardButtonExit" />*/}
      {/*  </Button>*/}
      {/*</Box>*/}
    </>
  )
}

export default OpenedTaxReturnPage
