import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import WhatsApp from "./components/common/WhatsApp";
import CookieBanner from "./components/common/CookieBanner";
import WarrantyPage from "./pages/WarrantyPage";
import SupportPage from "./pages/Support";
import Complaint from "./pages/Complaint";
import Dealer from "./pages/Dealer";
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
            <Route path="/support" element={<SupportPage />} />
            {/* supprt routes */}
            <Route path="support/warranty" element={<WarrantyPage />} />
            <Route path="support/complaint" element={<Complaint />} />
            <Route path="support/dealer" element={<Dealer />} />
          </Routes>
        </main>
        <Footer />
        <WhatsApp />
        <CookieBanner />
      </div>
    </Router>
  );
};

export default App;
