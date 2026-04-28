import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "react-hot-toast";
import CustomScrollWrapper from "@/components/animations/CustomScrollWrapper";

import Footer from "@/components/shared/Footer";
import TopContactBanner from "@/components/shared/TopContactBanner";
import NavBar from "@/components/shared/NavBar";
// import ChatFlow from "@/components/chat/ChatFlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhigrowth.com"),

  title: {
    default: "DhiGrowth | Business Growth Agency",
    template: "%s | DhiGrowth"
  },

  description:
    "Business growth agency offering web development, SEO, automation and digital marketing solutions.",

  applicationName: "DhiGrowth",

  keywords: [
    "business growth agency",
    "web development company",
    "SEO agency",
    "automation solutions"
  ],

  authors: [{ name: "DhiGrowth Team" }],

  creator: "DhiGrowth",

  alternates: {
    canonical: "/"
  },

  openGraph: {
    title: "DhiGrowth | Business Growth Agency",
    description:
      "Dhi Growth: Turning Your Business Potential into Lasting Success.",
    url: "https://dhigrowth.com",
    siteName: "DhiGrowth",
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: "DhiGrowth | Business Growth Agency in Chennai",
    description:
      "Dhi Growth: Turning Your Business Potential into Lasting Success."
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CustomScrollWrapper>
          <TopContactBanner />
          <NavBar />

          <main className="flex min-h-screen flex-col">{children}</main>

          {/* <ChatFlow /> */}

          <Footer />
          <Toaster
            gutter={12}
            toastOptions={{
              duration: 4000,
            }}
          />
        </CustomScrollWrapper>

      </body>
    </html>
  );
}