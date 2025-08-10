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
        "Full-Stack Developer",
        "Generative AI Developer",
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
        "Generative AI Dev.",
    ];

    const [roles, setRoles] = useState(roles4pc);
    useEffect(() => {
        const handleResize = () => {
            setRoles(window.matchMedia("(max-width: 768px)").matches ? roles4mob : roles4pc);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 relative">
                <h1 className="text-2xl font-semibold tracking-tight leading-[1.08] mb-0">
                    Hello <span className="inline-block">👋</span> I&apos;m {" "}
                    <span className="text-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(16,185,129,0.25)]">
                        Aaditya Pandagle
                    </span>
                </h1>
                <h2 className="text-base text-zinc-700 dark:text-zinc-300 mb-5">A part-time human and a full-time <span className="font-semibold">
                    <FlipWords words={roles} className="text-zinc-900 dark:text-zinc-100 md:text-2xl text-xl" />
                </span></h2>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                    A {" "}
                    <span className="font-semibold bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 bg-clip-text text-transparent">
                        tech enthusiast
                    </span>{" "}
                    who spends most of my time buried in code, bouncing between projects, and constantly learning something new while letting others collect digital dust 😬. From building full-stack solutions to diving deep into AI, I thrive on breaking things just to make them work even better.
                </p>
                {/* <IoLogoOctocat className="rotate-12 absolute top-[-14px] right-[-10px] text-[100px] opacity-[0.06] dark:opacity-[0.04]" /> */}
            </div>
            <div className="lg:col-span-5 flex justify-center">
                <img
                    src="/kitty-transparent.gif"
                    alt="Cute transparent kitty"
                    className="hidden lg:block w-40 h-40 xl:w-56 xl:h-56 object-contain drop-shadow-lg"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                />
            </div>
        </section>
    );
}