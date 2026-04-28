"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    src: "/img/clients/ruts-n-rides-client-logo.svg",
    alt: "Ruts N Rides client brand logo",
  },
  {
    src: "/img/clients/sanikas-fashion-client-logo.svg",
    alt: "Sanikas fashion client logo",
  },
  {
    src: "/img/clients/karisal-food-brand-client-logo.webp",
    alt: "Karisal food brand client logo",
  },
  {
    src: "/img/clients/thoorigai-brand-client-logo.png",
    alt: "Thoorigai client brand logo",
  },
  {
    src: "/img/clients/gigabull-business-client-logo.webp",
    alt: "Gigabull business client logo",
  },
];

const Clients = () => {
  return (
    <section className="w-full pt-[40px] bg-white overflow-hidden">
      <div>
        {/* Heading */}
        <h3 className="flex justify-center font-headers text-nowrap text-xl md:text-3xl lg:text-4xl mb-4">
          Our Trusted Clients
        </h3>

        {/* Slider */}
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex space-x-14 items-center"
            animate={{ x: ["0%", "-40%"] }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
            style={{ whiteSpace: "nowrap" }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => {
              const isClient2 = logo.src === "/img/clients/sanikas-fashion-client-logo.svg";
              const isClient4 = logo.src === "/img/clients/karisal-food-brand-client-logo.webp";
              const isClient5 = logo.src === "/img/clients/thoorigai-brand-client-logo.png";

              const isLargerClient =
                isClient2 || isClient4 || isClient5;

              return (
                <div
                  key={index}
                  className={`${isLargerClient ? "size-40" : "size-32"
                    } flex items-center justify-center`}
                  style={{ flex: "0 0 auto" }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={160}
                    className="object-contain w-full h-auto"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;