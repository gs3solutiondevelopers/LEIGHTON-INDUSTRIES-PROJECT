import React from "react";
import { useForm } from "react-hook-form";
import complaint from "../assets/complaint.png";

const Complaint = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(
      "Your complaint has been submitted. Our team will review it and get in touch."
    );
  };

  return (
    <div className="bg-gray-50">
      <div className="relative h-113">
        <img
          src={complaint}
          alt="Filing a complaint"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-black/60 text-white text-center p-4">
          <h1 className="text-5xl font-bold">Product Complaint</h1>
          <p className="text-lg mt-4">
            We are sorry for the inconvenience. Please describe the issue below.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-brand-dark mb-6">
            Complaint Form
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Full name is required." })}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required.",
                  })}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="productModel"
                className="block text-sm font-medium text-gray-700"
              >
                Product Model / Serial Number
              </label>
              <input
                type="text"
                id="productModel"
                {...register("productModel", {
                  required: "Product model is required.",
                })}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="e.g., Leighton Tubular Pro 1500"
              />
              {errors.productModel && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.productModel.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="complaint"
                className="block text-sm font-medium text-gray-700"
              >
                Describe Your Complaint
              </label>
              <textarea
                id="complaint"
                rows="5"
                {...register("complaint", {
                  required: "Please describe your complaint.",
                })}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              ></textarea>
              {errors.complaint && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.complaint.message}
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Submit Complaint
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
