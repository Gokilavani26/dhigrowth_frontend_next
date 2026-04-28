"use client";
import { Variants } from "framer-motion";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { TextGenerateEffect } from "@/components/animations/TextGenerateEffect";

type Service = {
  img: string;
  title: string;
  desc: string;
};


const services: Service[] = [
  {
    img: "/img/homepage/business-discovery-call-process.png",
    title: "Step 1: Discovery Call",
    desc: "We start with an in-depth discussion about your brand, its challenges, aspirations, and long-term goals.",
  },
  {
    img: "/img/homepage/marketing-audit-analysis-process.png",
    title: "Step 2: Audit & Analysis",
    desc: "Our team analyzes your marketing strategies, identifying strengths, weaknesses, and growth opportunities.",
  },
  {
    img: "/img/homepage/proposal-contract-onboarding-process.png",
    title: "Step 3: Proposal & Contract",
    desc: "We provide a clear roadmap with deliverables, timelines, and execution strategy tailored to your business.",
  },
  {
    img: "/img/homepage/client-onboarding-growth-process.png",
    title: "Step 4: Onboarding Procedures",
    desc: "We onboard you seamlessly with our team to begin executing growth strategies effectively.",
  },
];

const GrowthSection = () => {
  const words = "Our Onboarding Process";

  const ref = useRef<HTMLDivElement | null>(null);
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
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const buttonVariant: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.4, duration: 0.5 },
    },
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className='bg-gray overflow-hidden' ref={ref}>
      <div className='container'>
        <div className='py-16'>
          <motion.div
            className='grid lg:grid-cols-3 md:col-span-1 grid-cols-1 md:gap-8 gap-0 items-center'
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div
              className='space-y-8 mt-5 sm:mt-0 lg:hidden block self-start'
              variants={containerVariants}
            >
              <motion.div variants={headingVariant}>
                <TextGenerateEffect
                  duration={0.2}
                  className='main-heading text-left text-white'
                  words={words}
                />
              </motion.div>
              <motion.div variants={buttonVariant}>
                <Link href="/contact">
                  <motion.button
                    className="btn btn-primary inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    Know More About Us
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* CARDS */}
            <motion.div
              className="grid mt-8 md:mt-0 grid-cols-2 col-span-2 gap-4"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg p-[2px] backdrop-blur-3xl"
                  variants={cardVariant}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

                  <div className="relative group rounded-lg overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                      loading="eager"
                      priority
                    />

                    <div className="absolute inset-0 bg-black/60 p-4 flex flex-col justify-end">
                      <h3 className="text-white text-xl font-semibold mb-2 uppercase">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-sm">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT (desktop only) */}
            <motion.div
              className='space-y-8 mt-5 sm:mt-0 hidden lg:block self-start'
              variants={containerVariants}
            >
              <motion.div variants={headingVariant}>
                <TextGenerateEffect
                  duration={0.2}
                  className="main-heading text-white"
                  words={words}
                />
              </motion.div>

              <motion.div variants={buttonVariant}>
                <Link href="/contact">
                  <button className="btn btn-primary flex items-center gap-2">
                    Know More About Us
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GrowthSection;