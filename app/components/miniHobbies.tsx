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
        <div className="space-y-6">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {accounts.map((account, index) => {
                    const LogoIcon = account.logo;
                    return (
                        <a
                            key={index}
                            href={account.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-5 shadow-sm ring-1 ring-black/5 dark:ring-white/5 hover:shadow-md transition"
                        >
                            <h2 className="font-semibold text-base md:text-lg mb-2 tracking-tight">{account.name}</h2>
                            <p className="md:text-sm text-xs text-zinc-600 dark:text-zinc-300 pr-6 leading-relaxed line-clamp-5">{account.description}</p>
                            <LogoIcon className={`-rotate-12 absolute bottom-[-18px] right-[-16px] text-[120px] opacity-20 dark:opacity-10 pointer-events-none transition-transform ${account.needsFlip ? "scale-x-[-1]" : ""}`} />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
