import ContactHero from "@/components/contact/ContactHero";
import StatGrid from "@/components/shared/StatGrid";
import ContactFaq from "@/components/contact/ContactFaq";
import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Contact DhiGrowth | Web Development & SEO Agency",

    description:
        "Contact DhiGrowth for website development, SEO, automation and growth consulting. Book a free consultation today.",

    keywords: [
        "contact SEO agency",
        "web development consultation",
        "automation experts"
    ],

    alternates: {
        canonical: "/contact"
    }
};

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