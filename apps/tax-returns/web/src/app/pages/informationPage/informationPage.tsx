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
          Related material
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            Are you looking for data?
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            Personal history
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            Paternity
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            Education
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            Medical records
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            Child protection data
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            Divorce proceedings
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            Police matters
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginY={1}>
          <Link href="/">
            Judical matters
          </Link>
        </Text>
        <Text color="blue600" variant="medium" marginTop={1}>
          <Link href="/">
            Estate
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

      <Text variant="h3" as="h3" marginY={3}>
        General information
      </Text>
      <Text marginY={2}>
        A tax return can be submitted{' '}
        <Text color="blue400" as="span">
          <Link href="/opened-tax-return">electronically</Link>
        </Text>{' '}
        and by sending messages from a tax return program used by accountants,
        bookkeepers and other persons who are employed in the preparation of tax
        returns.
      </Text>
      <Text variant="h5" marginY={2}>
        The Directorate of Internal Revenue offers electronic submission of four
        types of tax returns, which are:
      </Text>
      <Text marginY={2}>• RSK 1.01 Tax return for individuals</Text>
      <Text marginY={2}>• RSK 1.02 Children's tax return</Text>
      <Text marginY={2}>
        • RSK 1.04 Tax return of business operators (legal entities)
      </Text>
      <Text marginTop={2} marginBottom={3}>
        • RSK 1.06 Tax return of non-taxable legal entities
      </Text>
      <Text marginY={2}>
        All individuals and legal entities subject to tax returns have been
        assigned a master web key and a return key. Those who declare themselves
        are expected to use the master web key, but if they let someone else
        take care of the preparation of the tax return, they hand over the
        return key to him.
      </Text>
      <Text marginY={2}>
        When counting for a married couple, one of the couple's web keys is
        sufficient to open the tax return and submit it. The same applies to a
        couple in a registered cohabitation and people in an unmarried
        cohabitation who are counting together. If they do not count together,
        each must use its own web key.
      </Text>
      <Text marginY={2}>
        If a tax return must be submitted for a child under the age of 16, the
        web key of the child's provider is used. The child's provider is
        considered the person who had the child with him or her at the end of
        the income year, according to the National Registry. On the service
        page, under the tab Returns, there is a special login area to open the
        child's tax return.
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
