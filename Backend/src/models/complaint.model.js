import mongoose from 'mongoose'
const complaintSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  productModel: { 
    type: String, 
    required: true 
  },
  complaint: { 
    type: String, 
    required: true 
  },
}, { timestamps: true });

export const Complaint = mongoose.model("Complaint", complaintSchema);