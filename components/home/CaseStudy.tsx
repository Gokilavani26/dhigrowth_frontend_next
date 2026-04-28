"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Business = "/img/homepage/business.jpg";

// Container to stagger children animations.
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Slide in from left for headings.
const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

// Slide in from right for text and button.
const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

// Scale and slight rotation for the image container.
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8, rotate: 5 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

// Simple fade in effect.
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const CaseStudy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className='py-16' ref={ref}>
      <motion.h2
        className='sub-heading text-black pb-12 text-center'
        variants={slideInLeft}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        SEE HOW WE'VE HELPED BUSINESSES LIKE YOURS SUCCEED
      </motion.h2>

      <motion.div
        className='grid lg:grid-cols-2 gap-12 items-start'
        variants={containerVariants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Left: Case Study Image & Info */}
        <motion.div
          className='relative bg-[#2F2A35] rounded-2xl text-white overflow-hidden'
          variants={scaleIn}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div className='relative' variants={fadeIn}>
            <motion.img
              src={Business}
              alt='Dhi Growth Website Case Study'
              className='w-full h-[350px] object-cover rounded-lg'
              variants={scaleIn}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.div
              className='absolute inset-0 bg-gradient-to-b from-[#000000] to-[#666666] opacity-30 rounded-lg'
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            />
          </motion.div>

          {/* <motion.div
            className='absolute md:bottom-2 bottom-2 md:left-2 left-2 flex flex-col md:space-y-4 space-y-2 p-2 sm:p-6 z-10'
            variants={slideInRight}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <motion.h3
              className='font-body sm:text-xl text-sm font-semibold'
              variants={fadeIn}
            >
              Client: <span className='font-normal'>ABC Tech</span>
            </motion.h3>
            <motion.h3
              className='font-body sm:text-xl text-sm font-semibold'
              variants={fadeIn}
            >
              Challenge:{' '}
              <span className='font-normal'>
                Low web traffic and engagement
              </span>
            </motion.h3>
            <motion.h3
              className='font-body sm:text-xl text-sm font-semibold'
              variants={fadeIn}
            >
              Solution:{' '}
              <span className='font-normal'>
                Revamped website with SEO strategies
              </span>
            </motion.h3>
            <motion.h3
              className='font-body sm:text-xl text-sm font-semibold'
              variants={fadeIn}
            >
              Result:{' '}
              <span className='font-normal'>
                +250% increase in traffic in 3 months
              </span>
            </motion.h3>
          </motion.div> */}
        </motion.div>

        {/* Right: Case Study Text & Button */}
        <motion.div
          className='flex flex-col space-y-6 lg:space-y-8'
          variants={slideInRight}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <motion.p
            className='body-text text-xl leading-relaxed'
            variants={fadeIn}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          >
            At Dhigrowth, we specialize in empowering businesses with innovative
            IT solutions and digital strategies. Our expert team helps you build
            powerful websites, optimize online presence, and implement
            automation to streamline operations. We focus on delivering tailored
            solutions that drive growth, enhance efficiency, and maximize your
            ROI. Let us help you transform challenges into opportunities and
            grow your business with confidence.
          </motion.p>
          <motion.div
            variants={slideInLeft}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            <Link href="/about">
              <button className="btn btn-primary self-start">
                Explore our services
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CaseStudy;
