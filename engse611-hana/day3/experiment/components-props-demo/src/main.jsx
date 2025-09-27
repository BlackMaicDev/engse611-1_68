import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/demo.css'
import './styles/components.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
