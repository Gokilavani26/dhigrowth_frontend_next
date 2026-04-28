import SkilledUsersHero from "@/components/skilledUser/SkilledUsersHero";
import SkilledUsersCommunity from "@/components/skilledUser/SkilledUsersCommunity";
import SkilledUsersOpportunities from "@/components/skilledUser/SkilledUsersOpportunities";
import FAQSection from "@/components/home/FAQSection";
import RegistrationForm from "@/components/skilledUser/RegistrationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Join Freelance Community | Skilled Professionals Network",

    description:
        "Join DhiGrowth skilled community for freelance opportunities, digital projects and business collaborations.",

    keywords: [
        "freelance opportunities",
        "join freelancer community",
        "remote project opportunities"
    ],

    alternates: {
        canonical: "/skilled-users"
    }
};

export default function SkilledUsersPage() {
    return (
        <div className="container overflow-hidden">
            <SkilledUsersHero />
            <SkilledUsersCommunity />
            <SkilledUsersOpportunities />

            <div id="join-community">
                <RegistrationForm />
            </div>

            <FAQSection />
        </div>
    );
}
