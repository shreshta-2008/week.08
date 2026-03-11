import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HouseProvider } from './HouseContext' // Import the provider
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HouseProvider>
      <App />
    </HouseProvider>
  </StrictMode>,
)