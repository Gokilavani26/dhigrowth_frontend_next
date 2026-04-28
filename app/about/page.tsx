import AboutHero from "@/components/about/AboutHero";
import AboutGrowthSection from "@/components/about/AboutGrowthSection";
import AboutBusinessServices from "@/components/about/AboutBusinessServices";
import AboutCommunity from "@/components/about/AboutCommunity";
import HomeBanner from "@/components/home/HomeBanner";
import CareerRecruitmentBanner from "@/components/home/CareerRecruitmentBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "About DhiGrowth | Business Growth Consultants",

    description:
        "Learn how DhiGrowth helps brands scale through web development, automation and digital growth consulting in Chennai.",

    keywords: [
        "about dhigrowth",
        "business consultants Chennai",
        "growth consulting agency"
    ],

    alternates: {
        canonical: "/about"
    },

    openGraph: {
        title: "About DhiGrowth",
        description:
            "Meet the business growth team behind DhiGrowth."
    }
};

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