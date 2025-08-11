
import React from 'react';
import { useForm } from 'react-hook-form';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const position = [24.1377, 88.2224]; 

  return (
    <div className="bg-gray-50">
      <div className="relative h-96">
        <img 
          src="https://t4.ftcdn.net/jpg/05/24/03/99/360_F_524039911_SJfffOLKTk1HZvTPyF9vv1FN6oCipyVi.jpg" 
          alt="Contact us background" 
          className="absolute inset-0 w-full h-full object-contain z-0"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-black/20 text-white text-center p-4">
          <h1 className="text-5xl font-bold">Get In Touch</h1>
          <p className="text-lg mt-4">We'd love to hear from you. Please fill out the form below.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-brand-dark mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FiMapPin className="h-6 w-6 text-green-500" />
                  <span>near sanko, Dafarpur, West Bengal 742187</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FiPhone className="h-6 w-6 text-green-500" />
                  <span>+91 097322 64264</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FiMail className="h-6 w-6 text-green-500" />
                  <span>contact@leightonindustries.com</span>
                </div>
              </div>
            </div>
            
            <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg z-0">
              <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    Leighton Industries HQ
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-brand-dark mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    {...register("name", { required: "Full name is required." })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    {...register("email", { 
                      required: "Email is required.",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email address." }
                    })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows="5"
                    {...register("message", { required: "Message cannot be empty." })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <div>
                  <button 
                    type="submit"
                    className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
