// src/pages/SuperAdminDashboardPage.jsx

import React, { useState, useEffect, useCallback } from "react";
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
  FiPackage,
  FiEdit3,
  FiDelete
} from "react-icons/fi";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import EditModal from "../components/admin/EditModal";
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
              ? "bg-lime-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

const SuperAdminDashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("contacts");

  const [data, setData] = useState({
    contacts: { items: [], currentPage: 1, totalPages: 1 },
    complaints: { items: [], currentPage: 1, totalPages: 1 },
    warranties: { items: [], currentPage: 1, totalPages: 1 },
    dealers: { items: [], currentPage: 1, totalPages: 1 },
    products: { items: [], currentPage: 1, totalPages: 1 },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editingType, setEditingType] = useState(""); // 'product' or 'dealer'

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

  const fetchDataForTab = useCallback(
    async (tabKey, page = 1) => {
      const token = localStorage.getItem("superAdminToken");
      if (!token) {
        navigate("/super-admin-login");
        return;
      }
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const endpointMap = {
        contacts: "contacts",
        complaints: "complaints",
        warranties: "warranties",
        viewDealers: "dealers",
        viewProducts: "products",
      };
      const endpoint = endpointMap[tabKey];
      if (!endpoint) return;

      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/api/v1/admin/${endpoint}?page=${page}`,
          config
        );
        setData((prevData) => ({
          ...prevData,
          [endpoint]: {
            items: response.data.data,
            currentPage: response.data.currentPage,
            totalPages: response.data.totalPages,
          },
        }));
      } catch (error) {
        console.error(`Failed to fetch ${endpoint}`, error);
        toast.error(`Could not load ${endpoint}.`);
      }
    },
    [navigate]
  );

  useEffect(() => {
    fetchDataForTab(activeTab);
  }, [activeTab, fetchDataForTab]);

  const handlePageChange = (tabKey, page) => {
    fetchDataForTab(tabKey, page);
  };

  const handleLogout = () => {
    localStorage.removeItem("superAdminToken");
    navigate("/super-admin-login");
  };

  const handleDeleteDealer = (dealerId) => {
    toast(
      (t) => (
        <div className="flex flex-col items-center p-4">
          <p className="font-semibold mb-3">
            Are you sure you want to delete this dealer?
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md font-bold hover:bg-red-600"
              onClick={() => {
                toast.dismiss(t.id);
                confirmDelete(dealerId);
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
        duration: 6000,
      }
    );
  };

  const confirmDelete = async (dealerId) => {
    const toastId = toast.loading("Deleting dealer...");
    try {
      const token = localStorage.getItem("superAdminToken");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/super-admin/dealers/${dealerId}`,
        config
      );
      fetchDataForTab("viewDealers", data.dealers.currentPage);
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
    formData.append("heroImage", data.heroImage[0]);
    for (let i = 0; i < data.galleryImages.length; i++) {
      formData.append("galleryImages", data.galleryImages[i]);
    }

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

  const handleDeleteProduct = async (productId) => {
    toast(
      (t) => (
        <div className="flex flex-col items-center p-4">
          <p className="font-semibold mb-3">
            Are you sure you want to delete this product?
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md font-bold hover:bg-red-600"
              onClick={() => {
                toast.dismiss(t.id);
                confirmDeleteProduct(productId);
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
      { duration: 6000 }
    );
  };

  const confirmDeleteProduct = async (productId) => {
    const toastId = toast.loading("Deleting product...");
    try {
      const token = localStorage.getItem("superAdminToken");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/super-admin/products/${productId}`,
        config
      );
      fetchDataForTab("viewProducts", data.products.currentPage);
      toast.success("Product deleted successfully!", { id: toastId });
    } catch (error) {
      toast.error("Failed to delete product.", { id: toastId });
      console.error("Delete product error:", error);
    }
  };

  const openEditModal = (item, type) => {
    setEditingItem(item);
    setEditingType(type);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setEditingType("");
  };

  const handleSave = async (id, updatedData) => {
    const isProduct = editingType === "product";
    const endpoint = isProduct
      ? `/api/v1/super-admin/products/${id}`
      : `/api/v1/super-admin/dealers/${id}`;
    const toastId = toast.loading(`Updating ${editingType}...`);

    try {
      const token = localStorage.getItem("superAdminToken");
      let config = { headers: { Authorization: `Bearer ${token}` } };
      let payload = updatedData;

      if (isProduct) {
        const formData = new FormData();
        Object.keys(updatedData).forEach((key) => {
          if (key === "heroImage" || key === "galleryImages") {
            if (updatedData[key] && updatedData[key].length > 0) {
              for (let i = 0; i < updatedData[key].length; i++) {
                formData.append(key, updatedData[key][i]);
              }
            }
          } else {
            formData.append(key, updatedData[key]);
          }
        });
        payload = formData;
        config.headers["Content-Type"] = "multipart/form-data";
      }

      await axios.put(
        `${import.meta.env.VITE_API_URL}${endpoint}`,
        payload,
        config
      );

      toast.success(`${editingType} updated successfully!`, { id: toastId });
      closeEditModal();
      // Refetch data for the current tab to show updates
      fetchDataForTab(
        activeTab,
        data[isProduct ? "products" : "dealers"].currentPage
      );
    } catch (error) {
      toast.error(`Failed to update ${editingType}.`, { id: toastId });
      console.error(`Update ${editingType} error:`, error);
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
            onClick={() => setActiveTab("viewProducts")}
            className={`flex items-center space-x-2 py-3 px-6 text-lg font-semibold ${
              activeTab === "viewProducts"
                ? "border-b-2 border-lime-500 text-lime-600"
                : "text-gray-500 hover:text-lime-500"
            }`}
          >
            <FiPackage /> <span>View Products</span>
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
          {/* Contacts Tab */}
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

          {/* Complaints Tab */}
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

          {/* Warranties Tab */}
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
                      <th className="px-4 py-2 border">Serial #</th>
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

          {/* View Dealers Tab */}
          {activeTab === "viewDealers" && (
            <motion.div
              key="viewDealers"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
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
                    {data.dealers.items.map((d) => (
                      <tr key={d._id}>
                        <td className="px-4 py-2 border">{d.name}</td>
                        <td className="px-4 py-2 border">{d.address}</td>
                        <td className="px-4 py-2 border">{d.pinCode}</td>
                        <td className="px-4 py-2 border text-center space-x-2">
                          <button
                            onClick={() => openEditModal(d, "dealer")}
                            className="bg-lime-500 text-white px-3 py-1 rounded hover:bg-lime-600"
                          >
                            <FiEdit3 size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteDealer(d._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                             <FiDelete size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  currentPage={data.dealers.currentPage}
                  totalPages={data.dealers.totalPages}
                  onPageChange={(page) => handlePageChange("viewDealers", page)}
                />
              </div>
            </motion.div>
          )}

          {/* View Products Tab */}
          {activeTab === "viewProducts" && (
            <motion.div
              key="viewProducts"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Category</th>
                      <th className="px-4 py-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.products.items.map((p) => (
                      <tr key={p._id}>
                        <td className="px-4 py-2 border">{p.name}</td>
                        <td className="px-4 py-2 border">{p.category}</td>
                        <td className="px-4 py-2 border text-center space-x-2">
                          <button
                            onClick={() => openEditModal(p, "product")}
                            className="bg-lime-500 text-white px-3 py-1 rounded hover:bg-lime-600"
                          >
                            <FiEdit3 size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(p._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                             <FiDelete size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  currentPage={data.products.currentPage}
                  totalPages={data.products.totalPages}
                  onPageChange={(page) =>
                    handlePageChange("viewProducts", page)
                  }
                />
              </div>
            </motion.div>
          )}

          {/* Upload Product and Add Dealer Forms */}
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
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Product Name
                    </label>
                    <input
                      type="text"
                      {...registerProduct("name")}
                      className="mt-1 w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      {...registerProduct("category")}
                      className="mt-1 w-full p-2 border rounded-md bg-white"
                    >
                      <option value="e-rickshaw">E-Rickshaw</option>
                      <option value="four-wheelers">Four Wheelers</option>
                      <option value="home-segment">Home Segment</option>
                      <option value="commercial-vehicles">
                        Commercial Vehicles
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      {...registerProduct("description")}
                      className="mt-1 w-full p-2 border rounded-md"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Specifications
                    </label>
                    <div className="grid grid-cols-3 gap-4 mt-1">
                      <input
                        type="text"
                        {...registerProduct("capacity")}
                        placeholder="e.g., 150 Ah"
                        className="w-full p-2 border rounded-md"
                      />
                      <input
                        type="text"
                        {...registerProduct("warranty")}
                        placeholder="e.g., 18 Months"
                        className="w-full p-2 border rounded-md"
                      />
                      <input
                        type="text"
                        {...registerProduct("type")}
                        placeholder="e.g., Tubular"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Features (comma-separated)
                    </label>
                    <input
                      type="text"
                      {...registerProduct("features")}
                      className="mt-1 w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Hero Image (Main View)
                    </label>
                    <input
                      type="file"
                      {...registerProduct("heroImage")}
                      className="mt-1 w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Gallery Images (Side, Top, Back - up to 3)
                    </label>
                    <input
                      type="file"
                      {...registerProduct("galleryImages")}
                      className="mt-1 w-full p-2 border rounded-md"
                      multiple
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-lime-500 text-white font-bold py-3 rounded-md hover:bg-lime-600"
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Dealer Name
                    </label>
                    <input
                      type="text"
                      {...registerDealer("name")}
                      className="mt-1 w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      {...registerDealer("address")}
                      className="mt-1 w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      {...registerDealer("pinCode")}
                      className="mt-1 w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Contact No.
                    </label>
                    <input
                      type="text"
                      {...registerDealer("contactNo")}
                      className="mt-1 w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Location (Lat, Lng)
                    </label>
                    <div className="grid grid-cols-2 gap-4 mt-1">
                      <input
                        type="text"
                        {...registerDealer("lat")}
                        placeholder="Latitude"
                        className="w-full p-2 border rounded-md"
                      />
                      <input
                        type="text"
                        {...registerDealer("lng")}
                        placeholder="Longitude"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-lime-500 text-white font-bold py-3 rounded-md hover:bg-lime-600"
                  >
                    Add Dealer
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <EditModal
            item={editingItem}
            type={editingType}
            onClose={closeEditModal}
            onSave={handleSave}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SuperAdminDashboardPage;
