import { useState } from "react";
import { SomeProjects } from "~/shared/projectsData";
import { Badge } from "./ui/badge";
import { FaLink } from "react-icons/fa";
import { Link } from "@remix-run/react";

export default function ProjectsDisplay() {
  const [searchTerm, setSearchTerm] = useState("");
  const projectContainerStyle = "group relative cursor-pointer flex flex-col items-start justify-between gap-2 min-h-[140px] py-5 px-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm ring-1 ring-black/5 dark:ring-white/5 hover:shadow-lg hover:border-emerald-400/60 dark:hover:border-emerald-500/50 transition-all duration-200";

  const explicitWords = ["milf","nsfw", "xxx", "porn", "boobs","boob", "butt", "69", "420", "daddy", "thicc", "sussy", "feet", "hot", "sugar daddy", "sex", "dick"];
  const funnyResponses = [
    "🚨 Whoa there, champ! This ain't that kind of website! 😏",
    "❌ Sorry, but the only thing getting *hot* here is my CPU!",
    "😂 Buddy, this is a code repository, not your private browser tab!",
    "🫣 You tryna find something *spicy*? I respect it, but not here!",
    "💀 Bruh, at least use incognito mode for that!",
    "🥵 The only 'thicc' thing here is my CSS margins!",
    "👀 You got some explaining to do, my friend...",
    "🚀 This is a *professional* place... well, kinda.",
    "🤡 Caught in 4K. I won’t tell… this time.",
  ];

  // Matches the search term with explicit words
  const isExplicit = explicitWords.some(word => searchTerm.toLowerCase().includes(word));
  // Picks a random message from the funnyResponses array
  const randomMessage = funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
  // Filter projects based on the search term
  const filteredProjects = SomeProjects.filter((project) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      project.name.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="w-full">
      {/* Search Input */}
      <div className="mb-3 md:mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-xs md:text-sm w-full p-2 border rounded-md bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 outline-none"
          placeholder="Search projects by name, description, or tags..."
        />
      </div>

      {/* Explicit Content Message */}
      {isExplicit ? (
        <div className="text-center text-red-500 dark:text-red-400 mt-4 text-lg font-semibold">
          {randomMessage}
        </div>
      ) : (
        <>
          {/* Projects Display */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 relative">
            {filteredProjects.map((project, index) => (
              <Link to={project.link.github} target="blank" key={index} className={`${projectContainerStyle} relative`}>
                {/* Live Indicator */}
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
                    <Badge key={tagIndex} className="mr-2 mb-1 text-[10px] md:text-[11px] font-medium bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {/* No Results Message (only if it's not an explicit search) */}
          {filteredProjects.length === 0 && (
            <div>
              <div className="rotate-90 flex justify-center items-center text-9xl p-8">
                :(
              </div>
              <div className="flex justify-center items-center text-zinc-400">
                No projects found matching &quot;{searchTerm}&quot;.
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
