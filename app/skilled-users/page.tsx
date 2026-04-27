import SkilledUsersHero from "@/components/skilledUser/SkilledUsersHero";
import SkilledUsersCommunity from "@/components/skilledUser/SkilledUsersCommunity";
import SkilledUsersOpportunities from "@/components/skilledUser/SkilledUsersOpportunities";
import FAQSection from "@/components/home/FAQSection";
import RegistrationForm from "@/components/skilledUser/RegistrationForm";

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
