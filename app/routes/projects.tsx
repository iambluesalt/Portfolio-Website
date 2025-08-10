import ProjectsDisplay from "~/components/ProjectContent";
import Transition from "~/components/transition";

export default function Projects() {
    return (
        <Transition>
            <div className="relative min-h-screen flex flex-col dark:bg-zinc-950 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-35 dark:opacity-30 bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_82%_65%,rgba(45,212,191,0.18),transparent_55%)]" />
                <main className="w-full flex-1 px-4 sm:px-6 md:px-8 pt-24 pb-24 mx-auto max-w-7xl">
                    <ProjectsDisplay />
                </main>
            </div>
        </Transition>
    );
}