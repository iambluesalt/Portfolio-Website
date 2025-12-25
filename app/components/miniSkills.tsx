import { skillsDataObj } from "~/shared/skillsData";

const MiniSkills = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {skillsDataObj.map((skill) => (
                    <div
                        key={skill.name}
                        className="group relative cursor-default flex flex-col items-center justify-center gap-1.5 w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm ring-1 ring-black/5 dark:ring-white/5 hover:shadow-md hover:border-emerald-400/60 dark:hover:border-emerald-500/50 transition-all duration-200"
                    >
                        <div className="w-8 h-8 flex items-center justify-center relative">
                            <img
                                src={skill.src as string}
                                alt={skill.name}
                                className="object-contain w-full h-full dark:hidden"
                            />
                            <img
                                src={skill.dark as string}
                                alt={skill.name}
                                className="object-contain w-full h-full hidden dark:block absolute top-0 left-0"
                            />
                        </div>
                        <p className="text-[11px] font-medium text-center truncate text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniSkills;
