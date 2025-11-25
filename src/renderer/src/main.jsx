//import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Appl from './Appl'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Appl />
    </BrowserRouter>
  </StrictMode>
)
