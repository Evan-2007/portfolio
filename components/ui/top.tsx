'use client'

import AnimatedBall from "@/components/ui/gradient";

import { motion, stagger, useAnimate, useInView } from "framer-motion";
import ScrollArrow from "@/components/ui/scroll-arrow";

export default function Top() {
  const words = [
    {
      text: "A",
      className: "text-xl",
    },
    {
      text: "Highschool",
      className: "text-xl",
    },
    {
      text: "Student",
      className: "text-xl",
    },
    {
      text: "Currently",
      className: "text-xl",
    },
    {
      text: "Learning",
      className: "text-xl",
    },

    {
      text: "Javascript",
      className: "text-blue-500 dark:text-blue-500 text-xl",
    },
  ];

  return (
    <div className="w-screen h-[90vw]">
        <AnimatedBall />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }} // Adjust the duration as needed

      >
        <div className="flex flex-col items-center justify-center h-[40rem] text-center ">
          <div className="text-7xl font-bold text-gray-800 dark:text-white z-20 text-center">
            Evan Cooper
          </div>
          <div className="text-3xl text-gray-700 dark:text-gray-300 mt-4 z-20">
            A Highschool Student from Northern California
          </div>
          <div className="text-2xl text-gray-600 dark:text-gray-400 mt-2 z-20">
            Currently Learning Javascript and React
          </div>
        </div>
        <div className="w-screen flex justify-center">
            <ScrollArrow />
        </div>
      </motion.div>
    </div>
  );
}
