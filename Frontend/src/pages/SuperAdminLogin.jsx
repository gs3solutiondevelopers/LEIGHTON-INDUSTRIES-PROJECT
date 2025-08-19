
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Logo2 from '../assets/Logo2.png';

const SuperAdminLogin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Super Admin Login attempt with:", data);
    localStorage.setItem('superAdminToken', 'dummy-super-secret-token');
    navigate('/super-admin/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <img src={Logo2} alt="Leighton Industries" className="h-16 w-auto mx-auto" />
        <h1 className="text-3xl font-bold text-center text-brand-dark">Super Admin Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              {...register('email')} 
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" 
              defaultValue="superadmin@leighton.com"
              required 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              {...register('password')} 
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" 
              defaultValue="123456"
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-lime-500 text-white font-bold py-3 rounded-md hover:bg-lime-600 transition-colors"
          >
            Login as Super Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuperAdminLogin;
