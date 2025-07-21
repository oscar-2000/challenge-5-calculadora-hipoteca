import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/index.css'
import App from '@components/App.jsx'
import DatosProvider from '@context/DatosProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DatosProvider>
      <App />
    </DatosProvider>
  </StrictMode>,
)
