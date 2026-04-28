"use client";

import StatGrid from "@/components/shared/StatGrid";
import { InfiniteMovingCards } from "@/components/animations/InfiniteMovingCards";

const colors = [
  "FF5733",
  "6A1B9A",
  "00897B",
  "FDD835",
  "C62828",
  "1565C0",
  "2E7D32",
];

const getColorFromName = (name: string) => {
  let hash = 0;

  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
};

const generatePlaceholder = (name: string) => {
  const firstLetter = name.charAt(0).toUpperCase();
  const bgColor = getColorFromName(name);

  return `https://placehold.co/100x100/${bgColor}/fff.png?text=${firstLetter}`;
};

const testimonials = [
  {
    name: 'Vinoth ( GYM Coach )',
    quote:
      'Working with Dhigrowth has been a game-changer. They built us a really wonderful fitness website and Worked on SEO, helped use to scale effectively. Thank you.',
  },
  {
    name: 'Kishore ( Clothing brand )',
    quote:
      'Has been a pleasure! They truly understand the need WhatsApp marketing works soo well for us to scale up our online store. DhiGrowth was awesome.',
  },
  {
    name: 'Arun (Fitness Supplement Store)',
    quote:
      'Thanks to DhiGrowth, we have a fully functional e-commerce website now. Their WhatsApp automation and SEO brought in solid traffic. These guys know their game!',
  },
  {
    name: 'Nisha (Freelance Coach)',
    quote:
      'I had an idea for a personal coaching app, and DhiGrowth brought it to life beautifully. They even helped with push notifications and user retention features. Loved the outcome!',
  },
  {
    name: 'Sneha (Handmade Crafts Seller)',
    quote:
      'Loved working with DhiGrowth. Their social media marketing service helped a lot in sales. Wonderful set up for my online store. Sales doubled in 2 months. They really care about small businesses.',
  },
  {
    name: 'Rajesh ( Clothing Industry )',
    quote:
      'DhiGrowth developed a fully customized billing software for our clothing store, and it’s been a total game-changer. From inventory tracking to GST billing, everything is super smooth and easy to use. It has made our daily operations much faster and more organized. Highly satisfied!',
  },
].map((testimonial) => ({
  ...testimonial,
  img: generatePlaceholder(testimonial.name),
}));

const TestimonialsSection = () => {
  return (
    <div>
      <div className='py-12 md:py-16'>
        <h3 className='font-headers text-4xl md:text-5xl max-w-md'>
          DELIVERING RESULTS THAT SPEAK FOR THEMSELVES
        </h3>

        <div className='my-8'>
          <InfiniteMovingCards
            items={testimonials}
            direction='left'
            speed='normal'
            pauseOnHover={true}
          />
        </div>

        <div>
          <StatGrid />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
