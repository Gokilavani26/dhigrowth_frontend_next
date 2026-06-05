"use client";

import { useEffect } from "react";
import {
  motion,
  stagger,
  useAnimate,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  textColor?: string;
  duration?: number;
}
  
export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  textColor,
  duration = 0.5,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: true,
    margin: "-20% 0px",
  });

  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [isInView, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`${textColor ? textColor : "text-white"} opacity-0`}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-0">
        <div className={className}>{renderWords()}</div>
      </div>
    </div>
  );
};