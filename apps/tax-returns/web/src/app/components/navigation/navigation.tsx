import React from 'react'
import { Button } from '@island.is/island-ui/core'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
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
    <>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">
              <Button variant="text" preTextIcon="arrowBack">
                Information
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <Button variant="text" preTextIcon="arrowBack">
                Dashboard
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/opened-tax-return">
              <Button variant="text" preTextIcon="arrowBack">
                Opened Tax Return
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
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
