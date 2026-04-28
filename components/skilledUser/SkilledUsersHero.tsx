"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

import { Highlight } from "@/components/animations/HeroHighlight";
import ParallaxImage from "@/components/animations/ParallaxImage";

const SkilledUserBannerBG = "/img/skilleduserpage/skilleduserbanner-bg.png"
const SkilledUserBannerFore = "/img/skilleduserpage/skilleduserbanner-fore.png"
export default function SkilledUsersHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <div ref={ref} className='w-full bg-white mt-10 md:mb-24 mb-0'>
        <h3 className='sub-heading text-primary mb-8'>
          Skilled User Community
        </h3>

        <div>
          <div className='grid lg:grid-cols-2 md:gap-7 gap-6 items-start'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1 className='main-heading text-center sm:text-left uppercase'>
                Unlock Opportunities.
                <br /> Get Paid for <br />
                <Highlight className='text-black px-4 sm:pl-1 sm:pr-4'>
                  Your Skills
                </Highlight>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className='space-y-8'
            >
              <p className='font-body text-gray text-lg leading-relaxed'>
                Are you a skilled professional looking for real projects and a
                way to earn through your expertise? DHIGROWTH is more than just
                a platform—it’s a thriving community of talented individuals
                collaborating, earning, and growing together.
              </p>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
                className='btn btn-primary bg-primary hover:bg-btn-hover'
              >
                <Link
                  href="/skilled-users#join-community"
                >
                  Join Our Community
                </Link>
              </motion.button>
              <div className='text-sm font-sub text-gray'>
                Unlock real projects and grow with a community of verified
                professionals.
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className='mt-12 relative w-full h-auto rounded-xl overflow-hidden'
          >
            <ParallaxImage
              bgImage={SkilledUserBannerBG}
              fgImage={SkilledUserBannerFore}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

