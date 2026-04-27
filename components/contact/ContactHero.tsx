"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Highlight } from "../animations/HeroHighlight";
import { TOPMATE_LINK } from "@/config/contactConfig";

const ContactHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div>
      <div ref={ref} className="w-full bg-white mt-10 mb-24">
        <h2 className="sub-heading text-primary mb-8">
          Contact DHI growth
        </h2>

        <div className="grid lg:grid-cols-2 md:gap-7 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="main-heading text-center sm:text-left uppercase">
              Let’s Grow Your <br />
              <Highlight className="text-black px-4 sm:pl-1 sm:pr-4">
                Business Together
              </Highlight>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="font-body text-gray text-lg leading-relaxed">
              Have a business challenge or need a custom IT solution? Reach
              out to us and let’s discuss how Dhigrowth can help you scale,
              automate, and <br /> succeed.
            </p>

            <motion.a
              href={TOPMATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="btn btn-primary bg-primary hover:bg-btn-hover inline-block"
            >
              Schedule Free Consultation
            </motion.a>

            <div className="text-sm font-sub text-gray">
              Let’s discuss your business needs or career goals today!
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;