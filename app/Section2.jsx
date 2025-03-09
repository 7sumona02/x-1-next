'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section2 = () => {
  const { scrollYProgress: scrollYProgress2 } = useScroll();
  const y2 = useTransform(scrollYProgress2, [0.20, 0.40], ['0%', '100%']);

  return (
    <div className='bg-white h-screen w-screen flex text-black'>
      <div className='w-1/2 relative'>
      <motion.div
          className='h-1/2 bg-violet-400 absolute top-0 left-0 right-0 flex justify-center items-center z-10'
          style={{ y: y2 }}
        >
          <div className='text-6xl font-bold text-white opacity-50'>Tuesday</div>
        </motion.div>
        <div className='h-1/2 bg-violet-500 absolute bottom-0 left-0 right-0'></div>
      </div>
      <div className='h-screen bg-white w-1/2'></div>
    </div>
  );
};

export default Section2;