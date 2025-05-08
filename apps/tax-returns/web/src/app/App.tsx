import React from 'react'
import { GridContainer, Footer, Box } from '@island.is/island-ui/core'
import Navigation from './components/navigation/navigation'
import InformationPage from './pages/informationPage/informationPage'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/dashboardPage/dashboardPage'
import OpenedTaxReturnPage from './pages/openedTaxReturnPage/openedTaxReturnPage'
import AppHeader from './components/appHeader/appHeader'
import * as styles from './App.css'
import Page from './components/page/Page'
import AuthProvider from './Auth'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Page>
        <GridContainer className={styles.container}>
          <AppHeader />
        </GridContainer>
        <Box padding="containerGutter">
          <Navigation />
          <Box paddingX={[0, 4, 4, 12]} paddingY={[2, 2, 10]}>
            <Routes>
              <Route path="/" element={<InformationPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route
                path="/opened-tax-return"
                element={<OpenedTaxReturnPage />}
              />
            </Routes>
          </Box>
        </Box>
      </Page>
      <Footer />
    </AuthProvider>
  )
}

export default App
