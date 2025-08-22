import { Product } from "../models/product.model.js";

// Define the RELATIVE paths to your banner images
const bannerImages = {
    'e-rickshaw': '/images/banner/banner.png',
    'four-wheelers': '/images/banner/banner2.png',
    'home-segment': '/images/banner/banner3.png',
    'commercial-vehicles': '/images/banner/banner4.png',
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        const groupedProducts = {
            'e-rickshaw': {
                title: 'E-Rickshaw Batteries',
                description: 'Our specialty. High-performance batteries engineered for daily e-rickshaw use.',
                bannerImage: bannerImages['e-rickshaw'],
                products: products.filter(p => p.category === 'e-rickshaw'),
            },
            'four-wheelers': {
                title: 'Four-Wheeler Batteries',
                description: 'Reliable power and long life for all types of passenger cars.',
                bannerImage: bannerImages['four-wheelers'],
                products: products.filter(p => p.category === 'four-wheelers'),
            },
            'home-segment': {
                title: 'Home Segment (Inverters)',
                description: 'Keep your home powered during outages with our efficient inverter batteries.',
                bannerImage: bannerImages['home-segment'],
                products: products.filter(p => p.category === 'home-segment'),
            },
            'commercial-vehicles': {
                title: 'Commercial Vehicle Batteries',
                description: 'Heavy-duty batteries built to withstand long journeys and tough conditions.',
                bannerImage: bannerImages['commercial-vehicles'],
                products: products.filter(p => p.category === 'commercial-vehicles'),
            },
        };

        res.status(200).json({ success: true, data: groupedProducts });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch products." });
    }
};

export { getAllProducts };
