import React from 'react'
import { Header } from '@island.is/island-ui/core'
import HeaderItems from './headerItems'

const AppHeader: React.FC = () => {
  return <Header headerItems={<HeaderItems />} />
}

export default AppHeader
