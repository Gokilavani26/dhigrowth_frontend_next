import ContactHero from "@/components/contact/ContactHero";
import StatGrid from "@/components/shared/StatGrid";
import ContactFaq from "@/components/contact/ContactFaq";
import ContactForm from "@/components/contact/ContactForm";
// import CareerRecruitmentBanner from "@/components/home/CareerRecruitmentBanner";

export default function ContactPage() {
    return (
        <>
            <div className="container overflow-hidden">
                <ContactHero />
                <ContactForm />

                <div className="my-12">
                    <StatGrid />
                </div>

                <ContactFaq />
            </div>

            {/* <CareerRecruitmentBanner /> */}
        </>
    );
}