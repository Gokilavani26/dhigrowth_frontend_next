"use client";

import type { Variants } from "framer-motion";
import InView from "@/components/animations/InView";

const CareerRecruitmentBanner = () => {
  const customVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const customTransition = {
    duration: 0.5,
    ease: "easeOut" as const,
  };

  return (
    <div className="w-full bg-white py-16 flex flex-col items-center justify-center">
      <div className="container text-center px-4 max-w-4xl">
        <InView
          variants={{
            hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeOut" as const }}
        >
          <h1 className="main-heading mb-6">
            BUILD YOUR FUTURE WITH US - <br className="hidden sm:block" />
            COLLABORATE WITH LEADING CLIENTS
          </h1>
        </InView>

        <InView variants={customVariants} transition={customTransition}>
          <p className="font-body text-gray text-xl mb-10 max-w-3xl mx-auto">
            Unlock your potential, work with top-tier clients, and grow within a
            vibrant community.
          </p>
        </InView>

        {/* Future CTA (Next.js version) */}
        {/* 
        <InView>
          <Link href="/skilled-users#join-community">
            <button className="border border-btn-outline text-btn-outline hover:bg-btn-outline hover:text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300">
              Apply to Join
            </button>
          </Link>
        </InView>
        */}
      </div>
    </div>
  );
};

export default CareerRecruitmentBanner;