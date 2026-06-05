"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const h1Variants: Variants = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const h2Variants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
      delay: 0.2,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
      delay: 0.4,
    },
  },
};

const HomeBanner = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="bg-gray">
      <motion.div
        ref={ref}
        className="w-full h-[408px] container flex flex-col items-center justify-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container text-center px-4 max-w-4xl">
          <motion.h1 className="main-heading text-white" variants={h1Variants}>
            READY TO GROW YOUR BUSINESS IN COIMBATORE?
          </motion.h1>

          <p
            className="font-body text-white  text-lg mt-6 max-w-2xl mx-auto"
          >
            Talk to our digital growth experts today. Get a free audit of your website, ads, or social media — and a custom roadmap to scale your business faster.
          </p>
          {/* <motion.h2
            className="main-heading text-white mb-10"
            variants={h2Variants}
          >
            LET'S BUILD SOMETHING INCREDIBLE TOGETHER.
          </motion.h2> */}

          <motion.div variants={buttonVariants}>
            <a
              href="https://topmate.io/dhigrowth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="btn btn-primary flex items-center justify-center mx-auto mt-6 px-8 py-4 rounded-md text-lg"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Free Consultation
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeBanner;