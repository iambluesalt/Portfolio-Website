import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaYoutube, FaHackerrank, FaSpotify, FaDeviantart} from "react-icons/fa";
import { SiLeetcode, SiChessdotcom } from "react-icons/si";

const accounts = [
    {
        name: "GitHub",
        logo: IoLogoGithub,
        needsFlip: false,
        link: "https://github.com/fudge-fantastic",
        description: "A graveyard of unfinished projects, questionable commits, and occasional strokes of genius. Step in, but don’t trip over the technical debt."
    },
    {
        name: "LinkedIn",
        logo: FaLinkedin,
        needsFlip: false,
        link: "https://www.linkedin.com/in/aaditya-pandagle-0aa748238/",
        description: "Where I pretend to be a serious professional with ambitions bigger than my attention span. Endorse me for ‘Procrastination’ and ‘Googling Errors’ while you’re here."
    },
    {
        name: "Instagram",
        logo: FaInstagram,
        needsFlip: true,
        link: "https://www.instagram.com/fudge_fantastic/",
        description: "A black hole of dopamine, cursed memes, and AI-generated degeneracy. Sometimes I post. Mostly, I just lose brain cells."
    },
    {
        name: "YouTube",
        logo: FaYoutube,
        needsFlip: false,
        link: "https://www.youtube.com/@aadityapandagle",
        description: "I make lofi and orchestral soundtracks that make you question your life choices at 2 AM. Listen responsibly—side effects include nostalgia, existential dread, and unexpected tears."
    },
    {
        name: "LeetCode",
        logo: SiLeetcode,
        needsFlip: false,
        link: "https://leetcode.com/u/fudge_fantastic/",
        description: "Solving algorithm problems like a warrior, only to get betrayed by a hidden test case. A daily reminder that computers are heartless."
    },
    {
        name: "HackerRank",
        logo: FaHackerrank,
        needsFlip: false,
        link: "https://www.hackerrank.com/profile/adi_pandagle",
        description: "Grinding problems for imaginary internet points and self-worth validation. You know, the usual."
    },
    {
        name: "Spotify",
        logo: FaSpotify,
        needsFlip: true,
        link: "https://open.spotify.com/user/ih50xzwm6ho1jpcbnbrwm880r",
        description: "A playlist so deep, you might find your repressed memories in there. Expect melancholy, existential bangers, and a mid-life crisis in musical form."
    },
    {
        name: "DeviantArt",
        logo: FaDeviantart,
        needsFlip: false,
        link: "https://www.deviantart.com/scorpoking",
        description: "Where I draw naked people in the name of ‘art’ and ‘anatomy studies.’ If you’re here to judge, at least leave a like first."
    },
    {
        name: "Chess.com",
        logo: SiChessdotcom,
        needsFlip: false,
        link: "https://www.chess.com/member/scorpo15",
        description: "I play chess like I live life—impulsively, recklessly, and with zero long-term strategy. Catch me blundering my queen in record time."
    }
];


export default function MiniHobbies() {
    return (
        <div className="md:mx-6 mx-3 cursor-default">
            <div className="flex items-center gap-2 md:gap-4 my-8 mx-1">
                <div className="flex-1 border-t border-zinc-900 dark:border-zinc-300"></div>
                <div className="text-center">
                    <h1 className="text-lg md:text-2xl font-semibold">Let’s Merge (No Conflicts, Hopefully)</h1>
                    <p className="md:text-[13px] text-[10px] dark:text-zinc-400">
                    Just two chaotic minds committing to something questionable.
                    </p>
                </div>
                <div className="flex-1 border-t border-zinc-900 dark:border-zinc-300"></div>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {accounts.map((account, index) => {
                    const LogoIcon = account.logo;
                    return (
                        <a
                            key={index}
                            href={account.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" dark:border dark:hover:border-zinc-600 border-zinc-200 p-4 dark:border-zinc-900 rounded-md shadow-sm dark:bg-zinc-900 hover:shadow-md hover:shadow-zinc-500 shadow-zinc-500 duration-150 dark:shadow-none relative overflow-hidden"
                        >
                            <h2 className="font-semibold md:text-lg text-base">{account.name}</h2>
                            <p className="md:text-sm text-xs text-gray-700 dark:text-gray-300 mr-20">{account.description}</p>

                            {/* Background Icon with Conditional Flip */}
                            <LogoIcon className={`-rotate-12 absolute bottom-[-20px] right-[-18px] text-[120px] opacity-30 dark:opacity-15 
                                ${account.needsFlip ? "scale-x-[-1]" : ""}`} />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
