import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log(
  '%c☕ + 🐾 = this portfolio',
  'color:#8183f4; font-family:monospace; font-size:14px; font-weight:600;'
)
console.log(
  '%cbuilt by Fran, powered by coffee, supervised by a cat.',
  'color:#71717a; font-family:monospace; font-size:12px;'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
