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
      question: "What services does Dhigrowth offer?",
      answer: "We provide a wide range of IT and digital services, including:",
      points: [
        "Website and application development",
        "Digital marketing and SEO optimization",
        "Business automation and workflow solutions",
        "Custom business growth strategies",
      ],
    },
    {
      id: "02",
      question: "How can Dhigrowth help grow my business?",
      answer:
        "We identify the core challenges in your business and offer tailored solutions. Whether you need a new website, marketing strategies, or automation to improve efficiency.",
    },
    {
      id: "03",
      question:
        "Do you offer customized solutions for specific business needs?",
      answer:
        "Yes, we specialize in creating customized solutions based on your unique business goals.",
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