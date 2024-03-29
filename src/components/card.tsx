
import { Card as CardContainer, CardContent as CardBody } from "../components/ui/card";
import { languages } from "../data/skills";

//import svg
import TypeScript from "../assets/TypeScript.svg";
import JavaScript from "../assets/JavaScript.svg";
import Next from "../assets/Next.js.svg";
import Astro from "../assets/Astro.js.svg";
import Nuxt from "../assets/Nuxt.js.svg";
import Nest from "../assets/Nest.js.svg";
import { Languages } from "lucide-react";

export default function Card() {
  return (
    <div className="flex flex-row flex-wrap mr-2 ml-2 md:mr-10 md:ml-10 mt-10 mb-10 justify-center items-start md:mt-10 lg:mt-10 ">
      <CardContent img={TypeScript.src} title="TypeScript" />
      <CardContent img={JavaScript.src} title="JavaScript" />
      <CardContent img={Next.src} title="Next.js" />
      <CardContent img={Astro.src} title="Astro.js" />
      <CardContent img={Nuxt.src} title="Nuxt.js" />
      <CardContent img={Nest.src} title="Nest.js" />

    </div>
  );
}


import linux from "../assets/linux.svg";
import git from "../assets/git.svg";
import tailwind from "../assets/tailwind.svg";
import docker from "../assets/docker.svg";
import cloudflare from "../assets/cloudflare.svg";
import digitalOcean from "../assets/digitalOcean.svg";
import vercel from "../assets/vercel.svg";
import railway from "../assets/railway.svg";
import { motion } from "framer-motion";


export function Other() {
  return (

    <div className="flex flex-row flex-wrap mr-2 ml-2 md:mr-10 md:ml-10 mt-10 mb-10 justify-center items-start md:mt-10 lg:mt-10 ">
      <CardContent img={linux.src} title="Linux" />
      <CardContent img={git.src} title="Git" />
      <CardContent img={tailwind.src} title="Tailwind" />
      <CardContent img={docker.src} title="Docker" />
      <CardContent img={cloudflare.src} title="Cloudflare" />
      <CardContent img={digitalOcean.src} title="DigitalOcean" />
      <CardContent img={vercel.src} title="Vercel" />
      <CardContent img={railway.src} title="Railway" />
    </div>
  );
}


function CardContent(props: { img: string; title: string }) {
  return (
      <div
      className="w-fit h-fit z-40"
      >
      <CardContainer  className="pt-5 pb-5 flex justify-center flex-col align-middle text-center mr-3 ml-3 mb-6 items-center rounded-xl z-30">
        <CardBody className="flex flex-col justify-center text-center align-middle items-center z-30">
          <img src={props.img} alt="" className="h-20 w-20 z-30" />
          <h1 className="lg:text-4xl lg:w-[240px] md:w-[140px] sm:w-[150px] text-xl w-[120px] mt-6 font-bold text-white z-30">{props.title}</h1>
        </CardBody>
      </CardContainer>
      </div>
  );
}

//bg-gray-50 relative group/card  dark:hover:shadow-2xl pt-5 pb-5 dark:hover:shadow-emerald-500/[0.1]  dark:bg-black dark:border-white/[0.2] border-black/[0.1] flex justify-center flex-col align-middle text-center mr-3 ml-3 mb-6 items-center h-auto rounded-xl border 