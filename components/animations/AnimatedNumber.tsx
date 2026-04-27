"use client";

import { useEffect, ElementType } from "react";
import { motion, useSpring, useTransform, SpringOptions } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedNumberProps {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  as?: ElementType;
}

export function AnimatedNumber({
  value,
  className,
  springOptions,
  as: Component = "span",
}: AnimatedNumberProps) {
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <Component className={cn("tabular-nums", className)}>
      <motion.span>{display}</motion.span>
    </Component>
  );
}
