"use client";

import { motion } from "framer-motion";
import { DURATION, EASE } from "@/lib/motion";

/** يُعاد تركيبه عند كل تنقّل بين الصفحات، فيعطي دخولاً ناعماً لكل صفحة */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.base, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
