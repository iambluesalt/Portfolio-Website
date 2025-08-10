import { skillsDataObj } from "~/shared/skillsData";

const MiniSkills = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
                {skillsDataObj.map((skill) => (
                    <div
                        key={skill.name}
                        className="group relative cursor-default flex flex-col items-center justify-center gap-2 w-20 h-20 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 backdrop-blur shadow-sm ring-1 ring-black/5 dark:ring-white/5 hover:shadow-md transition"
                    >
                        <div className="w-9 h-9 flex items-center justify-center relative">
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
                        <p className="text-[11px] font-medium text-center truncate">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniSkills;
