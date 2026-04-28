"use client";

import Image from "next/image";
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
} from "@/config/contactConfig";
import InView from "@/components/animations/InView";

const Footer = () => {
  return (
    <footer className="bg-primary w-full pt-10 md:pt-20">
      <div className="container mx-auto">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10 lg:mb-20">
          <div className="text-white text-sm md:text-base mb-4">
            © {new Date().getFullYear()} DHI GROWTH. All rights reserved.
          </div>

          <div className='flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0'>
            <div className='flex space-x-6 lg:mr-16'></div>

            {/* SOCIAL ICONS */}
            <div className='flex justify-center items-center space-x-6'>
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                className='text-white hover:text-gray-200 transition-colors'
              >
                <Image
                  src="/svgs/facebook-social-icon.svg"
                  alt="Follow DhiGrowth on Facebook"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>

              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                className='text-white hover:text-gray-200 transition-colors'
              >
                <Image
                  src="/svgs/instagram-social-icon.svg"
                  alt="Follow DhiGrowth on Instagram"
                  width={24}
                  height={24}
                />
              </a>

              <a
                href={LINKEDIN_LINK}
                target="_blank"
                className='text-white hover:text-gray-200 transition-colors'
              >
                <Image
                  src="/svgs/linkedin-business-network.svg"
                  alt="Connect with DhiGrowth on LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM ANIMATION */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -10px 0px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex justify-center">
            <Image
              src="/img/shared/dhigrowth-business-growth-footer.png"
              alt="DhiGrowth business growth solutions"
              width={1200}
              height={200}
              className="w-full h-auto max-w-7xl"
              loading="lazy"
            />
          </div>
        </InView>
      </div>
    </footer>
  );
};

export default Footer;