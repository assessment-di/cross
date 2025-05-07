import React from 'react'
import { GridContainer, Footer, Box } from '@island.is/island-ui/core'
import Navigation from './components/navigation/navigation'
import Information from './pages/information/information'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard'
import OpenedTaxReturn from './pages/openedTaxReturnPage/openedTaxReturn'
import AppHeader from './components/appHeader/appHeader'
import * as styles from './App.css'
import Page from './components/page/Page'

export function App() {
  return (
    <>
      <Page>
        <GridContainer className={styles.container}>
          <AppHeader />
        </GridContainer>
        <Box padding="containerGutter">
          <Navigation />
          <Box paddingX={[0, 4, 4, 12]} paddingY={[2, 2, 10]}>
            <Routes>
              <Route path="/" element={<Information />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/opened-tax-return" element={<OpenedTaxReturn />} />
            </Routes>
          </Box>
        </Box>
      </Page>
      <Footer />
    </>
  )
}

export default App
