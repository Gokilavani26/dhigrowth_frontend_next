"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Highlight } from "../animations/HeroHighlight";
import { TOPMATE_LINK } from "@/config/contactConfig";

const AboutHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full bg-white mt-10 mb-24">
      <h2 className="sub-heading text-primary mb-8">
        About DHI growth
      </h2>

      <div className="grid lg:grid-cols-2 md:gap-7 gap-6 items-start">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="main-heading text-center sm:text-left mt-10 uppercase">
            Delivering Huge Impact
            <br /> on Your <br />
            <Highlight className="text-black px-4 sm:pl-1 sm:pr-4">
              Business Growth
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
            DhiGrowth is a full-service digital agency headquartered in Coimbatore, India. We help startups, SMEs, and enterprises build a powerful digital presence and grow their business through smart technology and data-driven marketing.
            <br />
            <br />
            From building high-performance websites and mobile applications to deploying AI automation, running paid ad campaigns, and creating compelling video content we are the one-stop partner for every digital need your business has. We are not just a service provider. We are your growth partner invested in your success, committed to measurable outcomes, and driven by a passion for innovation.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          >
            <Link href={TOPMATE_LINK} target="_blank">
              <button className="btn btn-primary bg-primary hover:bg-btn-hover">
                Book a Free Consultation
              </button>
            </Link>
          </motion.div>

          {/* <div className="text-sm font-sub text-gray">
            Looking for customized solutions? Let’s discuss your business needs!
          </div> */}
        </motion.div>

      </div>
    </div>
  );
};

export default AboutHero;