// src/pages/AdminLoginPage.jsx

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios
import Logo2 from "../assets/Logo2.png";
import toast from "react-hot-toast";
const AdminLoginPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Logging in...");
    try {
      // Send login data to the backend API
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/admin/login`, {
        ...data,
        role: 'ADMIN' // Specify the role
      });

      if (response.data.success) {
         toast.success('Login successful!', { id: toastId });
        localStorage.setItem("adminToken", response.data.token);
        navigate("/admin/dashboard");
      }
    } catch (error) {
       toast.error('Login failed. Please check your credentials.', { id: toastId });
      console.error("Admin Login Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <img
          src={Logo2}
          alt="Leighton Industries"
          className="h-16 w-auto mx-auto"
        />
        <h1 className="text-3xl font-bold text-center text-brand-dark">
          Admin Panel Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Enter email"
              required
            />   
            {/* admin@leighton.com */}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Enter Password"
              required
            />

            {/* leighton123 */}
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
