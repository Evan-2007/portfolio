import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import styles from "@/styles/animations.module.css";

export default function ScrollArrow() {
  return (
    <div className="absolute flex items-center justify-center">
      <div className="animate-bounce w-6 h-6 flex justify-center">
        <div className="absolute">
          <ChevronDown size={160} strokeWidth={0.5} />
        </div>
        <div className={styles.fade}>
          <ChevronDown size={160} strokeWidth={0.5} />  
        </div>
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
