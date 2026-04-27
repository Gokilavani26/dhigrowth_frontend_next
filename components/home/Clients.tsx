"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/img/clients/RutsNRideslogo.svg",
  "/img/clients/Sanikaslogo.svg",
  "/img/clients/Karisallogo.webp",
  "/img/clients/Thoorigailogo.png",
  "/img/clients/Gigabulllogo.webp",
];

const Clients = () => {
  return (
    <section className="w-full pt-[40px] bg-white overflow-hidden">
      <div>
        {/* Heading */}
        <h2 className="flex justify-center font-headers text-nowrap text-xl md:text-3xl lg:text-4xl mb-4">
          Our Trusted Clients
        </h2>

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
              const isClient2 = logo === "/img/clients/Sanikaslogo.svg";
              const isClient4 = logo === "/img/clients/Karisallogo.webp";
              const isClient5 = logo === "/img/clients/Thoorigailogo.png";

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
                    src={logo}
                    alt="Client Logo"
                    width={160}
                    height={160}
                    className="object-contain w-full h-full"
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