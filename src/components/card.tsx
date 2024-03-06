import { CardContainer, CardItem, CardBody } from "./3d-card";
import { languages } from "../data/skills";

export default function Card() {
  return (
    <div className="flex flex-row flex-wrap mr-10 ml-10 justify-between">
      {languages.map((language, index) => (
        <CardContainer className="inter-var">
          <CardItem
            key={index}

          >
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <h1 className="text-4xl font-bold text-white">{language.name}</h1>
            </CardBody>
          </CardItem>
        </CardContainer>
      ))}
    </div>
  );
}
