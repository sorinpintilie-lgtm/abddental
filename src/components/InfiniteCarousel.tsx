"use client";

import { motion } from "framer-motion";

interface CarouselItem {
  text: string;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  speed?: number;
}

export function InfiniteCarousel({ items, speed = 30 }: InfiniteCarouselProps) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -100 * items.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="glass noise flex-shrink-0 rounded-2xl bg-gradient-to-br from-white to-[color:var(--accent)]/5 px-8 py-4"
          >
            <p className="whitespace-nowrap text-base font-semibold text-[color:var(--foreground)]">
              {item.text}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
