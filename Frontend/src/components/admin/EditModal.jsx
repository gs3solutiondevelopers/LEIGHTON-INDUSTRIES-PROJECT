import React from 'react';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const EditModal = ({ item, type, onClose, onSave }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: type === 'product' ? {
      ...item,
      capacity: item.specifications?.capacity,
      warranty: item.specifications?.warranty,
      type: item.specifications?.type,
      features: item.features?.join(', '),
    } : item,
  });

  const onSubmit = (data) => {
    onSave(item._id, data);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Edit {type === 'product' ? 'Product' : 'Dealer'}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800"><FiX size={24} /></button>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {type === 'product' ? (
              <>
                <div><label>Product Name</label><input type="text" {...register("name")} className="w-full p-2 border rounded-md" /></div>
                <div><label>Category</label>
                  <select {...register("category")} className="w-full p-2 border rounded-md bg-white">
                    <option value="e-rickshaw">E-Rickshaw</option>
                    <option value="four-wheelers">Four Wheelers</option>
                    <option value="home-segment">Home Segment</option>
                    <option value="commercial-vehicles">Commercial Vehicles</option>
                  </select>
                </div>
                <div><label>Description</label><textarea {...register("description")} className="w-full p-2 border rounded-md"></textarea></div>
                <div><label>Specifications</label>
                  <div className="grid grid-cols-3 gap-4 mt-1">
                    <input type="text" {...register("capacity")} placeholder="Capacity" className="w-full p-2 border rounded-md" />
                    <input type="text" {...register("warranty")} placeholder="Warranty" className="w-full p-2 border rounded-md" />
                    <input type="text" {...register("type")} placeholder="Type" className="w-full p-2 border rounded-md" />
                  </div>
                </div>
                <div><label>Features (comma-separated)</label><input type="text" {...register("features")} className="w-full p-2 border rounded-md" /></div>
                <div><label>New Hero Image (Optional)</label><input type="file" {...register("heroImage")} className="w-full p-2 border rounded-md" /></div>
                <div><label>New Gallery Images (Optional)</label><input type="file" {...register("galleryImages")} className="w-full p-2 border rounded-md" multiple /></div>
              </>
            ) : (
              <>
                <div><label>Dealer Name</label><input type="text" {...register("name")} className="w-full p-2 border rounded-md" /></div>
                <div><label>Address</label><input type="text" {...register("address")} className="w-full p-2 border rounded-md" /></div>
                <div><label>PIN Code</label><input type="text" {...register("pinCode")} className="w-full p-2 border rounded-md" /></div>
                <div><label>Contact No.</label><input type="text" {...register("contactNo")} className="w-full p-2 border rounded-md" /></div>
                <div><label>Location (Lat, Lng)</label>
                  <div className="grid grid-cols-2 gap-4 mt-1">
                    <input type="text" {...register("lat")} placeholder="Latitude" className="w-full p-2 border rounded-md" />
                    <input type="text" {...register("lng")} placeholder="Longitude" className="w-full p-2 border rounded-md" />
                  </div>
                </div>
              </>
            )}
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600">Save Changes</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default EditModal;
