import React from 'react'
import { GridContainer, Footer } from '@island.is/island-ui/core'
import HeaderGlobal from './components/headerGlobal'
import Navigation from './components/navigation/navigation'
import Information from './pages/information/information'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard'
import OpenedTaxReturn from './pages/openedTaxReturnPage/openedTaxReturn'

export function App() {
  return (
    <>
      <GridContainer>
        <HeaderGlobal />
        <Navigation />

        <Routes>
          <Route
            path="/"
            element={<Information />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/opened-tax-return"
            element={<OpenedTaxReturn />}
          />
        </Routes>

        <Footer />
      </GridContainer>
    </>
  )
}

export default App;
