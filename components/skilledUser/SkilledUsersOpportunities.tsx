"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function SkilledUsersOpportunities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className='w-full max-w-6xl mx-auto px-4 pb-16 font-body'>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='font-headers text-black text-center text-5xl md:mb-16 mb-12'
      >
        How to Join & Start Earning with DHIGROWTH
      </motion.h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='max-w-xl'
        >
          <h2 className='font-headers text-black text-4xl mb-4'>
            Unlock Opportunities & Get Paid for Your
            <br /> Skills
          </h2>
          <p className='text-gray text-lg mb-8'>
            Get verified, access real projects, and work flexibly while earning
            for your skills. A simple process to start your journey!
          </p>
          <Link
            href="/skilled-users#join-community"
            className="bg-btn-bg hover:bg-btn-hover text-white font-bold py-3 px-6 rounded-md transition-all duration-300 inline-block"
          >
            Join Now and Start Earning
          </Link>
        </motion.div>

        <div className='flex flex-col space-y-6'>
          {[
            {
              title: 'Step 1: Join Our Skilled Community',
              desc: 'Fill out the form with your skills and experience to become part of our verified talent network.',
            },
            {
              title: 'Step 2: Profile Verification',
              desc: 'Our team carefully reviews and validates your profile to ensure expertise and quality.',
            },
            {
              title: 'Step 3: Access Your Gig Dashboard',
              desc: 'Once approved, explore a variety of high-value projects that match your skills.',
            },
            {
              title: 'Step 4: Apply & Start Earning',
              desc: 'Choose gigs that fit your expertise, get selected, work with businesses, and start earning immediately!',
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              whileHover={{ scale: 1.02 }}
              className='border border-primary rounded-lg p-5 shadow-lg bg-white'
            >
              <h3 className='text-black font-semibold text-xl mb-2'>
                {step.title}
              </h3>
              <p className='text-gray'>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

