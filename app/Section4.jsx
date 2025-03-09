'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section4 = () => {
  const { scrollYProgress: scrollYProgress4 } = useScroll();
  const y4 = useTransform(scrollYProgress4, [0.75, 1], ['0%', '100%']);

  return (
    <div className='bg-red-200 h-screen w-screen flex text-black'>
      <div className='w-1/2 relative'>
        <motion.div
          className='h-1/2 bg-violet-400 absolute top-0 left-0 right-0'
          style={{ y: y4 }}
        >
          
        </motion.div>
        <div className='h-1/2 bg-yellow-400'></div>
      </div>
      <div className='h-screen bg-white w-1/2'></div>
    </div>
  );
};

export default Section4;