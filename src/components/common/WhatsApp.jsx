import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const WhatsApp = () => {
  const number = "9733140877";
  const message = "I am eager to connect with Leighton Industries";

  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </a>
  );
};

export default WhatsApp;
