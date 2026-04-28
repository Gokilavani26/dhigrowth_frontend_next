"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    src: "/svgs/react-js-development.svg",
    alt: "React.js development technology",
  },
  {
    src: "/svgs/sass-frontend-styling.svg",
    alt: "Sass frontend styling technology",
  },
  {
    src: "/svgs/adobe-illustrator-design.svg",
    alt: "Adobe Illustrator design technology",
  },
  {
    src: "/svgs/business-analytics-tools.svg",
    alt: "Analytics and growth tools",
  },
  {
    src: "/svgs/android-app-development.svg",
    alt: "Android mobile app development",
  },
  {
    src: "/svgs/figma-ui-ux-design.svg",
    alt: "Figma UI UX design platform",
  },
  {
    src: "/svgs/html5-web-development.svg",
    alt: "HTML5 web development technology",
  },
  {
    src: "/svgs/javascript-development.svg",
    alt: "JavaScript development technology",
  },
  {
    src: "/svgs/nextjs-react-framework.svg",
    alt: "Next.js React framework",
  },
  {
    src: "/svgs/nodejs-backend-development.svg",
    alt: "Node.js backend development",
  },
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
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                  loading="lazy"
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
