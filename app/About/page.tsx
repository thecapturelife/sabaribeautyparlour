'use client' 
import Image from 'next/image';
import aboutb from '@/app/assets/about.jpg';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 py-10 px-5 md:px-10">
      {/* Text Section with Left-to-Right Animation */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-600">
        Unveil the Essence of  <br className="hidden lg:block"/> Beauty
        </h1>
        <p className="text-lg md:text-xl font-mono font-semibold mt-5 text-green-50 leading-relaxed">
          Welcome to Sabari Beauty Parlour – Complete Makeover Solutions! <br />
          At Sabari Beauty Parlour, we believe that beauty is all about confidence. <br />
          Step into our world of elegance, where we offer expert styling, skincare, <br />
          and complete makeover solutions tailored just for you. <br />
          Whether it's a simple refresh or a stunning transformation, <br />
          our skilled professionals ensure you leave feeling radiant and beautiful. <br />
          Experience the art of beauty with us – because you deserve the best.
        </p>
      </motion.div>

      {/* Image Section with Right-to-Left Animation */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0"
      >
        <Image
          src={aboutb}
          alt="aboutb"
          priority
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default About;
