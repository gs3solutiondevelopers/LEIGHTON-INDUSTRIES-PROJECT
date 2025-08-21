import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMessageSquare, FiUpload, FiUserPlus } from "react-icons/fi";


// --- MOCK DATA ---
const mockContacts = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "I have a question about battery life.",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "I have a question about battery life.",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "I have a question about battery life.",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "I have a question about battery life.",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "I have a question about battery life.",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "I have a question about battery life.",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "I have a question about battery life.",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "I have a question about battery life.",
  },
];
const mockComplaints = [
  {
    id: 1,
    name: "Jane Smith",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
  {
    id: 1,
    name: "Jane Smith",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
  {
    id: 1,
    name: "Jane Smith",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
  {
    id: 1,
    name: "Jane Smith",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
  {
    id: 1,
    name: "Jane Smith",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
  {
    id: 1,
    name: "Jane Smith",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
  {
    id: 1,
    name: "Jane Smith",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
  {
    id: 1,
    name: "Jane Smith",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
  {
    id: 1,
    name: "Jane Smith",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
  {
    id: 1,
    name: "Jane Smith",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
  {
    id: 1,
    name: "Jane Smith",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
  {
    id: 1,
    name: "Jane Smith",
    phone: "555-1234",
    productModel: "Leighton Pro 1500",
    complaint: "Battery is not holding a charge.",
  },
];
// -----------------

const SuperDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("contacts");

  useEffect(() => {
    const token = localStorage.getItem("superAdminToken");
    if (!token) {
      navigate("/super-admin-login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("superAdminToken");
    navigate("/super-admin-login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4 sm:mb-0">
            Super Admin Dashboard
          </h1>
          <button
            type="button"
            onClick={handleLogout}
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-md hover:bg-red-600 cursor-pointer transition-colors relative z-100"
          >
            Logout
          </button>
        </div>

        <div className="flex flex-wrap border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("contacts")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold ${
              activeTab === "contacts"
                ? "border-b-2 border-lime-500 text-lime-600"
                : "text-gray-500 hover:text-lime-500"
            }`}
          >
            <FiMail /> <span>Contacts</span>
          </button>
          <button
            onClick={() => setActiveTab("complaints")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold ${
              activeTab === "complaints"
                ? "border-b-2 border-lime-500 text-lime-600"
                : "text-gray-500 hover:text-lime-500"
            }`}
          >
            <FiMessageSquare /> <span>Complaints</span>
          </button>
          <button
            onClick={() => setActiveTab("uploadProduct")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold ${
              activeTab === "uploadProduct"
                ? "border-b-2 border-lime-500 text-lime-600"
                : "text-gray-500 hover:text-lime-500"
            }`}
          >
            <FiUpload /> <span>Upload Product</span>
          </button>
          <button
            onClick={() => setActiveTab("addDealer")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold ${
              activeTab === "addDealer"
                ? "border-b-2 border-lime-500 text-lime-600"
                : "text-gray-500 hover:text-lime-500"
            }`}
          >
            <FiUserPlus /> <span>Add Dealer</span>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "contacts" && (
            <motion.div
              key="contacts"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Message</th>
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
            </motion.div>
          )}

          {activeTab === "complaints" && (
            <motion.div
              key="complaints"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Phone</th>
                      <th className="px-4 py-2 border">Model</th>
                      <th className="px-4 py-2 border">Complaint</th>
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
            </motion.div>
          )}

          {activeTab === "uploadProduct" && (
            <motion.div
              key="uploadProduct"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
                <form className="space-y-4">
                  <label>Product Name</label>
                  <input type="text" className="w-full p-2 border rounded" />
                  <label>Description</label>
                  <textarea className="w-full p-2 border rounded"></textarea>
                  <label>Image</label>
                  <input type="file" className="w-full p-2 border rounded" />
                  <button className="w-full bg-lime-500 hover:bg-lime-600 cursor-pointer text-white font-bold py-3 rounded">
                    Upload Product
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {activeTab === "addDealer" && (
            <motion.div
              key="addDealer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Add New Dealer</h2>
                <form className="space-y-4">
                  <label>Dealer Name</label>
                  <input type="text" className="w-full p-2 border rounded" />
                  <label>Address</label>
                  <input type="text" className="w-full p-2 border rounded" />
                  <label>PIN Code</label>
                  <input type="text" className="w-full p-2 border rounded" />
                  <button className="w-full bg-lime-500 hover:bg-lime-600 cursor-pointer text-white font-bold py-3 rounded">
                    Add Dealer
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SuperDashboard;
