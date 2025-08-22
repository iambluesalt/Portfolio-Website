import { GoHeartFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="mt-auto w-full border-t border-zinc-200/70 dark:border-zinc-800/60 bg-white dark:bg-zinc-900">
            <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col items-center gap-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px] uppercase tracking-wider">
                        <GoHeartFill className="mr-1 size-3 fill-rose-500" /> fudge-fantastic
                    </span>
                    <a href="https://github.com/fudge-fantastic" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        <FaGithub className="size-4" />
                    </a>
                </div>
                <div className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-500 text-center">
                    I built this sh*t, ME! Brick by brick. <span className="hidden md:inline">|</span> © {new Date().getFullYear()} Aaditya Pandagle
                </div>
            </div>
        </div>
    );
}