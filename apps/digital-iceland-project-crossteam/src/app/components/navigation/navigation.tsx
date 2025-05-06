import React from 'react'
import { Button } from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'

function Navigation() {
  // const { formatMessage } = useIntl()

  // const breadcrumbItems = [
  //   {
  //     title: 'Ísland.is',
  //     // href: linkResolver('homepage', [], locale).href,
  //   },
  //   {
  //     title: formatMessage({ id: 'financeTitle' }),
  //     // href: baseUrl,
  //     isTag: true,
  //   },
  // ]

  return (
    <Button variant="text" preTextIcon="arrowBack">
      <FormattedMessage id="financeTitle" />
    </Button>
  )
    // {/*<ArrowLink href="/">*/}
    // {/*  <FormattedMessage id="login" />*/}
    // {/*</ArrowLink>*/}
    //
    // {/*<Breadcrumbs*/}
    // {/*  items={breadcrumbItems ?? []}*/}
    // {/*  renderLink={(link, item) => {*/}
    // {/*    // return item?.href ? (*/}
    // {/*    //   <NextLink href={item?.href} legacyBehavior>*/}
    // {/*    //     {link}*/}
    // {/*    //   </NextLink>*/}
    // {/*    // ) : (*/}
    // {/*    return link*/}
    // {/*    // )*/}
    // {/*  }}*/}
    // {/*/>*/}
}

export default Navigation;
