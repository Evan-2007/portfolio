import Card from "./card";
import React from "react";
import { CardContainer, CardItem, CardBody } from "./3d-card";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="w-screen h-full bg-gray-950 flex justify-center absolute z-20">
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.1 }} // Adjust the duration as needed
      >
        <Card />
      </motion.div>
    </div>
  );
}
