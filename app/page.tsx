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
    "Business Growth Agency | Web Development, SEO & Automation | DhiGrowtDhiGrowth — Digital Agency in Coimbatore | Web, AI & Marketing",

  description:
    "DhiGrowth is Coimbatore's top digital agency offering website development, AI solutions, SEO, Meta & Google Ads, social media, and business automation services.",

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
