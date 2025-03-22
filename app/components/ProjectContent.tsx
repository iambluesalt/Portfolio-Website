import { useState } from "react";
import { SomeProjects } from "~/shared/projectsData";
import { Badge } from "./ui/badge";
import { FaLink } from "react-icons/fa";
import { Link } from "@remix-run/react";

export default function ProjectsDisplay() {
  const [searchTerm, setSearchTerm] = useState("");
  const projectContainerStyle = "cursor-pointer py-3 px-4 rounded-lg border shadow-sm shadow-zinc-600 dark:border-zinc-900 dark:shadow-none dark:bg-zinc-900 hover:shadow-md hover:shadow-zinc-500 duration-150 dark:hover:border-zinc-600";

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
          className="text-xs md:text-sm w-full p-2 border rounded-md bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 outline-none"
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
            {filteredProjects.map((project, index) => (
              <Link to={project.link.github} target="blank" key={index} className={`${projectContainerStyle} relative`}>
                {/* Live Indicator */}
                {project.isLive && (
                  <>
                    <span className="absolute top-[-5px] right-[-5px] h-3 w-3 rounded-full bg-zinc-900 animate-ping dark:bg-zinc-200"></span>
                    <span className="absolute top-[-5px] right-[-5px] h-3 w-3 rounded-full bg-zinc-900 dark:bg-zinc-200"></span>
                  </>
                )}
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-baseline gap-1 decoration-[1.3px]">
                    <h2 className="font-semibold text-[17px] md:text-lg">{project.name}</h2>
                    <FaLink className="text-[10px] md:text-[12px]" />
                  </div>
                  <span className="text-xs font-semibold">{project.status}</span>
                </div>
                <p className="md:text-sm text-xs dark:text-zinc-400 line-clamp-5">{project.description}</p>
                <div className="my-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} className="tag mr-2 mb-1 text-white dark:text-black text-[11px] md:text-xs">
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
