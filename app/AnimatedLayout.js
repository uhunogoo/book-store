'use client'
import React from "react";

import { MotionBlock } from "@/components/MotionBlock/MotionBlock";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { container } from "./lib/animationsVariants";

function AnimatedLayout({ children }) {
  const route = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <MotionBlock
        key={route}
        initial="closed"
        animate="open"
        exit="exit"
        variants={container}
      >
        { children }
      </MotionBlock>
    </AnimatePresence>
  );
}
 
export default AnimatedLayout;