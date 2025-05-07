import React from 'react'
import {
  Text,
  Button,
  Icon,
} from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'
import TaxReturnCard from '../../components/taxReturnCard/taxReturnCard'
import { useTaxReturnData } from '../../hooks/useTaxReturnData'
import RevenueCard from '../../components/revenueCard/revenueCard'
import RealEstateCard from '../../components/realEstateCard/realEstateCard'
import CarsCard from '../../components/carsCard/carsCard'
import LoanCard from '../../components/loanCard/loanCard'
import OtherDebtsCard from '../../components/otherDebtsCard/otherDebtsCard'

function OpenedTaxReturn() {
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

      <Text variant="h1" as="h1" marginBottom={3}>
        <Icon icon="wallet" type="outline" color="blue400" />{' '}
        <FormattedMessage id="openedTaxTitle2" />
      </Text>

      {revenues.map((revenue) => (
        <RevenueCard key={revenue.id} {...revenue} />
      ))}
      <Button variant="ghost" icon="add">
        <FormattedMessage id="openedTaxAddRevenue" />
      </Button>

      <Text variant="h1" as="h1" marginY={3}>
        <Icon icon="home" type="outline" color="blue400" />{' '}
        <FormattedMessage id="openedTaxTitle3" />
      </Text>

      {assets.realEstate.map((realEstate) => (
        <RealEstateCard key={realEstate.id} {...realEstate} />
      ))}

      {assets.cars ? <CarsCard cars={assets.cars} /> : null}

      <Button variant="ghost" icon="add">
        <FormattedMessage id="openedTaxAddRevenue" />
      </Button>

      <Text variant="h1" as="h1" marginY={3}>
        <Icon icon="receipt" type="outline" color="blue400" />{' '}
        <FormattedMessage id="openedTaxTitle4" />
      </Text>

      {debts.loan ? <LoanCard {...debts.loan} /> : null}

      <Button variant="ghost" icon="add">
        <FormattedMessage id="openedTaxAddRevenue" />
      </Button>

      {debts.otherDebts ? (
        <OtherDebtsCard otherDebts={debts.otherDebts} {...debts.loan} />
      ) : null}

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

export default OpenedTaxReturn
