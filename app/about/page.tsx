import AboutHero from "@/components/about/AboutHero";
import AboutGrowthSection from "@/components/about/AboutGrowthSection";
import AboutBusinessServices from "@/components/about/AboutBusinessServices";
import AboutCommunity from "@/components/about/AboutCommunity";
import HomeBanner from "@/components/home/HomeBanner";
import CareerRecruitmentBanner from "@/components/home/CareerRecruitmentBanner";

export default function AboutPage() {
    return (
        <>
            <div className="container overflow-hidden">
                <AboutHero />
            </div>

            <AboutGrowthSection />

      <div className="container">
        <AboutBusinessServices />
        <AboutCommunity />
      </div>

            <HomeBanner />
            <CareerRecruitmentBanner />
        </>
    );
}