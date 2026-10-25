"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function SocialMediaMarketingMotion({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 24 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}