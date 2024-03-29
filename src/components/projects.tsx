import React from "react";
import { Project, ProjectImage, ProjectTitle, ProjectDescription } from "../components/ui/project";
import bambu from "../assets/projects/bambu.png";

export default function Projects() {
  return (
    <div className="w-screen h-fit bg-gray-950 flex justify-center z-20 flex-col pt-20 ">
        <p className="text-center text-5xl mt-12 md:text-8xl text-gray-300 mb-10 font-rubik">My Projects</p>
        <div className="mt-16 mb-10 flex justify-center">
            <Project>
                <ProjectImage image={bambu}/>
                <ProjectTitle>
                    Bambu-Link
                </ProjectTitle>
                <ProjectDescription>
                    A nodejs module that allows for easy control of bambu lab printers using mqtt
                </ProjectDescription>
            </Project>

        </div>
    </div>
  );
}
