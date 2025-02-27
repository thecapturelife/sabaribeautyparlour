import React from 'react';
import { GrLocation } from "react-icons/gr";
import { AiOutlinePhone, AiOutlineInstagram, AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className='w-screen bg-slate-800 py-10 flex flex-col items-center px-4'>
      <h1 className='text-3xl sm:text-4xl font-serif font-bold text-yellow-500 hover:text-yellow-400 transition duration-300 text-center'>
        Get in Touch with Me..!
      </h1>
      <p className='text-lg sm:text-xl font-bold text-white text-center mt-5 max-w-2xl'>
        We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, we’re here to help.
      </p>

      <div className='w-full sm:w-[40rem] bg-slate-600 mt-9 p-6 sm:p-8 rounded-lg shadow-lg'>
        {/* Location */}
        <div className='flex items-center space-x-4 text-white mb-4 hover:text-yellow-400 transition duration-300'>
          <GrLocation className='w-6 sm:w-8 h-6 sm:h-8 text-yellow-500 hover:text-yellow-400 transition duration-300' />
          <p className='text-base sm:text-lg font-semibold'>Puthanpurayil complex, Karuvanchal, Kannur 670571</p>
        </div>

        {/* Phone Number */}
        <div className='flex items-center space-x-4 text-white mb-4 hover:text-yellow-400 transition duration-300'>
          <AiOutlinePhone className='w-6 sm:w-8 h-6 sm:h-8 text-yellow-500 hover:text-yellow-400 transition duration-300' />
          <p className='text-base sm:text-lg font-semibold'>+91-7603808075 | +91-7902651591</p>
        </div>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/_sabarii_____/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex items-center space-x-4 text-white mb-4 hover:text-yellow-400 transition duration-300 cursor-pointer'
        >
          <AiOutlineInstagram className='w-6 sm:w-8 h-6 sm:h-8 text-yellow-500 hover:text-yellow-400 transition duration-300' />
          <p className='text-base sm:text-lg font-semibold'>@sabaribeauty parlour</p>
        </a>

        {/* Facebook */}
        <a 
          href="https://www.facebook.com/share/18YnjW7FCc/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex items-center space-x-4 text-white mb-4 hover:text-yellow-400 transition duration-300 cursor-pointer'
        >
          <AiOutlineFacebook className='w-6 sm:w-8 h-6 sm:h-8 text-yellow-500 hover:text-yellow-400 transition duration-300' />
          <p className='text-base sm:text-lg font-semibold'>sabari girivasan</p>
        </a>

        {/* Gmail */}
        <a 
          href="mailto:sabarigirivasan463@gmail.com" 
          className='flex items-center space-x-4 text-white hover:text-yellow-400 transition duration-300 cursor-pointer'
        >
          <AiOutlineMail className='w-6 sm:w-8 h-6 sm:h-8 text-yellow-500 hover:text-yellow-400 transition duration-300' />
          <p className='text-base sm:text-lg font-semibold'>sabarigirivasan463@gmail.com</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
