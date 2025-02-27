import React from 'react';
import { FaCut, FaUserTie, FaTint, FaHeadphones } from 'react-icons/fa';

const Pricelist = () => {
  const services = [
    { icon: <FaCut />, name: "Hair Cut", price: "₹80" },
    { icon: <FaUserTie />, name: "Beard Shaping", price: "₹60" },
    { icon: <FaHeadphones />, name: "Head Massage with Oil", price: "₹100" },
    { icon: <FaTint />, name: "Hair Coloring (Golden - Normal)", price: "₹200" },
    { icon: <FaTint />, name: "Hair Coloring (Golden - Medium)", price: "₹350" },
    { icon: <FaTint />, name: "Hair Coloring (Golden - Full)", price: "₹700" },
    { icon: <FaTint />, name: "Hair Coloring (White - Normal)", price: "₹350" },
    { icon: <FaTint />, name: "Hair Coloring (White - Medium)", price: "₹500" },
    { icon: <FaTint />, name: "Hair Coloring (White - Full)", price: "₹850" },
    { icon: <FaTint />, name: "Black Dye Hair", price: "₹300" },
    { icon: <FaUserTie />, name: "Beard Dye", price: "₹130" },
    { name: "Hair Straightening (Half)", price: "₹300" },
    { name: "Hair Straightening (Full)", price: "₹600" },
    { name: "Facewash (Normal)", price: "₹100" },
    { name: "Face Scrub", price: "₹200" },
    { name: "Steam/Scrub", price: "₹350" },
  ];

  const facials = [
    { name: "Face Mask Charcoal (Milky)", price: "₹150" },
    { name: "Bleach (King)", price: "₹400" },
    { name: "Bleach (Normal)", price: "₹300" },
    { name: "Papaya Facial", price: "₹750" },
    { name: "Gold Facial", price: "₹850" },
    { name: "Diamond Facial", price: "₹950" },
  ];

  const weddingCombo = [
    { name: "Facewash + Facial + Steaming + Hair & Beard Grooming", price: "₹1350" },
  ];

  return (
    <div className="w-screen bg-gray-900 py-12 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold text-yellow-500">Our Price List</h1>
      <p className="text-lg text-gray-300 mt-3">Affordable and professional grooming services.</p>

      <div className="mt-8 px-8 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Services */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Grooming Services</h2>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center bg-gray-800 p-4 my-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className="text-yellow-500 text-3xl">{service.icon}</div>
                <h2 className="text-lg font-semibold">{service.name}</h2>
              </div>
              <p className="text-yellow-400 text-lg font-bold">{service.price}</p>
            </div>
          ))}
        </div>

        {/* Facials */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Facial Treatments</h2>
          {facials.map((facial, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center bg-gray-800 p-4 my-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
            >
              <h2 className="text-lg font-semibold">{facial.name}</h2>
              <p className="text-yellow-400 text-lg font-bold">{facial.price}</p>
            </div>
          ))}
        </div>

        {/* Wedding Combo */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Wedding Special Combo</h2>
          {weddingCombo.map((combo, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center bg-gray-800 p-4 my-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
            >
              <h2 className="text-lg font-semibold">{combo.name}</h2>
              <p className="text-yellow-400 text-lg font-bold">{combo.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricelist;
