export default function Header() {
    return (
        <div className="w-screen z-20 pl-2 pr-2 pt-2 flex justify-end absolute">
            {/* <div className="w-fill h-12 bg-slate-700 opacity-30 rounded-xl">

            </div> */}

            <div className="absolute flex mt-5 underline text-slate-400 mr-10">
                <div>
                    Github
                </div>
                <div className="ml-8">
                    Contact Me
                </div>
            </div>
        </div>
    );
}