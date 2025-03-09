'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section1 = () => {
  const { scrollYProgress: scrollYProgress1 } = useScroll();
  const y1 = useTransform(scrollYProgress1, [0, 0.4], ['0%', '100%']);

  return (
    <div className='bg-red-200 h-screen w-screen flex text-black'>
      <div className='h-screen bg-black w-1/2'>hello</div>
      <div className='w-1/2 relative'>
        <motion.div
          className='h-1/2 bg-violet-400 absolute top-0 left-0 right-0'
          style={{ y: y1 }}
        >
          hello
        </motion.div>
        <div className='h-1/4 bg-yellow-400'>hello</div>
      </div>
    </div>
  );
};

export default Section1;