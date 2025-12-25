import { SomeProjects } from "~/shared/projectsData";
import { Badge } from "./ui/badge";
import { FaLink } from "react-icons/fa";
import { Link } from "@remix-run/react";

// eslint-disable-next-line react/prop-types
export default function MiniProjects({ limit = 3 }) {
    const projectContainerStyle = "group relative cursor-pointer flex flex-col items-start justify-between gap-2 min-h-[140px] py-4 sm:py-5 px-5 sm:px-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm ring-1 ring-black/5 dark:ring-white/5 hover:shadow-lg hover:border-emerald-400/60 dark:hover:border-emerald-500/50 transition-all duration-200";
    const featuredProjects = SomeProjects.filter(project => project.featured && !project.legendary).slice(0, limit);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 relative">
                {featuredProjects.map((project, index) => (
                    <Link to={project.link.playStore || project.link.github || "#"} target="_blank" key={index} className={`${projectContainerStyle} relative`} rel="noreferrer">
                        {project.isLive && (
                            <span className="absolute -top-1 -right-0 flex h-3 w-3 z-10">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                        )}
                        <div className="flex justify-between items-center mb-2 w-full">
                            <div className="flex items-baseline gap-1 decoration-[1.3px]">
                                <h2 className="font-heading font-semibold text-[15px] md:text-[16px] tracking-tight text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{project.name}</h2>
                                <FaLink className="text-[11px] opacity-70" />
                            </div>
                            <span className="text-[10px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{project.status}</span>
                        </div>
                        <p className="text-[12px] md:text-[13px] text-zinc-600 dark:text-zinc-300 line-clamp-5 leading-relaxed mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mt-auto">
                            {project.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} className="mr-2 mb-1 text-[10px] md:text-[11px] font-semibold bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
            {/* Center */}
            <div className="text-center">
                <Link to="/projects" className="text-xs md:text-medium font-medium text-emerald-600 dark:text-emerald-400 hover:underline">View all</Link>
            </div>

            {featuredProjects.length === 0 && (
                <div className="text-center text-zinc-400 mt-4 text-sm">No featured projects available.</div>
            )}
        </div>
    );
}
