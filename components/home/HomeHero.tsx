"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Highlight } from "@/components/animations/HeroHighlight";
import { motion, useInView } from "framer-motion";
import ParallaxImage from "@/components/animations/ParallaxImage";

const BGImg = "/img/homepage/bgimg.jpg";
const ForeImg = "/img/homepage/foreimg.png";

const HomeHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full bg-white">
      <div className="grid lg:grid-cols-2 md:gap-7 gap-6 mt-10 mb-16 md:mb-24 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="main-heading text-center sm:text-left uppercase">
            Business Growth Agency Delivering Huge Impact <br /> For Your <br />
            <Highlight className="text-black px-4 sm:pl-1 sm:pr-4">
              Business Growth
            </Highlight>
          </h1>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="space-y-8"
        >
          <p className="font-body text-gray text-lg leading-relaxed">
            At Dhigrowth, we empower businesses to scale, automate, and succeed
            through cutting-edge technology and expert-driven strategies.
            Whether you need a website, application, Marketing, Automation or a
            complete business growth solution, we’ve got you covered.
          </p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="btn btn-primary bg-primary hover:bg-btn-hover"
          >
            <Link href="/contact#contact">
              Launch Your Growth
            </Link>
          </motion.button>

          <div className="flex items-center gap-2 text-sm font-sub text-gray">
            <span>Free Consultation</span>
            <span>→</span>
            <span>Tailored Growth Plan</span>
            <span>→</span>
            <span>Measurable Results</span>
          </div>
        </motion.div>
      </div>

      {/* IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="mt-12 relative w-full h-auto rounded-xl overflow-hidden"
      >
        <ParallaxImage bgImage={BGImg} fgImage={ForeImg}/>
      </motion.div>
    </div>
  );
};

export default HomeHero;