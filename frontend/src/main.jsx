import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Features from './pages/Features.jsx'
import RequestDemo from './pages/RequestDemo.jsx'
import ContactSales from './pages/ContactSales.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<Features />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/contact-sales" element={<ContactSales />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
