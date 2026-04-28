"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function ContactFaq() {
  const questions = [
    {
      id: '01',
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models based on your project needs:',
      points: [
        'Fixed pricing: For specific projects with defined scopes.',
        'Hourly pricing: For ongoing support or consultation.',
        'Custom packages: Tailored pricing for long-term partnerships.',
      ],
    },
    {
      id: '02',
      question: 'How can Dhigrowth help my business grow?',
      answer:
        'We provide customized IT solutions that streamline your operations, enhance your online presence, and boost efficiency. From website development and automation to digital marketing.',
    },
    {
      id: '03',
      question: 'Can Dhigrowth help automate my business processes?',
      answer:
        'Absolutely! We specialize in business automation to reduce manual work, improve accuracy, and increase productivity. This includes automating lead management, invoicing, customer support, and more.',
    },
    {
      id: '04',
      question:
        'What kind of support does Dhigrowth offer after project completion?',
      answer:
        'We provide ongoing support and maintenance to keep your business running smoothly. Our team ensures your website, applications, and systems remain updated, secure, and optimized for long-term growth.',
    },
    {
      id: '05',
      question: 'How does the collaboration process work?',
      answer: 'Our collaboration process includes:',
      points: [
        'Consultation: We understand your business goals and challenges.',
        'Strategy: We create a tailored plan with clear deliverables.',
        'Execution: Our team develops and implements the solution.',
        'Review & Refinement: We ensure the solution meets your expectations.',
        'Ongoing Support: We provide continuous assistance and updates.',
      ],
    },
    {
      id: '06',
      question: 'Is my business data secure with Dhigrowth?',
      answer:
        'Yes, we prioritize data security and follow industry-standard practices to protect your information. We ensure all projects comply with data privacy regulations and use secure servers and encryption methods.',
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const faqListContainerVariants: Variants = {
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      className='container mx-auto px-4 py-16'
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      id='faq'
    >
      <motion.h3
        variants={fadeUp}
        className='font-headers text-5xl text-center lg:mb-16 mb-12'
      >
        GOT QUESTIONS? WE'VE GOT ANSWERS
      </motion.h3>

      <motion.div
        className='max-w-4xl mx-auto'
        variants={faqListContainerVariants}
      >
        {questions.map((item) => (
          <motion.div
            key={item.id}
            className='relative border-b border-primary/80 py-8'
            variants={fadeUp}
          >
            <div className='flex justify-between items-start gap-0 sm:gap-8'>
              <div className='flex-1'>
                <h2 className='font-headers flex justify-between text-2xl mb-4 uppercase'>
                  {item.question}
                  <div
                    className='font-numeric block sm:hidden text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-white stroke-primary stroke-2'
                    style={{
                      WebkitTextStroke: '1px #2196F3',
                      opacity: 1,
                    }}
                  >
                    {item.id}
                  </div>
                </h2>
                <p className='font-sub text-gray/80 text-lg'>{item.answer}</p>
                {item.points && (
                  <ul className='mt-4'>
                    {item.points.map((point, index) => (
                      <li
                        key={index}
                        className='font-sub text-gray/80 sm:text-lg text-sm ml-2 list-inside list-disc'
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div
                className='font-numeric hidden sm:block text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-white stroke-primary stroke-2'
                style={{
                  WebkitTextStroke: '1px #2196F3',
                  opacity: 1,
                }}
              >
                {item.id}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  );
}
