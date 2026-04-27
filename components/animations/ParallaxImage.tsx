"use client";

import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";

interface ParallaxImageProps {
  bgImage: string;
  fgImage: string;
}

const ParallaxImage = ({ bgImage, fgImage }: ParallaxImageProps) => {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [10, -10]);

  const scale = useTransform(scrollY, [0, 1000], [1.05, 1]);

  return (
    <div className='relative h-full rounded-2xl rounded-b-none w-full overflow-hidden'>
      <motion.div
        className='absolute inset-0 h-full w-full bg-cover bg-center rounded-2xl rounded-b-none'
        style={{
          backgroundImage: `url(${bgImage})`,
          y,
          scale,
        }}
      />

      <div className="relative z-10 rounded-2xl rounded-b-none">
        <Image
          src={fgImage}
          alt="Business growth"
          width={1200}
          height={600}
          className="w-full h-full object-cover rounded-2xl rounded-b-none"
          style={{ minHeight: "200px" }}
          priority
        />
      </div>
    </div>
  );
};

export default ParallaxImage;
