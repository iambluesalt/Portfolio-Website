import { skillsDataObj } from "~/shared/skillsData";

const MiniSkills = () => {
    return (
        <div className="md:mx-6 mx-3 cursor-default">
            <div className="flex items-center gap-2 md:gap-4 my-8 mx-1">
                <div className="flex-1 border-t border-zinc-900 dark:border-zinc-300"></div>
                <div className="text-center">
                    <h1 className="text-lg md:text-xl font-semibold">Technical Skills</h1>
                    <p className="text-[13px] dark:text-zinc-400">
                        Somethings I&apos;m good at
                    </p>
                </div>
                <div className="flex-1 border-t border-zinc-900 dark:border-zinc-300"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {skillsDataObj.map((skill) => (
                    <div 
                        key={skill.name} 
                        className="cursor-default dark:shadow-none dark:hover:border-zinc-600 shadow-sm hover:shadow-md hover:shadow-zinc-500 shadow-zinc-500 duration-150 flex flex-col items-center justify-center gap-2 border dark:bg-zinc-900 rounded-md w-20 h-20"
                    >
                        <div className="w-9 h-9 flex items-center justify-center">
                            <img 
                                src={skill.src} 
                                alt={skill.name} 
                                className="object-contain w-full h-full" 
                            />
                        </div>
                        <p className="text-[11px] font-semibold text-center truncate">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MiniSkills;
