import HomeHero from '@/components/home/HomeHero';
import TechStack from '@/components/home/TechStack';
import CaseStudy from '@/components/home/CaseStudy';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GrowthSection from '@/components/home/GrowthSection';
import PricingPlans from '@/components/home/PricingPlans';
import HomeBanner from '@/components/home/HomeBanner';
import FAQSection from '@/components/home/FAQSection';
import CareerRecruitmentBanner from '@/components/home/CareerRecruitmentBanner';
import Clients from '@/components/home/Clients';

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

      {/* <div className='container'>
        <PricingPlans />
      </div> */} 
      <div className='container'>
        <FAQSection />
      </div>
      <HomeBanner />

      <CareerRecruitmentBanner />
    </>
  );
};

export default HomePage;
