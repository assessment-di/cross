import React from 'react'
import { Text, Link, Box, Button } from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'
import { useLoginMethods } from '../../UserContext'
import * as styles from './informationPage.css'

const InformationPage: React.FC = () => {
  const { login } = useLoginMethods()

  return (
    <div className={styles.container}>
      <Box
        borderColor="blue200"
        background="white"
        padding={4}
        className={styles.relatedInfo}
      >
        <Text variant="h4" marginBottom={3}>
          <FormattedMessage id="informationSideTitle" />
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            Are you looking for data?
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            <FormattedMessage id="informationSidePoint1" />
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            <FormattedMessage id="informationSidePoint2" />
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            <FormattedMessage id="informationSidePoint3" />
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            <FormattedMessage id="informationSidePoint4" />
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            <FormattedMessage id="informationSidePoint5" />
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            <FormattedMessage id="informationSidePoint6" />
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            <FormattedMessage id="informationSidePoint7" />
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            <FormattedMessage id="informationSidePoint8" />
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginTop={1}>
          <Link href="/">
            <FormattedMessage id="informationSidePoint9" />
          </Link>
        </Text>
      </Box>

      <Text variant="h1" as="h1" marginBottom={3}>
        <FormattedMessage id="informationTitle" />
      </Text>

      <Box
        className={styles.box}
        borderColor="blue200"
        borderRadius="large"
        borderWidth="standard"
        paddingX={[3, 3, 4]}
        paddingY={3}
        marginY={3}
        background="white"
      >
          <Text variant="h3">
            <FormattedMessage id="informationCardTitle" />
          </Text>
          <Button fluid size="medium" icon="arrowForward" onClick={async () => login()}>
            <FormattedMessage id="informationCardButton" />
          </Button>
      </Box>

      <Text marginY={2}>
        <FormattedMessage id="informationBody1" />
      </Text>
      <Text variant="h5" marginY={2}>
        <FormattedMessage id="informationBody2" />
      </Text>
      <Text marginY={2}>• <FormattedMessage id="informationBody2Point1" /></Text>
      <Text marginY={2}>• <FormattedMessage id="informationBody2Point2" /></Text>
      <Text marginY={2}>• <FormattedMessage id="informationBody2Point3" /></Text>
      <Text marginTop={2} marginBottom={3}>• <FormattedMessage id="informationBody2Point4" /></Text>
      <Text marginY={2}>
        <FormattedMessage id="informationBody3" />
      </Text>
      <Text marginY={2}>
        <FormattedMessage id="informationBody4" />
      </Text>
      <Text marginY={2}>
        <FormattedMessage id="informationBody5" />
      </Text>
      <Text marginTop={2} marginBottom={3}>
        Tax returns submitted on paper have mostly been submitted to the
        National Archives for preservation. The main exceptions are:
      </Text>
      <Text marginY={2}>
        • Tax returns from Reykjavík up to 1981 are archived in the Reykjavík City Archives.
      </Text>
      <Text marginY={2}>
        • Tax returns from the South after 1960.
      </Text>
      <Text marginY={2}>
        • Tax returns from the West Fjords after 1984.
      </Text>

      <Text variant="h5" marginY={2}>
        Included in electronic submissions
      </Text>
      <Text marginY={2}>
        Some forms are "included" in electronic submission of income sheets,
        although they do not appear there as independent entities.
      </Text>
      <Text marginY={2}>
        • RSK 1.05 Wage return is built into a coordination sheet (4.05) for individuals and is
        part of the business entity's tax return (1.04). It is also part of the
        tax return of non-taxable legal entities (1.06).
      </Text>
      <Text marginY={2}>
        • RSK 1.07 Statement of
        capital income is part of the tax return of non-taxable legal entities
        (1.06). It is not used by other tax returners.
      </Text>
      <Text marginY={2}>
        • RSK 1.09 Tax return for
        equipment fee. The basis for the agricultural levy is stated on the
        agricultural report that accompanies the tax return in electronic
        submissions, both for legal entities (4.07) and individuals (4.08).
      </Text>
      <Text marginTop={2} marginBottom={3}>
        • RSK 1.11 Tax return for equalisation charge for universal service. The basis
        for the countervailing charge for universal service is stated on the
        front page of the legal entity's tax return (1.04) in electronic
        submissions.
      </Text>
      <Text marginY={2}>
        All these forms exist on paper for those who do not submit
        their tax return electronically. As of the 2016 tax year, it is assumed
        that tax returns are generally submitted electronically. These older
        paper forms will therefore not be available skatturinn.is after that
        time.

      </Text>
      <Text variant="h5" marginY={2}>
        Not available online
      </Text>
      <Text marginY={2}>
        Some forms are "included" in electronic
        submission of income sheets, although they do not appear there as
        independent entities.
      </Text>
      <Text marginY={2}>
        <Text as="span" fontWeight="semiBold">RSK 1.03 The tax return of the estate of a
          deceased person </Text> – used if a tax return needs to be submitted for the
        estate of a deceased person in the second year after the death or later.
      </Text>
      <Text marginY={2}>
        <Text as="span" fontWeight="semiBold">RSK 1.02 Child tax return</Text> – for special taxation of a child who has
        lost
        a parent and has not been adopted.
      </Text>
      <Text marginY={2}>
        <Text as="span" fontWeight="semiBold">RSK 1.12 Inheritance report</Text> – It can
        be downloaded in pdf format at skatturinn.is, but the report is
        submitted to the District Commissioner.
      </Text>
    </div>
  )
}

export default InformationPage
