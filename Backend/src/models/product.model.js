import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ['e-rickshaw', 'four-wheelers', 'home-segment', 'commercial-vehicles'],
  },
  specifications: {
    capacity: { type: String },
    warranty: { type: String },
    type: { type: String },
  },
  features: [String],
  heroImage: { type: String, required: true }, 
  galleryImages: [{ type: String }], 
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);