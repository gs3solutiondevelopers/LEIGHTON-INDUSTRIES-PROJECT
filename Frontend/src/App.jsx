import React from 'react'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'
import WhatsApp from './components/common/WhatsApp'
import CookieBanner from './components/common/CookieBanner'
import WarrantyPage from './pages/WarrantyPage'
const App = () => {
  return (
     <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
   
            <Route path="/batteries" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />

          {/* supprt routes */}
            <Route path='support/warranty' element={<WarrantyPage/>}/>
          </Routes>
        </main>
        <Footer />
        <WhatsApp />
        <CookieBanner/>
      </div>
    </Router>
  )
}

export default App
