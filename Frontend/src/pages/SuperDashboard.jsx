// src/pages/SuperAdminDashboardPage.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiMessageSquare,
  FiUpload,
  FiUserPlus,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const SuperAdminDashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("contacts");

  const [contacts, setContacts] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [warranties, setWarranties] = useState([]);
  const [dealers, setDealers] = useState([]);

  const {
    register: registerProduct,
    handleSubmit: handleSubmitProduct,
    reset: resetProduct,
  } = useForm();
  const {
    register: registerDealer,
    handleSubmit: handleSubmitDealer,
    reset: resetDealer,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("superAdminToken");
      if (!token) {
        navigate("/super-admin-login");
        return;
      }

      const config = { headers: { Authorization: `Bearer ${token}` } };

      try {
        const [contactsRes, complaintsRes, warrantiesRes, dealersRes] =
          await Promise.all([
            axios.get(
              `${import.meta.env.VITE_API_URL}/api/v1/admin/contacts`,
              config
            ),
            axios.get(
              `${import.meta.env.VITE_API_URL}/api/v1/admin/complaints`,
              config
            ),
            axios.get(
              `${import.meta.env.VITE_API_URL}/api/v1/admin/warranties`,
              config
            ),
            axios.get(
              `${import.meta.env.VITE_API_URL}/api/v1/admin/dealers`,
              config
            ),
          ]);

        setContacts(contactsRes.data);
        setComplaints(complaintsRes.data);
        setWarranties(warrantiesRes.data);
        setDealers(dealersRes.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
        localStorage.removeItem("superAdminToken");
        navigate("/super-admin-login");
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("superAdminToken");
    navigate("/super-admin-login");
  };

    const handleDeleteDealer = (dealerId) => {
    toast(
      (t) => (
        <div className="flex flex-col items-center p-4">
          <p className="font-semibold mb-3">Are you sure you want to delete this dealer?</p>
          <div className="flex space-x-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md font-bold hover:bg-red-600"
              onClick={() => {
                toast.dismiss(t.id);
                confirmDelete(dealerId); // Call the delete function on confirm
              }}
            >
              Delete
            </button>
            <button
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: 6000, // The toast will stay longer to allow for a decision
      }
    );
  };

  // This new helper function contains the actual deletion logic
  const confirmDelete = async (dealerId) => {
    const toastId = toast.loading("Deleting dealer...");
    try {
      const token = localStorage.getItem("superAdminToken");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/v1/super-admin/dealers/${dealerId}`,
        config
      );
      // Use functional update to correctly remove the dealer from state
      setDealers((prevDealers) => prevDealers.filter((d) => d._id !== dealerId));
      toast.success("Dealer deleted successfully!", { id: toastId });
    } catch (error) {
      toast.error("Failed to delete dealer.", { id: toastId });
      console.error("Delete dealer error:", error);
    }
  };

  const onProductSubmit = async (data) => {
    const toastId = toast.loading("Uploading product...");
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append(
      "specifications",
      JSON.stringify({
        capacity: data.capacity,
        warranty: data.warranty,
        type: data.type,
      })
    );
    formData.append(
      "features",
      JSON.stringify(data.features.split(",").map((f) => f.trim()))
    );
    formData.append("image", data.image[0]);

    try {
      const token = localStorage.getItem("superAdminToken");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/super-admin/products/add`,
        formData,
        config
      );
      toast.success("Product uploaded successfully!", { id: toastId });
      resetProduct();
    } catch (error) {
      toast.error("Failed to upload product.", { id: toastId });
      console.error("Product upload error:", error);
    }
  };

  const onDealerSubmit = async (data) => {
    const toastId = toast.loading("Adding dealer...");
    const dealerData = {
      ...data,
      location: { lat: parseFloat(data.lat), lng: parseFloat(data.lng) },
    };
    try {
      const token = localStorage.getItem("superAdminToken");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/super-admin/dealers/add`,
        dealerData,
        config
      );
      toast.success("Dealer added successfully!", { id: toastId });
      resetDealer();
    } catch (error) {
      toast.error("Failed to add dealer.", { id: toastId });
      console.error("Add dealer error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4 sm:mb-0">
            Super Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Tab Navigation */}
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
            onClick={() => setActiveTab("warranties")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold ${
              activeTab === "warranties"
                ? "border-b-2 border-lime-500 text-lime-600"
                : "text-gray-500 hover:text-lime-500"
            }`}
          >
            <FiShield /> <span>Warranties</span>
          </button>
          <button
            onClick={() => setActiveTab("viewDealers")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold ${
              activeTab === "viewDealers"
                ? "border-b-2 border-lime-500 text-lime-600"
                : "text-gray-500 hover:text-lime-500"
            }`}
          >
            <FiUsers /> <span>View Dealers</span>
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

        {/* Tab Content */}
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
                    {contacts.map((c) => (
                      <tr key={c._id}>
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
                    {complaints.map((c) => (
                      <tr key={c._id}>
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
          {activeTab === "warranties" && (
            <motion.div
              key="warranties"
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
                      <th className="px-4 py-2 border">Serial #</th>
                      <th className="px-4 py-2 border">Issue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {warranties.map((c) => (
                      <tr key={c._id}>
                        <td className="px-4 py-2 border">{c.name}</td>
                        <td className="px-4 py-2 border">{c.phone}</td>
                        <td className="px-4 py-2 border">{c.serialNumber}</td>
                        <td className="px-4 py-2 border">{c.issue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* View Dealers Tab */}
          {activeTab === "viewDealers" && (
            <motion.div
              key="viewDealers"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Address</th>
                      <th className="px-4 py-2 border">PIN Code</th>
                      <th className="px-4 py-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dealers.map((d) => (
                      <tr key={d._id}>
                        <td className="px-4 py-2 border">{d.name}</td>
                        <td className="px-4 py-2 border">{d.address}</td>
                        <td className="px-4 py-2 border">{d.pinCode}</td>
                        <td className="px-4 py-2 border text-center">
                          <button
                            onClick={() => handleDeleteDealer(d._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
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
                <form
                  onSubmit={handleSubmitProduct(onProductSubmit)}
                  className="space-y-4"
                >
                  <label>Product Name</label>
                  <input
                    type="text"
                    {...registerProduct("name")}
                    className="w-full p-2 border rounded"
                  />
                  <label>Category</label>
                  <select
                    {...registerProduct("category")}
                    className="w-full p-2 border rounded bg-white"
                  >
                    <option value="e-rickshaw">E-Rickshaw</option>
                    <option value="four-wheelers">Four Wheelers</option>
                    <option value="home-segment">Home Segment</option>
                    <option value="commercial-vehicles">
                      Commercial Vehicles
                    </option>
                  </select>
                  <label>Description</label>
                  <textarea
                    {...registerProduct("description")}
                    className="w-full p-2 border rounded"
                  ></textarea>
                  <label>Specifications (Capacity, Warranty, Type)</label>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      {...registerProduct("capacity")}
                      placeholder="e.g., 150 Ah"
                      className="w-full p-2 border rounded"
                    />
                    <input
                      type="text"
                      {...registerProduct("warranty")}
                      placeholder="e.g., 18 Months"
                      className="w-full p-2 border rounded"
                    />
                    <input
                      type="text"
                      {...registerProduct("type")}
                      placeholder="e.g., Tubular"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <label>Features (comma-separated)</label>
                  <input
                    type="text"
                    {...registerProduct("features")}
                    className="w-full p-2 border rounded"
                  />
                  <label>Image</label>
                  <input
                    type="file"
                    {...registerProduct("image")}
                    className="w-full p-2 border rounded"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-3 rounded"
                  >
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
                <form
                  onSubmit={handleSubmitDealer(onDealerSubmit)}
                  className="space-y-4"
                >
                  <label>Dealer Name</label>
                  <input
                    type="text"
                    {...registerDealer("name")}
                    className="w-full p-2 border rounded"
                  />
                  <label>Address</label>
                  <input
                    type="text"
                    {...registerDealer("address")}
                    className="w-full p-2 border rounded"
                  />
                  <label>PIN Code</label>
                  <input
                    type="text"
                    {...registerDealer("pinCode")}
                    className="w-full p-2 border rounded"
                  />
                  <label>Contact No.</label>
                  <input
                    type="text"
                    {...registerDealer("contactNo")}
                    className="w-full p-2 border rounded"
                  />
                  <label>Location (Lat, Lng)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      {...registerDealer("lat")}
                      placeholder="Latitude"
                      className="w-full p-2 border rounded"
                    />
                    <input
                      type="text"
                      {...registerDealer("lng")}
                      placeholder="Longitude"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-3 rounded"
                  >
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

export default SuperAdminDashboardPage;
