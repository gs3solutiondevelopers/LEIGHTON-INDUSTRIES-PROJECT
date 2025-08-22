import mongoose from "mongoose";
const dealerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
}, { timestamps: true })

export const Dealer = mongoose.model("Dealer", dealerSchema);
