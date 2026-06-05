"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

type FAQ = {
  id: string;
  question: string;
  answer: string;
  points?: string[];
};

export default function FAQSection() {
  const questions: FAQ[] = [
    {
      id: "01",
      question: "Why should I hire an App Development Company in Coimbatore?",
      answer:
        "An App Development Company in Coimbatore helps businesses create scalable and user-friendly mobile applications for Android and iOS platforms. Local expertise, faster communication, and dedicated support make the development process more efficient and cost-effective.",
    },
    {
      id: "02",
      question: "What services does an App Development Company in Coimbatore provide?",
      answer:
        "An App Development Company in Coimbatore offers mobile app design, Android app development, iOS app development, testing, maintenance, and cloud integration services. Many companies also provide custom business applications and AI-powered mobile solutions.",
    },
    {
      id: "03",
      question: "How much does an App Development Company in Coimbatore charge?",
      answer:
        "The pricing of an App Development Company in Coimbatore depends on app features, design complexity, and development requirements. Simple applications typically cost less, while enterprise-grade or AI-integrated solutions require a higher investment.",
    },

  ];

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const faqListContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="container mx-auto px-4 py-16"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1
        className="font-headers text-5xl text-center lg:mb-16 mb-12"
        variants={fadeUp}
      >
        GOT QUESTIONS? WE'VE GOT ANSWERS
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto"
        variants={faqListContainerVariants}
      >
        {questions.map((item) => (
          <motion.div
            key={item.id}
            className="relative border-b border-primary/80 py-8"
            variants={fadeUp}
          >
            <div className="flex justify-between items-start gap-0 sm:gap-8">
              <div className="flex-1">
                <h2 className="font-headers flex justify-between text-2xl mb-4 uppercase">
                  {item.question}
                  <div
                    className="font-numeric block sm:hidden text-4xl text-transparent bg-clip-text bg-white"
                    style={{ WebkitTextStroke: "1px #2196F3" }}
                  >
                    {item.id}
                  </div>
                </h2>

                <p className="font-sub text-gray/80 text-lg">
                  {item.answer}
                </p>

                {item.points && (
                  <ul className="mt-4">
                    {item.points.map((point, index) => (
                      <li
                        key={index}
                        className="font-sub text-gray/80 sm:text-lg text-sm ml-2 list-disc"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div
                className="font-numeric hidden sm:block text-5xl text-transparent bg-clip-text bg-white"
                style={{ WebkitTextStroke: "1px #2196F3" }}
              >
                {item.id}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="flex justify-center mt-5" variants={fadeUp}>
        <Link href="/contact#faq" className="text-primary font-semibold">
          More Questions?
        </Link>
      </motion.div>
    </motion.div>
  );
}