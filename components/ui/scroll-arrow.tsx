import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollArrow() {
  return (
    <div className="absolute flex items-center justify-center">
      <div className="animate-bounce w-6 h-6">
        <div className="absolute">
          <ChevronDown size={160} strokeWidth={0.5} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0.5, 0], y: [0, -30] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 0 }}
          className="absolute"
        >
          <ChevronDown size={160} strokeWidth={0.5} />
        </motion.div>
      </div>
    </div>
  );
}

{
  /* <div className="animate-bounce w-6 h-6">
<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
</svg>
</div> */
}
