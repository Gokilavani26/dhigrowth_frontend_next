"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutCommunity() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:py-16 py-12 font-body">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-headers text-black text-center text-5xl md:mb-16 mb-12"
      >
        For Skilled Professionals: Unlock Your Earning Potential
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h3 className="font-headers text-black text-4xl mb-4">
            Empowering Skilled Individuals with <br /> Real Opportunities
          </h3>
          <p className="text-gray text-lg mb-8">
            At Dhigrowth, we are building a community of skilled professionals
            by providing real-world projects that offer learning, earning, and
            growth. Whether you’re a developer, designer, or marketer, we give
            you the platform to apply your skills, gain experience, and earn
            passive income.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-btn-bg hover:bg-btn-hover text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
          >
            <Link href="/skilled-users">
              Join Our Community
            </Link>
          </motion.button>
        </motion.div>

        <div className="flex flex-col space-y-6">
          {[
            {
              title: "Real-World Projects",
              description:
                "Work on live business projects that enhance your skills and boost your portfolio, giving you practical industry experience.",
            },
            {
              title: "Flexible Earning Opportunities",
              description:
                "Take on projects at your own pace and earn while you learn, creating a steady stream of income.",
            },
            {
              title: "Skill Validation & Growth",
              description:
                "We validate your skills before assigning you to projects, ensuring you get work that matches your expertise, helping you grow professionally.",
            },
            {
              title: "Community & Collaboration",
              description:
                "Join a network of skilled individuals, collaborate with peers, and expand your professional connections.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateX: 5 }}
              className="border border-primary rounded-lg p-5 shadow-lg transform perspective-500"
            >
              <h3 className="text-black font-semibold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-gray">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}