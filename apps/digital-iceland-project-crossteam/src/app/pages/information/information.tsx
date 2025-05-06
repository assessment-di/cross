import React from 'react'
import { Text, ActionCard, Box, Input, Button } from '@island.is/island-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'

function Information() {
  const { formatMessage } = useIntl()

  return (
    <>
      <Text variant="h1" as="h1">
        <FormattedMessage id="informationTitle" />
      </Text>
      <ActionCard
        heading={formatMessage({ id: 'informationCardTitle' })}
        cta={{
          size: 'small',
          label: formatMessage({ id: 'informationCardButton' }),
        }}
      />
      <Text variant="intro" as="p" marginY={2}>
        <FormattedMessage id="informationBodyText1" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        <FormattedMessage id="informationBodyText2" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="informationBodyPoint1" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="informationBodyPoint2" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="informationBodyPoint3" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="informationBodyPoint4" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        <FormattedMessage id="informationBodyText3" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        <FormattedMessage id="informationBodyText4" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="informationBodyPoint5" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="informationBodyPoint6" />
      </Text>
      <Text variant="intro" as="p" marginY={2}>
        • <FormattedMessage id="informationBodyPoint7" />
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
          <FormattedMessage id="informationFormTitle" />
        </Text>

        <Box marginBottom={3}>
          <Input
            textarea
            name="operatingLicenseSearchInput"
            placeholder={formatMessage({ id: 'informationFormInput1' })}
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
            placeholder={formatMessage({ id: 'informationFormInput2' })}
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
            placeholder={formatMessage({ id: 'informationFormInput3' })}
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
            placeholder={formatMessage({ id: 'informationFormInput4' })}
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
            placeholder={formatMessage({ id: 'informationFormInput5' })}
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
            placeholder={formatMessage({ id: 'informationFormInput6' })}
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
            placeholder={formatMessage({ id: 'informationFormInput7' })}
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
            placeholder={formatMessage({ id: 'informationFormInput8' })}
            backgroundColor={['blue', 'blue', 'white']}
            size="sm"
            // icon={{ name: 'search', type: 'outline' }}
            // onChange={(event) => onSearch(event.target.value)}
          />
        </Box>
        <Box marginBottom={3}>
          <Button>
            <FormattedMessage id="informationFormSubmit" />
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Information
