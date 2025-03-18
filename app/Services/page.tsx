import React from 'react';
import { FaCut, FaUserTie, FaSpa, FaTint, FaHeadphones, FaHandSparkles } from 'react-icons/fa';

const Services = () => {
  const services = [
    { icon: <FaCut />, name: "Haircut & Styling", desc: "Trendy cuts and styling to match your look." },
    { icon: <FaUserTie />, name: "Beard Trim & Shaping", desc: "Sharp trims and perfect beard styling." },
    { icon: <FaSpa />, name: "Facial & Skincare", desc: "Relaxing facials for a refreshed look." },
    { icon: <FaTint />, name: "Hair Coloring", desc: "Professional hair dyeing and highlights." },
    { icon: <FaHeadphones />, name: "Head Massage", desc: "Relieve stress with a soothing head massage." },
    { icon: <FaHandSparkles />, name: "Shaving & Grooming", desc: "Smooth shaves with premium products." }
  ];

  return (
    <div className="relative w-screen h-auto py-12 flex flex-col items-center">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted
      >
        <source src="/v2video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to Enhance Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Services Content */}
      <div className="relative z-10 text-white flex flex-col items-center px-8">
        <h1 className="text-4xl font-bold text-yellow-500">Our Services</h1>
        <p className="text-lg text-gray-300 mt-3 text-center">
          Professional grooming services to keep you looking sharp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800/80 p-6 rounded-lg shadow-lg flex flex-col items-center text-center 
            transform transition duration-300 hover:scale-105 hover:bg-gray-700/80">
              <div className="text-yellow-500 text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold">{service.name}</h2>
              <p className="text-gray-300 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;


// 'use client'
// import React, { useState } from "react";
// import {
//   FaCut,
//   FaUserTie,
//   FaSpa,
//   FaTint,
//   FaHeadphones,
//   FaHandSparkles,
// } from "react-icons/fa";

// const Services = () => {
//   const [showServices, setShowServices] = useState(false);

//   const services = [
//     { icon: <FaCut />, name: "Haircut & Styling", desc: "Trendy cuts and styling to match your look." },
//     { icon: <FaUserTie />, name: "Beard Trim & Shaping", desc: "Sharp trims and perfect beard styling." },
//     { icon: <FaSpa />, name: "Facial & Skincare", desc: "Relaxing facials for a refreshed look." },
//     { icon: <FaTint />, name: "Hair Coloring", desc: "Professional hair dyeing and highlights." },
//     { icon: <FaHeadphones />, name: "Head Massage", desc: "Relieve stress with a soothing head massage." },
//     { icon: <FaHandSparkles />, name: "Shaving & Grooming", desc: "Smooth shaves with premium products." }
//   ];

//   return (
//     <div className="relative w-screen h-screen flex flex-col items-center justify-center">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//       >
//         <source src="/girl.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay for Readability */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Toggle Button */}
//       <button
//         className="absolute top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-lg shadow-lg transition duration-300 hover:bg-yellow-600 z-10"
//         onClick={() => setShowServices(!showServices)}
//       >
//         {showServices ? "Hide Services" : "Show Services"}
//       </button>

//       {/* Services Section (Only Visible When showServices is true) */}
//       {showServices && (
//         <div className="relative z-10 text-white flex flex-col items-center px-8 mt-16">
//           <h1 className="text-4xl font-bold text-yellow-500">Our Services</h1>
//           <p className="text-lg text-gray-300 mt-3 text-center">
//             Professional grooming services to keep you looking sharp.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800/80 p-6 rounded-lg shadow-lg flex flex-col items-center text-center
//                 transform transition duration-500 hover:scale-105 hover:bg-gray-700/80 opacity-0 animate-fade-in"
//               >
//                 <div className="text-yellow-500 text-5xl mb-4">{service.icon}</div>
//                 <h2 className="text-2xl font-semibold">{service.name}</h2>
//                 <p className="text-gray-300 mt-2">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Services;
