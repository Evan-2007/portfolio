import { motion } from "framer-motion";
import ScrollArrow from "./scrollarrow";
import { Gradiant } from "./gradiant-ball";
import React from "react";
import styles from "../styles/react/gradient.module.css";
import ParticlesBackground from "./ui/particals";

export default function Title() {
  return (
    <div className="w-full h-[100vh]">

      <div className="w-screen h-screen z-5 absolute">
        <ParticlesBackground />
        </div>
      <div className="w-full  absolute">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.1 }} // Adjust the duration as needed
          className="absolute "
        >
          <div className="flex flex-col items-center justify-center h-[70vh] text-center ">
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
      <div className="absolute"></div>
    </div>
  );
}
