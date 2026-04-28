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
      id: 'service-1',
      title: '1. AI Automation',
      description:
        'AI Automation refers to the integration of Artificial Intelligence (AI) with automated systems to perform tasks that typically require human intelligence and decision-making.',
    },
    {
      id: 'service-2',
      title: '2. Website Development',
      description:
        'We create websites that are not only visually stunning but also intuitive and responsive. Our focus is on delivering a seamless user experience that drives engagement, supports your brand identity, and converts visitors into customers.',
    },
    {
      id: 'service-3',
      title: '3. Application Development',
      description:
        'Our custom applications are designed to streamline your operations and enhance customer interactions. With user-friendly interfaces and robust functionality, we deliver solutions that adapt perfectly to your business needs.',
    },
    {
      id: 'service-4',
      title: '4. Social Media Marketing',
      description:
        'From content creation to targeted ad campaigns, our social media marketing drives meaningful engagement and boosts your brand’s online presence. We tailor strategies that build communities and convert followers into customers.',
    },
    {
      id: 'service-5',
      title: '5. WhatsApp Chat Automation',
      description:
        'Our WhatsApp Chat Automation service enables instant, personalized communication with your customers, improving response times and customer satisfaction while reducing manual effort.',
    },
    {
      id: 'service-6',
      title: '6. Business Automation',
      description:
        'We automate repetitive business processes to save time, reduce errors, and increase efficiency. Our business automation solutions empower your team to focus on what matters most—growing your business.',
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
