import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'
import Home from './Home.jsx'
import App from './App.jsx'
import Setup from './Setup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/overlay' element={<App />} />
        <Route path='/setup' element={<Setup />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)