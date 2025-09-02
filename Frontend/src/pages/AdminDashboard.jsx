// src/pages/AdminDashboardPage.jsx

import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMessageSquare, FiShield } from "react-icons/fi";
import axios from "axios";
import toast from "react-hot-toast";

// --- Reusable Pagination Component ---
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-md text-sm font-semibold ${
            currentPage === page
              ? "bg-green-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("contacts");

  // State to hold paginated data for each tab
  const [data, setData] = useState({
    contacts: { items: [], currentPage: 1, totalPages: 1 },
    complaints: { items: [], currentPage: 1, totalPages: 1 },
    warranties: { items: [], currentPage: 1, totalPages: 1 },
  });

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // We need to pass the updated start/end dates directly to the fetch function
  const fetchDataForTab = useCallback(
    async (tab, page = 1, start = startDate, end = endDate) => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/admin-login");
        return;
      }
      const config = {
        headers: { Authorization: `Bearer ${token}` },
        params: { page, startDate: start, endDate: end },
      };

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/admin/${tab}`,
          config
        );
        setData((prevData) => ({
          ...prevData,
          [tab]: {
            items: response.data.data,
            currentPage: response.data.currentPage,
            totalPages: response.data.totalPages,
          },
        }));
      } catch (error) {
        console.error(`Failed to fetch ${tab}`, error);
        toast.error(`Could not load ${tab}.`);
      }
    },
    [navigate, startDate, endDate]
  );

  useEffect(() => {
    fetchDataForTab(activeTab, 1);
  }, [activeTab, fetchDataForTab]);

  const handlePageChange = (tab, page) => {
    fetchDataForTab(tab, page);
  };

  const handleFilter = () => {
    fetchDataForTab(activeTab, 1);
  };

  const handleClearFilter = () => {
    setStartDate("");
    setEndDate("");
    // Pass the cleared dates directly to the fetch function
    fetchDataForTab(activeTab, 1, "", "");
  };
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-0">
            Admin Dashboard
          </h1>
          <button
            type="button"
            onClick={handleLogout}
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-md hover:bg-red-600 cursor-pointer transition-colors"
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
            <FiMessageSquare /> <span>Product Feedback</span>
          </button>
          <button
            onClick={() => setActiveTab("warranties")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold ${
              activeTab === "warranties"
                ? "border-b-2 border-green-500 text-green-600"
                : "text-gray-500 hover:text-green-500"
            }`}
          >
            <FiShield /> <span>Product Complaints</span>
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="startDate" className="font-semibold text-gray-700">
              From:
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-2 border rounded-md"
            />
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="endDate" className="font-semibold text-gray-700">
              To:
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-2 border rounded-md"
            />
          </div>
          <button
            onClick={handleFilter}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600"
          >
            Filter
          </button>
          <button
            onClick={handleClearFilter}
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Clear
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
                  <tbody>
                    {data.contacts.items.map((c) => (
                      <tr key={c._id}>
                        <td className="px-4 py-2 border">{c.name}</td>
                        <td className="px-4 py-2 border">{c.email}</td>
                        <td className="px-4 py-2 border">{c.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  currentPage={data.contacts.currentPage}
                  totalPages={data.contacts.totalPages}
                  onPageChange={(page) => handlePageChange("contacts", page)}
                />
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
                  <tbody>
                    {data.complaints.items.map((c) => (
                      <tr key={c._id}>
                        <td className="px-4 py-2 border">{c.name}</td>
                        <td className="px-4 py-2 border">{c.phone}</td>
                        <td className="px-4 py-2 border">{c.productModel}</td>
                        <td className="px-4 py-2 border">{c.complaint}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  currentPage={data.complaints.currentPage}
                  totalPages={data.complaints.totalPages}
                  onPageChange={(page) => handlePageChange("complaints", page)}
                />
              </div>
            </motion.div>
          )}

          {activeTab === "warranties" && (
            <motion.div
              key="warranties"
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
                  <tbody>
                    {data.warranties.items.map((c) => (
                      <tr key={c._id}>
                        <td className="px-4 py-2 border">{c.name}</td>
                        <td className="px-4 py-2 border">{c.phone}</td>
                        <td className="px-4 py-2 border">{c.serialNumber}</td>
                        <td className="px-4 py-2 border">{c.issue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  currentPage={data.warranties.currentPage}
                  totalPages={data.warranties.totalPages}
                  onPageChange={(page) => handlePageChange("warranties", page)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
