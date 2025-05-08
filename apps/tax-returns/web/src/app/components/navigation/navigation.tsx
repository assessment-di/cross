import React from 'react'
import { Breadcrumbs } from '@island.is/island-ui/core'
import { useIntl } from 'react-intl'
import { useLocation } from 'react-router-dom'

const getRouteTitleId = (route: string): string => {
  switch (route) {
    case '/opened-tax-return':
      return 'openedTaxCardTitle'
    default:
      return 'dashboardTitle'
  }
}

const Navigation: React.FC = () => {
  const { formatMessage } = useIntl()

  const { pathname } = useLocation()

  const isRoot = pathname === '/'

  const breadcrumbItems = [
    {
      title: 'Ísland.is',
    },
    {
      title: formatMessage({ id: 'financeTitle' }),
    },
    {
      title: formatMessage({ id: 'informationTitle' }),
      href: isRoot ? undefined : '/dashboard',
    },
  ]
  if (!isRoot) {
    breadcrumbItems.push({
      title: formatMessage({ id: getRouteTitleId(pathname) }),
    })
  }

  return <Breadcrumbs items={breadcrumbItems} />
}

export default Navigation
