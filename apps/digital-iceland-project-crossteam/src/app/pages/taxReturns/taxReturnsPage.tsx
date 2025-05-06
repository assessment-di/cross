import React from 'react'
import { Text, ActionCard, Box, Input, Button } from '@island.is/island-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'

function TaxReturnsPage() {
  const { formatMessage } = useIntl()

  return (
    <>
      <Text variant="h1" as="h1">
        <FormattedMessage id="taxReturnsTitle" />
      </Text>
      <ActionCard
        heading={formatMessage({ id: 'taxReturnsCardTitle' })}
        cta={{
          size: 'small',
          label: formatMessage({ id: 'taxReturnsCardButton' }),
        }}
      />
      <Text variant="intro" as="p" marginY={2}>
        <FormattedMessage id="taxReturnsBodyText1" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        <FormattedMessage id="taxReturnsBodyText2" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="taxReturnsBodyPoint1" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="taxReturnsBodyPoint2" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="taxReturnsBodyPoint3" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="taxReturnsBodyPoint4" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        <FormattedMessage id="taxReturnsBodyText3" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        <FormattedMessage id="taxReturnsBodyText4" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="taxReturnsBodyPoint5" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="taxReturnsBodyPoint6" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="taxReturnsBodyPoint7" />
      </Text>

      <Box
        display="flex"
        flexDirection="column"
        borderColor={'blue100'}
        borderRadius="large"
        borderWidth="standard"
        paddingX={[3, 3, 4]}
        paddingY={3}
        marginX={[3, 3, 4]}
        marginY={3}
        background={'blue100'}
      >
        <Text variant="h3" color="blue600" marginBottom={3}>
          <FormattedMessage id="taxReturnsFormTitle" />
        </Text>

        <Box marginBottom={3}>
          <Input
            textarea
            name="operatingLicenseSearchInput"
            placeholder={formatMessage({ id: 'taxReturnsFormInput1' })}
            backgroundColor={['blue', 'blue', 'white']}
            size="sm"
            // icon={{ name: 'search', type: 'outline' }}
            // onChange={(event) => onSearch(event.target.value)}
          />
        </Box>
        <Box marginBottom={3}>
          <Input
            textarea
            name="operatingLicenseSearchInput"
            placeholder={formatMessage({ id: 'taxReturnsFormInput2' })}
            backgroundColor={['blue', 'blue', 'white']}
            size="sm"
            // icon={{ name: 'search', type: 'outline' }}
            // onChange={(event) => onSearch(event.target.value)}
          />
        </Box>
        <Box marginBottom={3}>
          <Input
            textarea
            name="operatingLicenseSearchInput"
            placeholder={formatMessage({ id: 'taxReturnsFormInput3' })}
            backgroundColor={['blue', 'blue', 'white']}
            size="sm"
            // icon={{ name: 'search', type: 'outline' }}
            // onChange={(event) => onSearch(event.target.value)}
          />
        </Box>
        <Box marginBottom={3}>
          <Input
            textarea
            name="operatingLicenseSearchInput"
            placeholder={formatMessage({ id: 'taxReturnsFormInput4' })}
            backgroundColor={['blue', 'blue', 'white']}
            size="sm"
            // icon={{ name: 'search', type: 'outline' }}
            // onChange={(event) => onSearch(event.target.value)}
          />
        </Box>
        <Box marginBottom={3}>
          <Input
            textarea
            name="operatingLicenseSearchInput"
            placeholder={formatMessage({ id: 'taxReturnsFormInput5' })}
            backgroundColor={['blue', 'blue', 'white']}
            size="sm"
            // icon={{ name: 'search', type: 'outline' }}
            // onChange={(event) => onSearch(event.target.value)}
          />
        </Box>
        <Box marginBottom={3}>
          <Input
            textarea
            name="operatingLicenseSearchInput"
            placeholder={formatMessage({ id: 'taxReturnsFormInput6' })}
            backgroundColor={['blue', 'blue', 'white']}
            size="sm"
            // icon={{ name: 'search', type: 'outline' }}
            // onChange={(event) => onSearch(event.target.value)}
          />
        </Box>
        <Box marginBottom={3}>
          <Input
            textarea
            name="operatingLicenseSearchInput"
            placeholder={formatMessage({ id: 'taxReturnsFormInput7' })}
            backgroundColor={['blue', 'blue', 'white']}
            size="sm"
            // icon={{ name: 'search', type: 'outline' }}
            // onChange={(event) => onSearch(event.target.value)}
          />
        </Box>
        <Box marginBottom={3}>
          <Input
            textarea
            name="operatingLicenseSearchInput"
            placeholder={formatMessage({ id: 'taxReturnsFormInput8' })}
            backgroundColor={['blue', 'blue', 'white']}
            size="sm"
            // icon={{ name: 'search', type: 'outline' }}
            // onChange={(event) => onSearch(event.target.value)}
          />
        </Box>
        <Box marginBottom={3}>
          <Button>
            <FormattedMessage id="taxReturnsFormSubmit" />
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default TaxReturnsPage
