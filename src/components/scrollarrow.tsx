import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import styles from "../styles/react/animations.module.css";

export default function ScrollArrow() {
  return (
    <div className="absolute flex items-center justify-center">
      <div className="animate-bounce w-6 h-6 flex justify-center">
        <div className="absolute">
          <ChevronDown size={160} strokeWidth={0.5} color="white" />
        </div>
        <div className={styles.fade}>
          <ChevronDown size={160} strokeWidth={0.5} color="white" />
        </div>
      </div>
    </div>
  );
}
