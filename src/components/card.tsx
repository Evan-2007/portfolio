import { CardContainer, CardItem, CardBody } from "./3d-card";
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
    <div className="flex flex-row flex-wrap mr-10 ml-10 mt-20 mb-10 justify-center items-start">
      <CardContainer className="inter-var">
        <CardItem>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl pt-5 pb-5 dark:hover:shadow-emerald-500/[0.1]  dark:bg-black dark:border-white/[0.2] border-black/[0.1] flex justify-center flex-col align-middle text-center mr-3 ml-3 mb-6 items-center h-auto rounded-xl border  ">
            <img src={JavaScript.src} alt="" className="h-20 w-20" />
            <h1 className="lg:text-4xl lg:w-[240px] md:w-[140px] sm:w-[150px] text-xl w-[120px] mt-6 font-bold text-white">JavaScript</h1>
          </CardBody>
        </CardItem>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardItem>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl pt-5 pb-5 dark:hover:shadow-emerald-500/[0.1]  dark:bg-black dark:border-white/[0.2] border-black/[0.1] flex justify-center flex-col align-middle text-center mr-3 ml-3 mb-6 items-center h-auto rounded-xl border  ">
            <img src={TypeScript.src} alt="" className="h-20 w-20" />
            <h1 className="lg:text-4xl lg:w-[240px] md:w-[140px] sm:w-[150px] text-xl w-[120px] mt-6 font-bold text-white">TypeScript</h1>
          </CardBody>
        </CardItem>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardItem>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl pt-5 pb-5 dark:hover:shadow-emerald-500/[0.1]  dark:bg-black dark:border-white/[0.2] border-black/[0.1] flex justify-center flex-col align-middle text-center mr-3 ml-3 mb-6 items-center h-auto rounded-xl border  ">
            <img src={Next.src} alt="" className="h-20 w-20" />
            <h1 className="lg:text-4xl lg:w-[240px] md:w-[140px] sm:w-[150px] text-xl w-[120px] mt-6 font-bold text-white">Next.js</h1>
          </CardBody>
        </CardItem>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardItem>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl pt-5 pb-5 dark:hover:shadow-emerald-500/[0.1]  dark:bg-black dark:border-white/[0.2] border-black/[0.1] flex justify-center flex-col align-middle text-center mr-3 ml-3 mb-6 items-center h-auto rounded-xl border  ">
            <img src={Astro.src} alt="" className="h-20 w-20" />
            <h1 className="lg:text-4xl lg:w-[240px] md:w-[140px] sm:w-[150px] text-xl w-[120px] mt-6 font-bold text-white">Astro.js</h1>
          </CardBody>
        </CardItem>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardItem>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl pt-5 pb-5 dark:hover:shadow-emerald-500/[0.1]  dark:bg-black dark:border-white/[0.2] border-black/[0.1] flex justify-center flex-col align-middle text-center mr-3 ml-3 mb-6 items-center h-auto rounded-xl border  ">
            <img src={Nuxt.src} alt="" className="h-20 w-20" />
            <h1 className="lg:text-4xl lg:w-[240px] md:w-[140px] sm:w-[150px] text-xl w-[120px] mt-6 font-bold text-white">Nuxt.js</h1>
          </CardBody>
        </CardItem>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardItem>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl pt-5 pb-5 dark:hover:shadow-emerald-500/[0.1]  dark:bg-black dark:border-white/[0.2] border-black/[0.1] flex justify-center flex-col align-middle text-center mr-3 ml-3 mb-6 items-center h-auto rounded-xl border  ">
            <img src={Nest.src} alt="" className="h-20 w-20" />
            <h1 className="lg:text-4xl lg:w-[240px] md:w-[140px] sm:w-[150px] text-xl w-[120px] mt-6 font-bold text-white">Nest.js</h1>
          </CardBody>
        </CardItem>
      </CardContainer>
    </div>
  );
}
