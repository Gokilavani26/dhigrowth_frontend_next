"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/animations/TextGenerateEffect";
import { CardSticky, ContainerScroll } from "@/components/ui/cards-stack";

const ServicesSection = () => {
  const words = 'SOLUTIONS THAT DRIVE SUCCESS ACROSS EVERY INDUSTRY';
  const ref = useRef(null);

  const PROCESS_PHASES = [
    {
      id: "service-1",
      title: "1. Website Development",
      description:
        "Custom, responsive, and SEO-ready websites built for speed, performance, and conversions.",
    },
    {
      id: "service-2",
      title: "2. Application Development",
      description:
        "iOS, Android, and cross-platform applications designed to deliver seamless user experiences and scalable performance.",
    },
    {
      id: "service-3",
      title: "3. AI Development",
      description:
        "Smart AI-powered products including chatbots, recommendation engines, and custom machine learning solutions tailored to your business.",
    },
    {
      id: "service-4",
      title: "4. AI Automation",
      description:
        "Automate repetitive tasks and complex workflows using intelligent AI solutions that improve productivity and accuracy.",
    },
    {
      id: "service-5",
      title: "5. WhatsApp Marketing",
      description:
        "Drive engagement and sales with high-converting WhatsApp campaigns powered by the WhatsApp Business API.",
    },
    {
      id: "service-6",
      title: "6. Business Automation",
      description:
        "Streamline operations, reduce costs, and boost efficiency with smart automation systems tailored to your workflows.",
    },
    {
      id: "service-7",
      title: "7. Business Development",
      description:
        "Strategic consulting and execution services designed to expand your market presence and accelerate business growth.",
    },
    {
      id: "service-8",
      title: "8. SEO",
      description:
        "Improve search rankings with technical SEO, content optimization, keyword strategy, and quality link building.",
    },
    {
      id: "service-9",
      title: "9. Digital Marketing",
      description:
        "Full-funnel digital marketing campaigns that attract, engage, and convert customers across multiple channels.",
    },
    {
      id: "service-10",
      title: "10. Social Media Marketing",
      description:
        "Build your brand presence and community through strategic content and campaigns across Instagram, Facebook, and LinkedIn.",
    },
    {
      id: "service-11",
      title: "11. Meta & Google Ads",
      description:
        "Highly targeted paid advertising campaigns designed to maximize reach, leads, and return on ad spend.",
    },
    {
      id: "service-12",
      title: "12. Ads Shooting",
      description:
        "Professional advertisement production from creative concept development to camera-ready commercial content.",
    },
    {
      id: "service-13",
      title: "13. Video Editing",
      description:
        "High-quality video editing for reels, advertisements, brand films, promotional content, and social media campaigns.",
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9, rotateY: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className='bg-stone-50 '>
      <div className='container min-h-svh place-content-center py-8 px-6 text-stone-900 xl:px-12 '>
        <div className='grid md:grid-cols-2 md:gap-8 xl:gap-12'>
          <div className='left-0 top-0 md:sticky md:h-svh md:py-12'>
            <div className='space-y-8 self-start'>
              <TextGenerateEffect
                duration={0.2}
                className='main-heading text-left'
                textColor='text-black'
                words={words}
              />
              <Link href="/about">
                <button className="btn mt-2 btn-primary inline-flex items-center gap-2">
                  Know More About Us
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
          <ContainerScroll className='min-h-[20vh] space-y-8 py-12 '>
            {PROCESS_PHASES.map((phase, index) => (
              <CardSticky
                key={phase.id}
                index={index + 2}
                className='rounded-2xl border p-8 shadow-md backdrop-blur-3xl'
              >
                <div className='flex items-center justify-between gap-4'>
                  <h3 className='my-6 text-2xl uppercase font-bold tracking-tighter'>
                    {phase.title}
                  </h3>
                  <h3 className='text-2xl font-bold text-indigo-500'>
                    {String(index + 1).padStart(2, '0')}
                  </h3>
                </div>
                <p className='text-foreground font-semibold'>
                  {phase.description}
                </p>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
