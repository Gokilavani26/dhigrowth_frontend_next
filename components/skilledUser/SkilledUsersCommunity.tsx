"use client";

import { motion, useInView } from "framer-motion";
import StatGrid from "@/components/shared/StatGrid";
import { useRef } from "react";
import Link from "next/link";

export default function SkilledUsersCommunity() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div
      ref={sectionRef}
      className='w-full max-w-6xl mx-auto px-4 pt-16 font-body'
    >
      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='font-headers text-black text-center text-5xl md:mb-16 mb-12'
      >
        Unlock Your Potential with DhiGrowth Talents
      </motion.h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
        {/* Left Section - Description & Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className='max-w-xl'
        >
          <h3 className='font-headers text-black text-4xl mb-4'>
            Why Join our DhiGrowth Talents <br /> community?
          </h3>
          <p className='text-gray text-lg mb-8'>
            Join a community of skilled professionals, work on real projects,
            and earn on your terms. Enjoy flexible gigs, verified connections,
            and opportunities to grow. Start your journey today!
          </p>
          <Link
            href="/skilled-users#join-community"
            className="bg-btn-bg hover:bg-btn-hover text-white font-bold py-3 px-6 rounded-md transition-all duration-300 inline-block"
          >
            Join Now and Start Earning
          </Link>
        </motion.div>

        {/* Right Section - Features List */}
        <div className='flex flex-col space-y-6'>
          {[
            {
              title: 'Earn on Real Projects',
              text: 'Work on genuine projects and get paid fairly for your expertise—no unpaid work, just real earnings.',
            },
            {
              title: 'Flexible Work Opportunities',
              text: 'Choose gigs that match your skills and schedule, whether short-term tasks or long-term projects.',
            },
            {
              title: 'Verified Community',
              text: 'Join a trusted network of skilled professionals, ensuring quality collaborations and opportunities.',
            },
            {
              title: 'Networking & Growth',
              text: 'Connect, learn, and grow with industry experts, unlocking new career opportunities.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.2,
              }}
              className='border border-primary rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow duration-300'
            >
              <h3 className='text-black font-semibold text-xl mb-2'>
                {feature.title}
              </h3>
              <p className='text-gray'>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Grid Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        className='my-20'
      >
        <StatGrid />
      </motion.div>
    </div>
  );
}
