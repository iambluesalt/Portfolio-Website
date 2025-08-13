import Transition from "~/components/transition";

export default function Blogs() {
  return (
    <Transition>
      <div className="relative min-h-screen flex flex-col dark:bg-zinc-950 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-35 dark:opacity-30 bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_82%_65%,rgba(45,212,191,0.18),transparent_55%)]" />
  <div className="w-full flex-1 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-28 md:pt-32 pb-24 space-y-10 flex flex-col">
          <div className="flex-1 grid place-items-center">
            <div className="w-full rounded-xl border border-dashed border-emerald-400/50 dark:border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-900/10 p-6 md:p-10 text-center space-y-4">
              <p className="font-mono text-xs md:text-sm text-emerald-700 dark:text-emerald-300">
              </p>
              <h2 className="font-heading text-lg md:text-xl font-semibold bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 bg-clip-text text-transparent">
                Blog renderer warming up...
              </h2>
              <ul className="text-left inline-block text-[12px] md:text-sm text-zinc-600 dark:text-zinc-400 space-y-1 font-mono">
                <li>- drafting topics: ['vector stores', 'eval harnesses', 'prompt diffing']</li>
                <li>- deleting half-written hot takes...</li>
                <li>- resisting urge to reinvent markdown parser</li>
                <li>- console.log('ship something already')</li>
              </ul>
              <p className="text-[11px] md:text-xs text-zinc-500 dark:text-zinc-500">
                If you came here for dopamine: check back after a few git commits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
