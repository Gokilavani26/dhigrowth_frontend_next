"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedNumber } from "@/components/animations/AnimatedNumber";
import { useInView } from "framer-motion";

export default function StatGrid() {
  const [value, setValue] = useState(0);
  const [clientValue, setClientValue] = useState(0);
  const [projectValue, setProjectValue] = useState(0);
  const ref = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setValue(3);
      setClientValue(100);
      setProjectValue(50);
    }
  }, [isInView]);
  // if (isInView && value === 0) {
  //   setValue(3);
  // }

  // if (isInView && clientValue === 0) {
  //   setClientValue(100);
  // }
  // if (isInView && projectValue === 0) {
  //   setProjectValue(50);
  // }
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-[4rem] gap-[3rem] justify-items-center'>
        <div className='text-center'>
          <p className='font-headers text-nowrap mb-4 responsive-heading uppercase'>
            YEARS OF EXPERIENCE
          </p>
          <h2
            ref={ref}
            className="font-numeric flex justify-center leading-none text-transparent bg-clip-text bg-white stroke-primary stroke-2 responsive-numeric"
            style={{ WebkitTextStroke: "2px #2196F3" }}
          >
            <AnimatedNumber
              springOptions={{ bounce: 0, duration: 1000 }}
              value={value}
            />{" "}
            +
          </h2>
        </div>

        {/* Growth in Lead Generation */}
        <div className='text-center'>
          <p className='font-headers text-nowrap mb-4 responsive-heading uppercase'>
            SATISFIED CLIENTS
          </p>
          <h2
            className='font-numeric flex justify-center leading-none text-transparent bg-clip-text bg-white stroke-primary stroke-2 responsive-numeric'
            style={{ WebkitTextStroke: '2px #2196F3' }}
          >
            <AnimatedNumber
              springOptions={{
                bounce: 0,
                duration: 3000,
              }}
              value={clientValue}
            />
            %
          </h2>
        </div>

        {/* Successful Projects Delivered */}
        <div className='text-center'>
          <p className='font-headers text-nowrap mb-4 responsive-heading uppercase'>
            PROJECTS COMPLETED
          </p>
          <h2
            className='font-numeric flex justify-center leading-none text-transparent bg-clip-text bg-white stroke-primary stroke-2 responsive-numeric'
            style={{ WebkitTextStroke: '2px #2196F3' }}
          >
            <AnimatedNumber
              springOptions={{
                bounce: 0,
                duration: 1000,
              }}
              value={projectValue}
            />{' '}
            +
          </h2>
        </div>
      </div>

      <style jsx>{`
        .responsive-heading {
          font-size: clamp(1.25rem, 1.5vw + 1.25rem, 2.25rem);
        }
        .responsive-numeric {
          font-size: clamp(2.25rem, 5vw + 2.25rem, 5.625rem);
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .responsive-heading {
            font-size: clamp(0.875rem, 1vw + 0.875rem, 1.5rem);
          }
          .responsive-numeric {
            font-size: clamp(1.75rem, 4vw + 1.75rem, 4.5rem);
          }
        }
      `}</style>
    </>
  );
}

