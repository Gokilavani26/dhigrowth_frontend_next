"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

const CustomScrollWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative h-full w-full">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-primary z-50"
        style={{ width }}
      />

      {/* Page content */}
      <div className="hide-scrollbar">
        {children}
      </div>
    </div>
  );
};

export default CustomScrollWrapper;