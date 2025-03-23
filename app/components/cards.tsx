import { SomeProjects } from "~/shared/projectsData";
import { DialogTrigger, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Link } from "@remix-run/react";
import { FaQuestionCircle } from "react-icons/fa";

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
            <div className="mt-2 space-y-4 text-gray-800 dark:text-gray-200 text-xs md:text-base text-justify">
                <p>
                    Born in <strong className="font-semibold text-red-500">Mumbai</strong>: December 2002, then got exiled to
                    <span className="text-red-500 font-semibold"> Pune</span> in 2006, probably because fate needed some entertainment.
                </p>
                <p>
                    School? A fever dream. Had a crush so bad I could’ve written a novel about them, but they wouldn’t
                    even notice me if I was on fire. <em className="text-gray-500">Tragic.</em>
                </p>
                <p>
                    Junior college was a glorified scam—I pulled up <strong className="text-green-500"> 2 out of 9 times </strong>
                    and somehow still got by. Senior college? Absolute madness. Not in terms of career, but at least I found
                    a crew of lovable idiots to survive with.
                </p>
                <p>
                    Now, I spend my days getting violated by
                    <code className="text-zinc-900 bg-zinc-200 dark:bg-zinc-900 dark:text-white p-1 rounded-md mx-1">error messages</code>
                </p>
            </div>
        ),
    },
    {
        title: 'Years Of Experiences',
        value: '?',
        description: (
            <div className="mt-2 space-y-4 text-gray-800 dark:text-gray-200 text-xs md:text-base text-center">
                
                <FaQuestionCircle className="text-6xl mx-auto" />
            </div>
        ),
    },
    {
        title: 'Projects Completed',
        value: `${SomeProjects.length}+`,
        description: (
            <div className="space-y-1 text-justify text-xs md:text-base">
                <p className="text-sm mb-4 text-center md:text-left">To view all projects, <Link to="/projects" className="font-semibold hover:underline ">click here</Link></p>
                {Object.entries(projectCategories).map(([category, count]) => (
                    <p key={category} className="text-gray-700 dark:text-gray-300">
                        <strong className="text-green-500 text-sm md:text-base">{category}:</strong> {count} projects
                    </p>
                ))}
            </div>
        ),
    },
    {
        title: 'Certifications',
        value: `${totalCertifications}`,
        description: (
            <div className="space-y-4 text-justify text-xs md:text-base">
                {Object.entries(certificates).map(([platform, certs]) => (
                    <div key={platform}>
                        <h3 className="md:text-lg text-base font-semibold text-blue-500 dark:text-blue-400">{platform}</h3>
                        <ul className="text-gray-700 dark:text-gray-300">
                            {Object.entries(certs).map(([title, link]) => (
                                <li key={title}>
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-purple-500 dark:text-purple-400 hover:underline">
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 md:px-6 px-3 py-2">
            {cardData.map((card) => (
                <Dialog key={card.title}>
                    <DialogTrigger asChild>
                        <div className="dark:hover:border-zinc-600 hover:shadow-md hover:shadow-zinc-500 duration-150 flex flex-col items-center justify-center border dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none shadow-sm shadow-zinc-600 rounded-md p-3 w-full text-center cursor-pointer">
                            <h2 className="md:text-xl text-[20px] font-bold text-gray-800 dark:text-white">{card.value}</h2>
                            <p className="md:text-xs text-[10px] text-gray-600 dark:text-white/60 font-semibold">{card.title}</p>
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{card.title}</DialogTitle>
                            <DialogDescription>{card.description}</DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
}