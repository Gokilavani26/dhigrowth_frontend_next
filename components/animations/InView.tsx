"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

type InViewProps = {
  children: ReactNode;
  variants?: Variants;
  transition?: Transition;
  viewOptions?: {
    once?: boolean;
    margin?: string;
  };
};

const defaultVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const InView = ({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
}: InViewProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, viewOptions as any);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default InView;