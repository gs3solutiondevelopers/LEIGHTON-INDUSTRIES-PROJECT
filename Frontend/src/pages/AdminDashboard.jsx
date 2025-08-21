
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMessageSquare, FiShield } from "react-icons/fi";
import axios from "axios";




const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("contacts");

  const [contacts, setContacts] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [warranties, setWarranties] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/admin-login");
        return;
      }
      
      // Prepare the authorization header
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      try {
        // Fetch all data from the secure endpoints
        const [contactsRes, complaintsRes, warrantiesRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/api/v1/admin/contacts`, config),
          axios.get(`${import.meta.env.VITE_API_URL}/api/v1/admin/complaints`, config),
          axios.get(`${import.meta.env.VITE_API_URL}/api/v1/admin/warranties`, config)
        ]);
        
        setContacts(contactsRes.data);
        setComplaints(complaintsRes.data);
        setWarranties(warrantiesRes.data);

      } catch (error) {
        console.error("Failed to fetch admin data:", error);
        // If token is invalid, log the user out
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    console.log("Logout clicked!");
    localStorage.removeItem("adminToken");
    navigate("/admin-login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 relative">
          <h1 className="text-3xl sm:text-4xl font-bold  mb-4 sm:mb-0">
            Admin Dashboard
          </h1>
          <button
            type="button"
            onClick={handleLogout}
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-md hover:bg-red-600 cursor-pointer transition-colors relative z-100"
          >
            Logout
          </button>
        </div>

        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("contacts")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold ${
              activeTab === "contacts"
                ? "border-b-2 border-green-500 text-green-600"
                : "text-gray-500 hover:text-green-500"
            }`}
          >
            <FiMail /> <span>Contact Messages</span>
          </button>
          <button
            onClick={() => setActiveTab("complaints")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold ${
              activeTab === "complaints"
                ? "border-b-2 border-green-500 text-green-600"
                : "text-gray-500 hover:text-green-500"
            }`}
          >
            <FiMessageSquare /> <span>Product Complaints</span>
          </button>
          <button
            onClick={() => setActiveTab("warranty")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold ${
              activeTab === "warranty"
                ? "border-b-2 border-green-500 text-green-600"
                : "text-gray-500 hover:text-green-500"
            }`}
          >
            <FiShield /> <span>Warranty Claims</span>
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
              <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Message</th>
                    </tr>
                  </thead>
                  <tbody>{contacts.map((c) => (<tr key={c._id}><td className="px-4 py-2 border">{c.name}</td><td className="px-4 py-2 border">{c.email}</td><td className="px-4 py-2 border">{c.message}</td></tr>))}</tbody>
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
              <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Phone</th>
                      <th className="px-4 py-2 border">Model</th>
                      <th className="px-4 py-2 border">Complaint</th>
                    </tr>
                  </thead>
                  <tbody>{complaints.map((c) => (<tr key={c._id}><td className="px-4 py-2 border">{c.name}</td><td className="px-4 py-2 border">{c.phone}</td><td className="px-4 py-2 border">{c.productModel}</td><td className="px-4 py-2 border">{c.complaint}</td></tr>))}</tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === "warranty" && (
            <motion.div
              key="warranty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Phone</th>
                      <th className="px-4 py-2 border">Serial Number</th>
                      <th className="px-4 py-2 border">Issue</th>
                    </tr>
                  </thead>
                  <tbody>{warranties.map((c) => (<tr key={c._id}><td className="px-4 py-2 border">{c.name}</td><td className="px-4 py-2 border">{c.phone}</td><td className="px-4 py-2 border">{c.serialNumber}</td><td className="px-4 py-2 border">{c.issue}</td></tr>))}</tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
