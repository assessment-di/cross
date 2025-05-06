import React, { useContext } from 'react'
import {
  Text,
  Box,
  Input,
  Button,
  Divider,
} from '@island.is/island-ui/core'
import { FormattedMessage, useIntl } from 'react-intl'
import { LocaleContext } from '../../../i18n/LocaleContext'

function OpenedTaxReturn() {
  const { formatMessage } = useIntl()
  const { locale } = useContext(LocaleContext)

  const prevYear = new Date().getFullYear() - 1;
  const lastUpdateDate = new Date().toLocaleString(locale, { timeZone: "UTC" });

  return (
    <>
      <Text variant="h1" as="h1">
        <FormattedMessage id="openedTaxTitle" /> {prevYear}
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        borderColor="mint200"
        borderRadius="large"
        borderWidth="standard"
        paddingX={[3, 3, 4]}
        paddingY={3}
        marginX={[3, 3, 4]}
        marginY={3}
        background="mint200"
      >
        <Text variant="h3" marginBottom={3}>
          <FormattedMessage id="openedTaxCardTitle" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCardRow1" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCardRow2" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCardUpdate" /> {lastUpdateDate}
        </Text>
        <Button>
          <FormattedMessage id="openedTaxCardButtonSubmit" />
        </Button>
        <Button variant="text">
          <FormattedMessage id="openedTaxCardButtonCancel" />
        </Button>
      </Box>

      <Text variant="h1" as="h1">
        <FormattedMessage id="openedTaxTitle2" /> {prevYear}
      </Text>

      <Box
        display="flex"
        flexDirection="column"
        borderColor={'blue200'}
        borderRadius="large"
        borderWidth="standard"
        paddingX={[3, 3, 4]}
        paddingY={3}
        marginX={[3, 3, 4]}
        marginY={3}
      >
        <Text variant="h3" marginBottom={3}>
          <FormattedMessage id="openedTaxCard2Title" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard2Row1" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard2Row2" />:
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        borderColor={'blue200'}
        borderRadius="large"
        borderWidth="standard"
        paddingX={[3, 3, 4]}
        paddingY={3}
        marginX={[3, 3, 4]}
        marginY={3}
      >
        <Text variant="h3" marginBottom={3}>
          <FormattedMessage id="openedTaxCard3Title" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard3Row1" />:
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        borderColor={'blue200'}
        borderRadius="large"
        borderWidth="standard"
        paddingX={[3, 3, 4]}
        paddingY={3}
        marginX={[3, 3, 4]}
        marginY={3}
      >
        <Text variant="h3" marginBottom={3}>
          <FormattedMessage id="openedTaxCard4Title" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard4Row1" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard4Row11" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard4Row2" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard4Row22" />:
        </Text>
      </Box>

      <Button variant="ghost" icon="add">
        <FormattedMessage id="openedTaxAddRevenue" />
      </Button>

      <Text variant="h1" as="h1">
        <FormattedMessage id="openedTaxTitle3" />
      </Text>

      <Box
        display="flex"
        flexDirection="column"
        borderColor={'blue200'}
        borderRadius="large"
        borderWidth="standard"
        paddingX={[3, 3, 4]}
        paddingY={3}
        marginX={[3, 3, 4]}
        marginY={3}
      >
        <Text variant="h3" marginBottom={3}>
          <FormattedMessage id="openedTaxCard5Title" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard5Row1" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard5Row2" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard5Row3" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard5Row4" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard5Row5" />:
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        borderColor={'blue200'}
        borderRadius="large"
        borderWidth="standard"
        paddingX={[3, 3, 4]}
        paddingY={3}
        marginX={[3, 3, 4]}
        marginY={3}
      >
        <Text variant="h3" marginBottom={3}>
          <FormattedMessage id="openedTaxCard6Title" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard6Row1" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard6Row2" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard6Row3" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard6Row4" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard6Row5" />:
        </Text>
        <Divider />
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard6Row11" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard6Row22" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard6Row33" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard6Row44" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard6Row55" />:
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          borderColor="mint200"
          borderRadius="large"
          borderWidth="standard"
          paddingX={[3, 3, 4]}
          paddingY={3}
          marginX={[3, 3, 4]}
          marginY={3}
          background="mint200"
        >
          <Input
            name="operatingLicenseSearchInput"
            placeholder={formatMessage({ id: 'openedTaxCard6InputPlaceholder' })}
            backgroundColor={['blue', 'blue', 'white']}
            size="sm"
            // icon={{ name: 'search', type: 'outline' }}
            // onChange={(event) => onSearch(event.target.value)}
          />
          <Button variant="ghost">
            <FormattedMessage id="openedTaxCard6ButtonCancel" />
          </Button>
          <Button>
            <FormattedMessage id="openedTaxCard6ButtonSubmit" />
          </Button>
        </Box>
      </Box>

      <Button variant="ghost" icon="add">
        <FormattedMessage id="openedTaxAddRevenue" />
      </Button>

      <Text variant="h1" as="h1">
        <FormattedMessage id="openedTaxTitle4" />
      </Text>

      <Box
        display="flex"
        flexDirection="column"
        borderColor={'blue200'}
        borderRadius="large"
        borderWidth="standard"
        paddingX={[3, 3, 4]}
        paddingY={3}
        marginX={[3, 3, 4]}
        marginY={3}
      >
        <Text variant="h3" marginBottom={3}>
          <FormattedMessage id="openedTaxCard7Title" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row1" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row2" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row3" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row4" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row5" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row6" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row7" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row8" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row9" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row10" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row11" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row12" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row13" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row14" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row15" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard7Row16" />:
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          borderColor="red200"
          borderRadius="large"
          borderWidth="standard"
          paddingX={[3, 3, 4]}
          paddingY={3}
          marginX={[3, 3, 4]}
          marginY={3}
          background="red200"
        >
          <Text marginY={3}>
            <FormattedMessage id="openedTaxCard7Placeholder" />
          </Text>
          <Button variant="ghost">
            <FormattedMessage id="openedTaxCard7ButtonCancel" />
          </Button>
          <Button>
            <FormattedMessage id="openedTaxCard7ButtonDelete" />
          </Button>
        </Box>
      </Box>

      <Button variant="ghost" icon="add">
        <FormattedMessage id="openedTaxAddRevenue" />
      </Button>

      <Box
        display="flex"
        flexDirection="column"
        borderColor={'blue200'}
        borderRadius="large"
        borderWidth="standard"
        paddingX={[3, 3, 4]}
        paddingY={3}
        marginX={[3, 3, 4]}
        marginY={3}
      >
        <Text variant="h3" marginBottom={3}>
          <FormattedMessage id="openedTaxCard8Title" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row1" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row2" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row3" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row4" />:
        </Text>

        <Divider />
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row11" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row3" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard6Row4" />:
        </Text>

        <Divider />
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row22" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row3" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row4" />:
        </Text>

        <Divider />
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row33" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row3" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row4" />:
        </Text>

        <Divider />
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row44" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row3" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row4" />:
        </Text>

        <Divider />
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row55" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row3" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCard8Row4" />:
        </Text>
      </Box>

      <Button variant="ghost" icon="add">
        <FormattedMessage id="openedTaxAddRevenue" />
      </Button>


      <Box
        display="flex"
        flexDirection="column"
        borderColor="mint200"
        borderRadius="large"
        borderWidth="standard"
        paddingX={[3, 3, 4]}
        paddingY={3}
        marginX={[3, 3, 4]}
        marginY={3}
        background="mint200"
      >
        <Text variant="h3" marginBottom={3}>
          <FormattedMessage id="openedTaxCardTitle" />
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCardRow1" />:
        </Text>
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCardRow2" />:
        </Text>
        <Divider />
        <Text marginY={3}>
          <FormattedMessage id="openedTaxCardUpdate" /> {lastUpdateDate}
        </Text>
        <Button>
          <FormattedMessage id="openedTaxCardButtonResubmit" />
        </Button>
        <Button variant="text">
          <FormattedMessage id="openedTaxCardButtonExit" />
        </Button>
      </Box>
    </>
  )
}

export default OpenedTaxReturn
