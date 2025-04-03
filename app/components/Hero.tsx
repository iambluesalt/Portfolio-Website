/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { IoLogoOctocat } from "react-icons/io";
import { FlipWords } from "./ui/flip-words";

export default function Hero() {
    const roles4pc = [
        "Data Scientist",
        "Machine Learning Engineer",
        "Deep Learning Engineer",
        "AI/MLOps Engineer",
        "Potato Debugger",
        "Script Junkie",
        "Runtime Wrecker",
        "Full Stack Data Scientist",
        "Memory Leak Bandit, lol",
        "Git Grimlin",
        "Full-Stack Developer"
    ];

    const roles4mob = [
        "Data Scientist",
        "Full Stack Dev.",
        "Deep Learning Eng.",
        "AI/MLOps Eng.",
        "Potato Debugger",
        "Script Junkie",
        "Full-Stack Dev.",
        "Runtime Wrecker",
        "Git Grimlin",
    ];

    const [roles, setRoles] = useState(roles4pc);
    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                setRoles(roles4mob);
            } else {
                setRoles(roles4pc);
            }
        };

        handleResize(); // Initialize roles based on current screen size
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup event listener
        };
    }, []);

    return (
        <div className="md:flex mx-3 md:mx-6 gap-4 md:pb-2 h-full cursor-default">
            <div className="relative overflow-hidden duration-150 border border-zinc-100 dark:border-zinc-900 dark:shadow-none shadow-sm shadow-zinc-500 rounded-md dark:bg-zinc-900 px-4 md:px-5 py-3 pb-4 lg:w-3/5">
                <h2 className="md:tracking-normal tracking-tighter text-[13px] md:text-[16px]">Hello <span className="md:text-2xl text-lg">👋</span>, I&apos;m{" "}
                    <span className="font-semibold md:text-[26px] text-xl px-1">Aaditya Pandagle.</span> A part-time human,{" "}
                </h2>
                <h2 className="tracking-normal text-[13px] md:text-[16px] relative">and a full-time{" "}
                    <span className="text-xl md:text-[26px] px-1">
                        <FlipWords words={roles} className="font-semibold" />
                    </span>
                </h2>
                <p className=" md:text-base text-[13px] md:pt-5 pt-3 tracking-normal">
                    A <span className="font-semibold text-purple-400">Full-Stack Data Scientist</span> who spends most of my time buried in code, bouncing between projects, and constantly learning something new while letting others collect digital dust 😬. From building full-stack solutions to diving deep into AI, I thrive into breaking things just to make them work even better. 🚀
                </p>
                <IoLogoOctocat className="rotate-12 absolute top-[-10px] right-[-8px] text-[105px] opacity-30 dark:opacity-15" />
                <IoLogoOctocat className="-rotate-[18deg] absolute top-[15px] right-[100px] text-[60px] opacity-0 md:opacity-30 md:dark:opacity-15" />
            </div>

            
            <img
                src="/dog_piano.jpg"
                alt="Aaditya Pandagle"
                // className="rounded-lg md:w-2/5 hidden lg:block h-[215px] object-cover scale-x-[-1]"
                className="rounded-md md:w-2/5 hidden md:h-[220px] lg:block object-cover scale-x-[-1]"
            />
        </div>
    );
}