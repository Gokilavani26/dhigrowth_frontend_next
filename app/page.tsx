import type { Metadata } from "next";
import HomeHero from '@/components/home/HomeHero';
import TechStack from '@/components/home/TechStack';
import CaseStudy from '@/components/home/CaseStudy';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GrowthSection from '@/components/home/GrowthSection';
import HomeBanner from '@/components/home/HomeBanner';
import FAQSection from '@/components/home/FAQSection';
import CareerRecruitmentBanner from '@/components/home/CareerRecruitmentBanner';
import Clients from '@/components/home/Clients';

export const metadata: Metadata = {
  title:
    "Business Growth Agency | Web Development, SEO & Automation | DhiGrowth",

  description:
    "DhiGrowth is a business growth agency offering web development, digital marketing, automation and scalable technology solutions to help brands grow faster.",

  keywords: [
    "business growth agency",
    "web development company",
    "digital marketing agency",
    "business automation services",
    "AI automation services",
    "DhiGrowth"
  ],

  alternates: {
    canonical: "https://dhigrowth.com",
  },
};

const HomePage = () => {
  return (
    <>
      <div className='container overflow-hidden'>
        <HomeHero />
        <TechStack />
        <CaseStudy />
      </div>
      <ServicesSection />

      <div className='container '>
        <TestimonialsSection />
      </div>
      <Clients />
      <GrowthSection />

      <div className='container'>
        <FAQSection />
      </div>
      <HomeBanner />

      <CareerRecruitmentBanner />
    </>
  );
};

export default HomePage;
