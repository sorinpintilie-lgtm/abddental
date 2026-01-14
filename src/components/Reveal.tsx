"use client";

import * as React from "react";
import { motion, useInView, type Variants } from "framer-motion";

type Direction = "left" | "right" | "up" | "down";

export type RevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  distance?: number;
};

function getHiddenTransform(direction: Direction, distance: number) {
  switch (direction) {
    case "left":
      return { x: -distance, y: 0 };
    case "right":
      return { x: distance, y: 0 };
    case "down":
      return { x: 0, y: distance };
    case "up":
    default:
      return { x: 0, y: -distance };
  }
}

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  distance = 18,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once,
    margin: "-12% 0px -12% 0px",
    amount: 0.25,
  });

  const hiddenTransform = getHiddenTransform(direction, distance);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      ...hiddenTransform,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

