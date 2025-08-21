import mongoose from 'mongoose';

const warrantySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  serialNumber: { 
    type: String, 
    required: true, 
    unique: true 
  },
  purchaseDate: { 
    type: Date, 
    required: true 
  },
  issue: { 
    type: String, 
    required: true 
  },
}, { timestamps: true });

export const Warranty = mongoose.model("Warranty", warrantySchema);