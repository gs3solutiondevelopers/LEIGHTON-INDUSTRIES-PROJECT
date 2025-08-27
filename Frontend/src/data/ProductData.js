// src/data/productData.js

import banner from '../assets/banner.png';
import banner2 from '../assets/banner2.png';


export const batteryData = {
  'e-rickshaw': {
    title: 'E-Rickshaw Batteries',
    description: 'Our specialty. High-performance batteries engineered for the demands of daily e-rickshaw use.',
    bannerImage: banner,
    products: [
      { id: 'leighton-pro-1500', name: 'Leighton Tubular Pro 1500', image: 'https://5.imimg.com/data5/FS/VJ/XU/SELLER-2825475/amaron-automotive-battery-500x500.png', description: 'The workhorse of our lineup, offering a perfect balance of long life and consistent power.' },
      { id: 'leighton-powermax-1600', name: 'Leighton PowerMax 1600', image: 'https://5.imimg.com/data5/CI/VO/MY-44971723/luminous-tubular-battery-500x500.jpg', description: 'Our premium offering with maximum capacity and an extended warranty for heavy-duty usage.' },
    ]
  },
  'four-wheelers': {
    title: 'Four-Wheeler Batteries',
    description: 'Reliable power and long life for all types of passenger cars, from hatchbacks to SUVs.',
    bannerImage: banner2,
    products: [
       { id: 'leighton-car-800', name: 'Leighton AutoDrive 800', image: 'https://5.imimg.com/data5/SELLER/Default/2024/12/471524506/XF/SP/LF/22868266/amaron-four-wheeler-battery-500x500.jpeg', description: 'Consistent and reliable starting power for all weather conditions.' },
    ]
  },
  'home-segment': {
    title: 'Home Segment (Inverters)',
    description: 'Keep your home powered during outages with our long-lasting and efficient inverter batteries.',
    bannerImage: banner,
    products: [
      { id: 'leighton-inverter-2000', name: 'Leighton HomePower 2000', image: 'https://battery4u.in/wp-content/uploads/2019/02/Amaron-42B20L-4.png', description: 'High-capacity tubular battery for extended backup and superior performance.' },
    ]
  },
  'commercial-vehicles': {
    title: 'Commercial Vehicle Batteries',
    description: 'Heavy-duty batteries built to withstand the long journeys and tough conditions of commercial use.',
    bannerImage: banner,
    products: [
      { id: 'leighton-truck-5000', name: 'Leighton HaulMaster 5000', image: 'https://batterymall.in/admin/upload/listing/1685176037AAM-HW-HC620D31R-0-1.jpg', description: 'Maximum durability and high cranking power for trucks and heavy vehicles.' },
    ]
  }
};

export const productDetails = {
    'leighton-pro-1500': {
        capacity: '150 Ah', warranty: '18 Months', type: 'Tubular',
        features: ['High-density paste for longer life', 'Robust design for rough conditions', 'Low maintenance requirements'],
        images: [
            'https://5.imimg.com/data5/SELLER/Default/2022/11/YW/YY/QT/54595945/amaron-e-rickshaw-battery-250x250.jpg',
            'https://5.imimg.com/data5/SELLER/Default/2025/7/524423336/NP/VY/RZ/142657603/amaron-aam-pr-574102069-car-battery.jpg',
            'https://solar-world.in/cdn/shop/files/WhatsAppImage2024-01-29at12.48.26PM-Copy_d466dcc3-69ab-4055-aa55-1467672fa5f7.jpg?v=1707114295&width=1445',
            'https://5.imimg.com/data5/SELLER/Default/2020/8/NY/GV/RH/40857321/two-wheeler-battery-500x500.jpg',
        ]
    },
    'leighton-powermax-1600': {
        capacity: '160 Ah', warranty: '24 Months', type: 'Tubular',
        features: ['Superior charge acceptance', 'Enhanced safety features', 'Maximum power output'],
        images: [
            'https://5.imimg.com/data5/SELLER/Default/2024/4/410499334/CD/WE/PH/30892196/amaron-current-er2500t12-e-rickshaw-battery-500x500.jpg',
            'https://5.imimg.com/data5/SELLER/Default/2025/7/524423336/NP/VY/RZ/142657603/amaron-aam-pr-574102069-car-battery.jpg',
            'https://solar-world.in/cdn/shop/files/WhatsAppImage2024-01-29at12.48.26PM-Copy_d466dcc3-69ab-4055-aa55-1467672fa5f7.jpg?v=1707114295&width=1445',
            'https://5.imimg.com/data5/SELLER/Default/2020/8/NY/GV/RH/40857321/two-wheeler-battery-500x500.jpg',
        ]
    },
    'leighton-car-800': {
        capacity: '80 Ah', warranty: '36 Months', type: 'Maintenance Free',
        features: ['Instant start technology', 'Vibration resistant', 'All-weather performance'],
        images: [
            'https://5.imimg.com/data5/SELLER/Default/2024/12/471524506/XF/SP/LF/22868266/amaron-four-wheeler-battery-500x500.jpeg',
            'https://5.imimg.com/data5/SELLER/Default/2025/7/524423336/NP/VY/RZ/142657603/amaron-aam-pr-574102069-car-battery.jpg',
            'https://solar-world.in/cdn/shop/files/WhatsAppImage2024-01-29at12.48.26PM-Copy_d466dcc3-69ab-4055-aa55-1467672fa5f7.jpg?v=1707114295&width=1445',
            'https://i.ytimg.com/vi/lPp3C4cEpsM/sddefault.jpg',
        ]
    },
    'leighton-inverter-2000': {
        capacity: '200 Ah', warranty: '30 Months', type: 'Tall Tubular',
        features: ['Ideal for long power cuts', 'Minimal water topping required', 'High energy efficiency'],
        images: [
            'https://amaron-prod-images.s3.ap-south-1.amazonaws.com/styles/product_detail_img_450x350/s3/product-topview-image/AAM-HR-NT600H29R-%282%29.jpg?itok=fJlOY0Lp',
            'https://5.imimg.com/data5/SELLER/Default/2025/7/524423336/NP/VY/RZ/142657603/amaron-aam-pr-574102069-car-battery.jpg',
            'https://solar-world.in/cdn/shop/files/WhatsAppImage2024-01-29at12.48.26PM-Copy_d466dcc3-69ab-4055-aa55-1467672fa5f7.jpg?v=1707114295&width=1445',
            'https://rukminim2.flixcart.com/image/704/844/kjn6qvk0-0/vehicle-battery/d/n/m/ap-btz9r-amaron-original-imafz6ysqjvvmcqd.jpeg?q=90&crop=false',
        ]
    },
    'leighton-truck-5000': {
        capacity: '180 Ah', warranty: '18 Months', type: 'Heavy Duty',
        features: ['High cranking power for large engines', 'Reinforced casing for durability', 'Resistant to extreme temperatures'],
        images: [
            'https://5.imimg.com/data5/SELLER/Default/2022/11/EH/BP/OV/24761701/amaron-hi-way-heavy-duty-battery-500x500.jpg',
            'https://c8.alamy.com/comp/2D76B65/car-battery-black-color-isolated-on-white-background-side-view-2D76B65.jpg',
            'https://5.imimg.com/data5/SELLER/Default/2022/12/YW/WD/YX/59325372/61tcymrf39s-sl1328--500x500.jpg',
            'https://www.madrasbattery.com/wp-content/uploads/2020/07/AAM-HW-HC620D31R-3-e1740814100855.jpg',
        ]
    }
};
