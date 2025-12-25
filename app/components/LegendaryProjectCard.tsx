import { Badge } from "./ui/badge";

interface LegendaryProjectCardProps {
  project: {
    name: string;
    isLive: boolean;
    description: string;
    status: string;
    tags: string[];
    link: { playStore?: string; github?: string };
  };
  variant?: "showcase" | "grid";
}

export default function LegendaryProjectCard({ project, variant = "showcase" }: Readonly<LegendaryProjectCardProps>) {
  if (variant === "showcase") {
    return (
      <article className="group relative w-full flex flex-col md:flex-row gap-6 md:gap-8 p-4 sm:p-8 md:p-10 rounded-3xl border-1 border-emerald-400/20 dark:border-emerald-500/25 bg-gradient-to-br from-emerald-500/5 via-teal-400/5 to-emerald-600/5 dark:from-emerald-500/10 dark:via-teal-400/10 dark:to-emerald-600/10 bg-white dark:bg-zinc-900 ring-1 ring-emerald-400/10 dark:ring-emerald-500/15 hover:ring-emerald-400/20 dark:hover:ring-emerald-500/25 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">

        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-lg overflow-hidden">
            <img src="/seeding.png" alt="Seeding App" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <h3 className="font-bold text-3xl tracking-wider bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
              {project.name}
            </h3>
            {project.link.playStore && (
              <a
                href={project.link.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-xs shadow-md hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-200 mx-auto md:mx-0"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span>Get it on Play Store</span>
                <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            )}
            {!project.link.playStore && project.link.github && (
              <a
                href={project.link.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-zinc-700 to-zinc-800 hover:from-zinc-800 hover:to-zinc-900 dark:from-zinc-600 dark:to-zinc-700 dark:hover:from-zinc-700 dark:hover:to-zinc-800 text-white font-semibold text-xs shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 mx-auto md:mx-0"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View on GitHub</span>
                <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            )}
          </div>

          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
            {project.tags.map((tag, i) => (
              <Badge key={i} className="text-[11px] font-semibold bg-emerald-600 dark:bg-emerald-500 text-white">
                {tag}
              </Badge>
            ))}
          </div>


        </div>
      </article>
    );
  }

  return (
    <div className="mb-6">
      <article className="group relative flex flex-col md:flex-row gap-4 md:gap-6 p-6 md:p-8 rounded-xl border-1 border-emerald-400/20 dark:border-emerald-500/25 bg-gradient-to-br from-emerald-500/5 via-teal-400/5 to-emerald-600/5 dark:from-emerald-500/10 dark:via-teal-400/10 dark:to-emerald-600/10 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md ring-1 ring-emerald-400/10 dark:ring-emerald-500/15 hover:ring-emerald-400/20 dark:hover:ring-emerald-500/25 transition-all duration-300">

        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-lg overflow-hidden">
            <img src="/seeding.png" alt="Seeding App" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h3 className="font-heading font-bold text-xl md:text-2xl tracking-tight bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                {project.name}
              </h3>
              {project.link.playStore && (
                <a
                  href={project.link.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-[10px] shadow-sm hover:shadow-md hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-200 mx-auto sm:mx-0"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span>Get it on Play Store</span>
                  <svg className="w-2.5 h-2.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
              {!project.link.playStore && project.link.github && (
                <a
                  href={project.link.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gradient-to-r from-zinc-700 to-zinc-800 hover:from-zinc-800 hover:to-zinc-900 dark:from-zinc-600 dark:to-zinc-700 dark:hover:from-zinc-700 dark:hover:to-zinc-800 text-white font-semibold text-[10px] shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 mx-auto sm:mx-0"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View on GitHub</span>
                  <svg className="w-2.5 h-2.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full w-fit mx-auto sm:mx-0">
              {project.status}
            </span>
          </div>

          <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-1 justify-center md:justify-start">
            {project.tags.map((tag, i) => (
              <Badge key={i} className="text-[10px] font-semibold bg-emerald-600 dark:bg-emerald-500 text-white">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}