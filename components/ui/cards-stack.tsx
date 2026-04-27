"use client";

import { forwardRef, ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ---------------- ContainerScroll ---------------- */

interface ContainerScrollProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const ContainerScroll = forwardRef<HTMLDivElement, ContainerScrollProps>(
  ({ children, className, style, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full", className)}
        style={{ perspective: "1000px", ...style }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

ContainerScroll.displayName = "ContainerScroll";

/* ---------------- CardSticky ---------------- */

interface CardStickyProps {
  index: number;
  incrementY?: number;
  incrementZ?: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const CardSticky = forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      incrementY = 10,
      incrementZ = 10,
      children,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const y = index * incrementY;
    const z = index * incrementZ;

    return (
      <motion.div
        ref={ref}
        layout="position"
        style={{
          top: y,
          z,
          backfaceVisibility: "hidden",
          overflow: "hidden",
          transformStyle: "preserve-3d",
          willChange: "transform",
          ...style,
        }}
        className={cn("sticky", className)}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
);

CardSticky.displayName = "CardSticky";

export { ContainerScroll, CardSticky };