"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function ContactFaq() {
  const questions = [
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
    {
      id: "04",
      question: "How long does an App Development Company in Coimbatore take to develop an app?",
      answer:
        "Development timelines vary based on project requirements. A mobile application can take anywhere from a few weeks to several months, depending on features, UI/UX design, testing, integrations, and deployment needs.",
    },
    {
      id: "05",
      question: "Can an App Development Company in Coimbatore build apps for startups?",
      answer:
        "Yes. App Development Companies in Coimbatore build customized applications for startups, small businesses, and enterprises. They help businesses launch scalable mobile solutions with modern features and seamless user experiences.",
    },
    {
      id: "06",
      question: "What is AI Automation development in Coimbatore?",
      answer:
        "AI Automation development in Coimbatore helps businesses automate repetitive tasks using artificial intelligence, machine learning, and smart workflows. It improves productivity, reduces manual effort, and enhances operational efficiency.",
    },
    {
      id: "07",
      question: "Which businesses can benefit from AI Automation development in Coimbatore?",
      answer:
        "AI Automation solutions benefit industries such as healthcare, retail, manufacturing, education, logistics, and finance. Businesses use automation to streamline customer service, data management, lead generation, and daily operations.",
    },
    {
      id: "08",
      question: "What technologies are used in AI Automation development in Coimbatore?",
      answer:
        "AI Automation development leverages technologies such as machine learning, AI chatbots, predictive analytics, workflow automation tools, natural language processing (NLP), and intelligent process automation to improve business efficiency.",
    },
    {
      id: "09",
      question: "Is AI Automation development in Coimbatore affordable for small businesses?",
      answer:
        "Yes. AI Automation solutions can be tailored to fit different budgets and business sizes. Small businesses often use automation to reduce operational costs, save time, and improve productivity without significantly increasing overhead expenses.",
    },
    {
      id: "10",
      question: "How do I choose the best company for AI Automation development in Coimbatore?",
      answer:
        "Choose a company based on its experience, technical expertise, client portfolio, and proven project success. A reliable AI automation partner should offer customized solutions, transparent communication, and ongoing technical support.",
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
