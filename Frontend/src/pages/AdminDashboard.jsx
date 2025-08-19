import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMessageSquare } from "react-icons/fi";

const mockContacts = [
  {
    id: 1,
    name: "Afnan",
    email: "afnan@example.com",
    message: "I have a question about battery life.",
  },
  {
    id: 2,
    name: "Ayan kundu",
    email: "ayan@example.com",
    message: "Interested in becoming a dealer.",
  },
];
const mockComplaints = [
  {
    id: 1,
    name: "Giridhari Dutta",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
  {
    id: 2,
    name: "Su Jay",
    phone: "555-5678",
    productModel: "Leighton PowerMax 1600",
    complaint: "The casing was cracked on arrival.",
  },
];
const mockWarranty = [
  {
    id: 1,
    name: "Giridhari Dutta",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
  {
    id: 2,
    name: "Su Jay",
    phone: "555-5678",
    productModel: "Leighton PowerMax 1600",
    complaint: "The casing was cracked on arrival.",
  },
];

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("contacts"); 

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4 sm:mb-0">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("contacts")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold transition-colors duration-300 ${
              activeTab === "contacts"
                ? "border-b-2 border-green-500 text-green-600"
                : "text-gray-500 hover:text-green-500"
            }`}
          >
            <FiMail />
            <span>Contact Messages</span>
          </button>
          <button
            onClick={() => setActiveTab("complaints")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold transition-colors duration-300 ${
              activeTab === "complaints"
                ? "border-b-2 border-green-500 text-green-600"
                : "text-gray-500 hover:text-green-500"
            }`}
          >
            <FiMessageSquare />
            <span>Product Complaints</span>
          </button>

          <button
            onClick={() => setActiveTab("Warranty Claim")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold transition-colors duration-300 ${
              activeTab === "Warranty Claim"
                ? "border-b-2 border-green-500 text-green-600"
                : "text-gray-500 hover:text-green-500"
            }`}
          >
            <FiMessageSquare />
            <span>Warranty Claim</span>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "contacts" && (
            <motion.div
              key="contacts"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm sm:text-base">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 border text-left">Name</th>
                        <th className="px-4 py-2 border text-left">Email</th>
                        <th className="px-4 py-2 border text-left">Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockContacts.map((c) => (
                        <tr key={c.id}>
                          <td className="px-4 py-2 border">{c.name}</td>
                          <td className="px-4 py-2 border">{c.email}</td>
                          <td className="px-4 py-2 border">{c.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "complaints" && (
            <motion.div
              key="complaints"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm sm:text-base">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 border text-left">Name</th>
                        <th className="px-4 py-2 border text-left">Phone</th>
                        <th className="px-4 py-2 border text-left">Model</th>
                        <th className="px-4 py-2 border text-left">
                          Complaint
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockComplaints.map((c) => (
                        <tr key={c.id}>
                          <td className="px-4 py-2 border">{c.name}</td>
                          <td className="px-4 py-2 border">{c.phone}</td>
                          <td className="px-4 py-2 border">{c.productModel}</td>
                          <td className="px-4 py-2 border">{c.complaint}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab == 'Warranty Claim' && (
            <motion.div
              key="complaints"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm sm:text-base">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 border text-left">Name</th>
                        <th className="px-4 py-2 border text-left">Phone</th>
                        <th className="px-4 py-2 border text-left">Model</th>
                        <th className="px-4 py-2 border text-left">
                          Complaint
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockWarranty.map((c) => (
                        <tr key={c.id}>
                          <td className="px-4 py-2 border">{c.name}</td>
                          <td className="px-4 py-2 border">{c.phone}</td>
                          <td className="px-4 py-2 border">{c.productModel}</td>
                          <td className="px-4 py-2 border">{c.complaint}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
