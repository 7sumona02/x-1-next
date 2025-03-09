'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section1 = () => {
  const { scrollYProgress: scrollYProgress1 } = useScroll();
  const y1 = useTransform(scrollYProgress1, [0, 0.22], ['0%', '100%']);

  return (
    <div className='bg-white h-screen w-screen flex text-black'>
      <div className='h-screen bg-white w-1/2 flex items-start flex-col justify-center px-10'>
       <div className='pb-20 space-y-2'>
            <h1 className='text-2xl font-bold'>Scope in AI features</h1>
            <p className='max-w-md'>Lorem ipsum, dolor sit amet consectetur adipisicing quis quos eius officiis laborum non deleniti doloribus?</p>
       </div>
        <div className='grid grid-cols-2 gap-20 items-center justify-center'>
            <div className='w-full h-full space-y-2 cursor-pointer'>
                <div className='text-neutral-800 text-sm'>jarango.com</div>
                <div className='font-semibold text-lg'>AI and the power of small teams</div>
                <div className='font-medium'>Doing more with less isn&apos;t just possible — it&apos;s the future of work.</div>
                <div className='flex items-center gap-2'>
                    <div className='bg-neutral-200 rounded-lg py-1 px-2 inline text-sm'>AI</div>
                    <div className='bg-neutral-200 rounded-lg py-1 px-2 inline text-sm'>UX</div>
                </div>
            </div>
            <div className='w-full h-full space-y-2 cursor-pointer'>
                <div className='text-neutral-800 text-sm'>jarango.com</div>
                <div className='font-semibold text-lg'>AI and the power of small teams</div>
                <div className='font-medium'>Doing more with less isn&apos;t just possible — it&apos;s the future of work.</div>
                <div className='flex items-center gap-2'>
                    <div className='bg-neutral-200 rounded-lg py-1 px-2 inline text-sm'>AI</div>
                    <div className='bg-neutral-200 rounded-lg py-1 px-2 inline text-sm'>UX</div>
                </div>
            </div>        
            <div className='w-full h-full space-y-2 cursor-pointer'>
                <div className='text-neutral-800 text-sm'>jarango.com</div>
                <div className='font-semibold text-lg'>AI and the power of small teams</div>
                <div className='font-medium'>Doing more with less isn&apos;t just possible — it&apos;s the future of work.</div>
                <div className='flex items-center gap-2'>
                    <div className='bg-neutral-200 rounded-lg py-1 px-2 inline text-sm'>AI</div>
                    <div className='bg-neutral-200 rounded-lg py-1 px-2 inline text-sm'>UX</div>
                </div>
            </div>        
            <div className='w-full h-full space-y-2 cursor-pointer'>
                <div className='text-neutral-800 text-sm'>jarango.com</div>
                <div className='font-semibold text-lg'>AI and the power of small teams</div>
                <div className='font-medium'>Doing more with less isn&apos;t just possible — it&apos;s the future of work.</div>
                <div className='flex items-center gap-2'>
                    <div className='bg-neutral-200 rounded-lg py-1 px-2 inline text-sm'>AI</div>
                    <div className='bg-neutral-200 rounded-lg py-1 px-2 inline text-sm'>UX</div>
                </div>
            </div>
        </div>
      </div>
      <div className='w-1/2 relative'>
        <motion.div
          className='h-1/2 bg-violet-400 absolute top-0 left-0 right-0 flex justify-center items-center z-10'
          style={{ y: y1 }}
        >
          <div className='text-6xl font-bold text-white opacity-50'>Monday</div>
        </motion.div>
        <div className='h-1/2 bg-violet-500 h-1/2 bg-violet-400 absolute bottom-0 left-0 right-0'></div>
      </div>
    </div>
  );
};

export default Section1;