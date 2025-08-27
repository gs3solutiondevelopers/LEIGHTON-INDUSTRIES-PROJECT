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
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found." });
    }

    // Construct the image array for the slider
    const productDataWithSlider = {
      ...product.toObject(),
      sliderImages: [
        product.imagePath, // Main image (Front View)
        'https://placehold.co/600x400/e2e8f0/4a5568?text=Side+View',
        'https://placehold.co/600x400/e2e8f0/4a5568?text=Back+View',
        'https://placehold.co/600x400/e2e8f0/4a5568?text=Top+View',
      ]
    };
    
    res.status(200).json({ success: true, data: productDataWithSlider });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch product details." });
  }
};

export { getAllProducts,getProductById };
