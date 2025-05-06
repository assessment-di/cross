import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppWithTranslation from './i18n/appWithTranslation'
import { App } from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <AppWithTranslation>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppWithTranslation>
  </StrictMode>,
)
