import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Details from './Routes/Details'
import NotFound from './Routes/NotFound'
import Layout from './Routes/Layout'
import { BrowserRouter, Route, Routes } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route index={true} element={<App />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
