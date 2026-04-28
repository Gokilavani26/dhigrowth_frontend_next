"use client";

import { motion } from "framer-motion";
import StatGrid from "../shared/StatGrid";
import Link from "next/link";

export default function BusinessServices() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:py-16 py-12 font-body">
      <motion.h3
        className="font-headers text-black text-center text-5xl md:mb-16 mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        FOR BUSINESSES: WE SOLVE, YOU SCALE
      </motion.h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headers text-black text-4xl mb-4">
            FROM ROADBLOCKS TO REVENUE - A HOLISTIC GROWTH APPROACH
          </h2>
          <p className="text-gray text-lg mb-8">
            Struggling with slow growth, ineffective strategies, or outdated
            technology? We don't just offer services; we create customized
            business transformation plans to propel you forward.
          </p>

          <motion.button
            className="bg-btn-bg hover:bg-btn-hover text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* ✅ Next.js way */}
            <Link href="/contact#contact">
              Fix Business Issue
            </Link>
          </motion.button>
        </motion.div>

        <motion.div
          className="flex flex-col space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {[
            {
              title: "Businesses Struggling to Grow",
              text: "If your business has hit a plateau, we create a tailored strategy to push past limitations and scale effectively.",
            },
            {
              title: "Businesses Facing Unclear Challenges",
              text: "If something isn't working but the root cause is unknown, we analyze and provide data-driven solutions.",
            },
            {
              title: "Businesses Needing a Future-Proof Strategy",
              text: "The digital landscape is evolving rapidly. We integrate cutting-edge technology and marketing strategies to give you a competitive edge.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border border-primary rounded-lg p-5"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-black font-semibold text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-gray">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <StatGrid />
      </motion.div>
    </div>
  );
}