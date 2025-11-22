import { SpotlightBox } from "@/components/ui/spotlight-box";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";


const skills = [
    { title: "JavaScript/TypeScript", pathToSvg: "/typescript.svg", link: "https://www.typescriptlang.org/" },
    { title: "React/Next.js", pathToSvg: "/nextjs-skill.svg", link: "https://nextjs.org/" },
    { title: "Node.js", pathToSvg: "/node.svg", link: "https://nodejs.org/" },
    { title: "Tailwind CSS", pathToSvg: "/tailwind.svg", link: "https://tailwindcss.com/" },
    { title: "Git", pathToSvg: "/git.svg", link: "https://git-scm.com/" },
    { title: "Docker", pathToSvg: "/docker.svg", link: "https://www.docker.com/" },
    { title: "Tauri", pathToSvg: "/tauri.svg", link: "https://tauri.app/" },
    { title: "Proxmox", pathToSvg: "/proxmox.svg", link: "https://www.proxmox.com/" },
];

export function SkillsBento() {
    return ( 
        <div>
            <SpotlightBox className="mb-4">
                <h2 className="text-2xl font-bold text-white mb-2">Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill) => (
                        <Link key={skill.title} className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 transition-colors duration-200 rounded-lg p-4" href={skill.link} target="_blank">
                            <Image src={skill.pathToSvg} alt={skill.title} className="w-8 h-8 object-contain" width={32} height={32} />  
                            <span className="text-white">{skill.title}</span>
                        </Link>
                    ))}
                </div>
            </SpotlightBox>
        </div>
    );
}