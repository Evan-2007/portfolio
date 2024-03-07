import Card, {Other} from "./card";
import React from "react";
import { CardContainer, CardItem, CardBody } from "./3d-card";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="w-screen h-fit bg-gray-950 flex justify-center absolute z-20">
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.1 }} // Adjust the duration as needed
      >
        <div className="text-center text-5xl mt-12 underline md:text-8xl text-gray-300 mb-10 font-mono">My Skills:</div>
        <div className="text-2xl mt-20 underline md:text-3xl lg:text-4xl text-left ml-6 text-gray-300 font-mono">Languages/Frameworks:</div>
        <Card />
        <div className="text-2xl mt-20 underline md:text-3xl lg:text-4xl text-left ml-6 text-gray-300 mb-10 font-mono">Other:</div>
        <Other />
      </motion.div>
    </div>
  );
}
