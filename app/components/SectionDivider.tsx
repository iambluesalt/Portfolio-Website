interface SectionDividerProps {
  label?: string;
  className?: string;
}

export function SectionDivider({ label, className = "" }: SectionDividerProps) {
  return (
    <div className={`relative my-20 first:mt-0 ${className}`}>
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-400/70 to-transparent dark:via-zinc-700/90" />
      </div>
      {label && (
        <div className="relative flex justify-center">
          <span className="group inline-flex items-center gap-1 rounded-full border border-zinc-400/70 dark:border-zinc-700/70 bg-white dark:bg-zinc-900 md:px-5 px-4 py-1 md:py-1.5 text-[14px] font-medium tracking-wide text-zinc-600 dark:text-zinc-300 shadow-sm">
            {label}
            <span className="size-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 animate-pulse" />
          </span>
        </div>
      )}
    </div>
  );
}
