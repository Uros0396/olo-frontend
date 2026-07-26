"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
};

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
