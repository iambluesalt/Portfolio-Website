import { SomeProjects } from "~/shared/projectsData";
import { DialogTrigger, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Link } from "@remix-run/react";
import { FaUserSecret } from "react-icons/fa6";

const birthYear = 2003;
const currentYear = new Date().getFullYear();
const yearsOfExistence = currentYear - birthYear;

const certificates = {
    Udemy: {
        "Python for Data Science and Machine Learning Bootcamp": "https://www.udemy.com/certificate/UC-49df6543-c84b-4e24-9e04-94b9ef46489c/",
        "Python Data Structures and Algorithm": "https://www.udemy.com/certificate/UC-ff8b888b-9d9b-4836-a91c-d6a555dba7d0/",
        "Amazon Web Services-Solution Architect.": "https://www.udemy.com/certificate/UC-eb4ccb8a-89b7-4351-9267-ccb481d40cb3/"
    },
    Kaggle: {
        "Machine Learning Beginner": "https://www.kaggle.com/learn/certification/darklord176/intro-to-machine-learning",
        "Machine Learning Intermediate": "https://www.kaggle.com/learn/certification/darklord176/intermediate-machine-learning"
    },
    HackerRank: {
        "SQL Beginner": "https://www.hackerrank.com/certificates/3688240601e6",
        "SQL Intermediate": "https://www.hackerrank.com/certificates/df1cb6f3455c"
    },
};

const totalCertifications = Object.values(certificates)
    .flatMap(certs => Object.keys(certs)).length;

const projectCategories = SomeProjects.reduce((acc: Record<string, number>, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
}, {});

const cardData = [
    {
        title: 'Years Of Existence',
        value: yearsOfExistence.toString(),
        description: (
            <div className="mt-2 space-y-4 text-zinc-700 dark:text-zinc-200 text-sm leading-relaxed">
                <p>
                    Born in <strong className="font-semibold text-rose-500">Mumbai</strong>: December 2002, then exiled to
                    <span className="text-rose-500 font-semibold"> Pune</span> in 2006.
                </p>
                <p>
                    School? A fever dream. Had a crush so bad I could’ve written a novel but they wouldn’t
                    even notice me if I was on fire.
                </p>
                <p>
                    Junior college was a blur—I pulled up <strong className="text-emerald-500">2/9 times</strong> and still coasted. Senior college? Chaos—at least I found a crew.
                </p>
                <p>
                    Now I spend my days getting roasted by
                    <code className="mx-1 rounded bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 text-[11px]">error messages</code>.
                </p>
            </div>
        ),
    },
    {
        title: 'Years Of Experiences',
        value: '?',
        description: (
            <div className="mt-2 space-y-4 text-center text-zinc-700 dark:text-zinc-200">
                <FaUserSecret className="text-6xl mx-auto" />
                <p>Shhhhhhhhh...It&apos;s a secret</p>
            </div>
        ),
    },
    {
        title: 'Projects Completed',
        value: `${SomeProjects.length}+`,
        description: (
            <div className="space-y-2 text-sm">
                <p className="text-center md:text-left text-zinc-600 dark:text-zinc-300">To view all projects, <Link to="/projects" className="font-semibold hover:underline">click here</Link></p>
                {Object.entries(projectCategories).map(([category, count]) => (
                    <p key={category} className="text-zinc-700 dark:text-zinc-300">
                        <strong className="text-emerald-500">{category}:</strong> {count} projects
                    </p>
                ))}
            </div>
        ),
    },
    {
        title: 'Certifications',
        value: `${totalCertifications}`,
        description: (
            <div className="space-y-5 text-sm">
                {Object.entries(certificates).map(([platform, certs]) => (
                    <div key={platform} className="space-y-1">
                        <h3 className="font-heading font-semibold text-emerald-500">{platform}</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {Object.entries(certs).map(([title, link]) => (
                                <li key={title}>
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                                        {title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        ),
    },
];

export default function Cards() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {cardData.map((card) => (
                <Dialog key={card.title}>
                    <DialogTrigger asChild>
                        <div className="group relative flex flex-col items-center justify-center rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 p-4 sm:p-5 text-center cursor-pointer shadow-sm ring-1 ring-black/5 dark:ring-white/5 transition hover:shadow-md">
                            <h2 className="font-heading md:text-xl text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">{card.value}</h2>
                            <p className="mt-1 text-[11px] md:text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400 font-medium">{card.title}</p>
                            {/* Removed hover gradient overlay */}
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-h-[85vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="tracking-tight">{card.title}</DialogTitle>
                            <DialogDescription>{card.description}</DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
}