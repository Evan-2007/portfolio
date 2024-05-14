import Card, {Other} from "./card";
import React, {useEffect} from "react";
import { CardContainer, CardItem, CardBody } from "./3d-card";
import { motion, useAnimation } from "framer-motion";

export default function Skills() {

  const controls = useAnimation();
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills-container');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isInView) {
          controls.start({ opacity: 1 });
        } else {
          controls.start({ opacity: 0 });
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="w-screen h-fit bg-gray-950 flex justify-center z-30 absolute bg-opacity-70" class="skills">
      <motion.div
        initial={{ opacity: 1, }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }} // Add this line
        transition={{ duration: 2, delay: 0.1 }}
      >
        <div className="z-50">
          <div className="text-center text-5xl mt-12 md:text-8xl text-gray-300 mb-10 font-rubik z-50">My Skills:</div>
          <div className="text-2xl mt-8 md:text-3xl lg:text-4xl text-left ml-9 text-gray-300 font-rubik">Languages/Frameworks:</div>
          <Card />
          <div className="text-2xl mt-20 md:text-3xl lg:text-4xl text-left ml-9 text-gray-300 mb-10 font-rubik">Other:</div>
        </div>
        <Other />
      </motion.div>
    </div>
  );
}
