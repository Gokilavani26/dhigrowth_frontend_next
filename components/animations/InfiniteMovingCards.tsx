"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type CardItem = {
  name: string;
  quote: string;
  img: string;
};

type Props = {
  items: CardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLUListElement | null>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);

    if (scrollerRef.current.children.length === items.length) {
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
    }

    // direction
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "normal" : "reverse"
    );

    // speed
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

    containerRef.current.style.setProperty(
      "--animation-duration",
      duration
    );

    setStart(true);
  }, [direction, speed, items.length]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        style={{
          animationDirection: 'var(--animation-direction)',
          willChange: "transform",
        }}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="relative w-[380px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px]"
          >
            <blockquote>
              <div className="relative z-20 flex flex-col items-start">

                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="mb-2 rounded-md object-cover"
                />

                <span className="flex flex-col gap-1 font-bold">
                  <span className="text-sm leading-[1.6] text-neutral-800">
                    {item.name}
                  </span>
                </span>
              </div>

              <span className="relative z-20 text-sm leading-[1.6] text-neutral-800">
                {item.quote}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};