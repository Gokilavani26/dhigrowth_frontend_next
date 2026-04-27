"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { TextGenerateEffect } from "../animations/TextGenerateEffect";
import { TOPMATE_LINK } from "@/config/contactConfig";
import { Variants } from "framer-motion";

const services = [
  "/img/homepage/service2.png",
  "/img/homepage/service4.png",
  "/img/homepage/service1.png",
  "/img/homepage/service3.png",
];

const AboutGrowthSection = () => {
  const words = "Why Choose Dhigrowth?";

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const headingVariant: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const buttonVariant: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.4, duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className='bg-gray' ref={ref}>
      <div className='container'>
        <div className='py-16'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className='grid lg:grid-cols-3 md:col-span-1 grid-cols-1 md:gap-8 gap-0 items-center'
          >
            <motion.div
              variants={containerVariants}
              className='space-y-3 self-start block lg:hidden text-center'
            >
              <motion.div variants={headingVariant}>
                <TextGenerateEffect
                  duration={0.2}
                  className='main-heading uppercase text-white lg:text-left'
                  words={words}
                />
              </motion.div>
              <p className='body-text text-white/50'>
                At Dhigrowth, we follow a proven 4-step process to drive your
                business growth. We start with a thorough market analysis,
                identifying your challenges, target audience, and opportunities.
              </p>
              <motion.div variants={buttonVariant}>
                <Link href={TOPMATE_LINK} target='_blank'>
                  <motion.button
                    className='btn btn-primary inline-flex items-center gap-2'
                    whileHover={{ scale: 1.05 }}
                  >
                    Talk To Our Experts
                    <ArrowRight className='w-5 h-5' />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className='grid mt-8 md:mt-0 grid-cols-2 col-span-2 gap-4'
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className='relative overflow-hidden rounded-lg p-[2px] backdrop-blur-3xl'
                  variants={cardVariant}
                >
                  <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                  <div className='relative group overflow-hidden rounded-lg'>
                    <Image
                      src={service}
                      alt="Service"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />

                    <motion.div className='absolute inset-0 bg-black/60 p-3 sm:p-6 flex flex-col justify-end'>
                      <h3 className="text-white text-lg uppercase mb-2">
                        {[
                          "In-Depth Market Analysis",
                          "Customized Solution Design",
                          "Execution & Implementation",
                          "Continuous Support & Growth",
                        ][index]}
                      </h3>

                      <p className="text-white text-sm">
                        {
                          [
                            "We analyze your business deeply.",
                            "We create tailored strategies.",
                            "We implement optimized systems.",
                            "We support long-term growth.",
                          ][index]
                        }
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* DESKTOP TEXT */}
            <motion.div
              variants={containerVariants}
              className='space-y-3 self-start hidden lg:block lg:text-left'
            >
              <motion.div variants={headingVariant}>
                <TextGenerateEffect
                  duration={0.2}
                  className='main-heading uppercase text-white lg:text-left'
                  words={words}
                />
              </motion.div>

              <p className='body-text text-white/50'>
                At Dhigrowth, we follow a proven 4-step process to drive your
                business growth. We start with a thorough market analysis,
                identifying your challenges, target audience, and opportunities.
              </p>

              <motion.div variants={buttonVariant}>
                <Link
                  href={TOPMATE_LINK}
                  target="_blank"
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  Talk To Our Experts
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutGrowthSection;