import bambu from "../../assets/projects/bambu.png";



export function Project(props: { children: React.ReactNode }) {
  return (
    <div className="w-96 h-96 relative">
        <div className=" bg-card w-96 h-96 rounded-xl z-50 opacity-100 absolute border-border border">
            <div className="relative w-96 h-96">
                {props.children}
            </div>
        </div>
    </div>
  );
}


export function ProjectImage({ image }) {
    console.log(image);
    return (
        <div className="rounded-xl">
            <img src={image.src} alt="project" className="w-auto rounded-t-xl pr-[2px]"/>
        </div>
    );
}

export function ProjectTitle(props: { children: React.ReactNode }) {
    return (
        <div className="text-4xl text-center mt-2">
            {props.children}
        </div>
    );
}

export function ProjectDescription(props: { children: React.ReactNode }) {
    return (
        <div className="text-xl text-center mt-6 text-card-foreground">
            {props.children}
        </div>
    );
}

export function ProjectsHover(props: { children: React.ReactNode }) {
    return (
        <div className="">
                    {props.children}
        </div>
    );
}