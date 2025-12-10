import Image from "next/image";

export function ProfilePicture() {
  return (
    <div className="w-[10vh] h-[10vh] rounded-full overflow-hidden max-md:mx-5 md:mx-0 md:w-[25vh] md:h-[25vh]">
      <Image priority src={'https://avatars.githubusercontent.com/u/65788884?s=40&v=4'} alt="Profile Picture" width={128} height={128} className="w-full h-full object-cover" />
    </div>
  );
}