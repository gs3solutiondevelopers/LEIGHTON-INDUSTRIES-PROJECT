import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const testimonials = [
  {
    name: "Raju Mondal",
    location: "Kolkata, WB",
    rating: 4.1,
    comment: "Leighton batteries have doubled my daily earnings. The best performance I've ever seen in an e-rickshaw battery.",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGC85fEeUuCliX-Pw2PTL_Ja-eLqTCpYleA&s"
  },
  {
    name: "Sanjay Kumar",
    location: "Asansol, WB",
    rating: 4.5,
    comment: "Very reliable and long-lasting. I can run my rickshaw for the whole day on a single charge. Highly recommended.",
    profileImage: "https://c8.alamy.com/comp/D3WB3P/south-indian-businessman-driving-the-car-D3WB3P.jpg"
  },
  {
    name: "Anil Das",
    location: "Siliguri, WB",
    rating: 5,
    comment: "The quality is top-notch. I was hesitant at first, but now I'm a loyal customer. Excellent power and durability.",
    profileImage: "https://img.freepik.com/premium-photo/man-driving-vehicle-with-blue-white-shirt_1004054-19325.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    name: "Priya Ghosh",
    location: "Durgapur, WB",
    rating: 5,
    comment: "Finally, a battery that can handle the tough roads here. My mileage has improved significantly. Thank you, Leighton!",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIm9MuytM1rkLHRj29YmvGlV0MnogTo4JUIA&s"
  },
  {
    name: "Amit Sharma",
    location: "Malda, WB",
    rating: 4.5,
    comment: "Good value for money. The performance is consistent and the battery charges faster than my old one.",
    profileImage: "https://media.istockphoto.com/id/182900193/photo/young-cheerful-indian-auto-rickshaw-driver.jpg?s=612x612&w=0&k=20&c=yTqk0VVYNetbEfHTAkWFNWnr1qnfJ1xjhqXGO0Tm4ag="
  }
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full_${i}`} className="text-yellow-400" />);
  }
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  }
  return <div className="flex">{stars}</div>;
};

const Testimonials = () => {
  // Duplicate the array for a seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-brand-dark mb-4">What Our Drivers Say</h2>
        <p className="text-gray-600 mb-16 text-lg">Trusted by thousands of e-rickshaw drivers across the region.</p>
      </div>
      <div className="w-full overflow-hidden relative">
        <div className="flex animate-infinite-scroll">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-80 mx-4 pt-12">
              <div className="bg-gray-50 rounded-lg shadow-lg h-full relative text-center pt-12 pb-6 px-6">
                {/* --- THIS IS THE NEW COLORED BACKGROUND --- */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-lime-500 rounded-t-lg"></div>
                {/* ------------------------------------------- */}
                
                <div className="relative z-10">
                  <div className="w-24 h-24 rounded-full mx-auto -mt-24 mb-4 border-4 border-lime-500 shadow-lg overflow-hidden bg-white">
                    <img 
                      src={testimonial.profileImage} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                  <p className="font-bold text-brand-dark mt-auto">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

