"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/svgs/reactjs.svg",
  "/svgs/sass.svg",
  "/svgs/adobeai.svg",
  "/svgs/analytics.svg",
  "/svgs/android.svg",
  "/svgs/figma.svg",
  "/svgs/html5.svg",
  "/svgs/js.svg",
  "/svgs/nextjs.svg",
  "/svgs/nodejs.svg",
];

const TechStack = () => {
  return (
    <section className='w-full pt-[40px] bg-white overflow-hidden'>
      <div>
        <h2 className='text-center font-sub text-base font-[400] md:text-xl text-gray mb-9'>
          Crafting Digital Excellence to Elevate Your Business Growth
        </h2>

        <div className='relative w-full flex overflow-hidden'>
          <motion.div
            className='flex space-x-14'
            animate={{ x: ['0%', '-40%'] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            style={{ display: 'flex', whiteSpace: 'nowrap' }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className='size-20 flex items-center justify-center'
                style={{ flex: '0 0 auto' }}
              >
                <Image
                  src={logo}
                  alt="Technology logo"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
