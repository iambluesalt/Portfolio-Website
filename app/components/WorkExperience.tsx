import { TbMapPin, TbCalendar } from "react-icons/tb";

type WorkEntry = {
  type: "work";
  title: string;
  subtitle: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

type EduEntry = {
  type: "edu";
  title: string;
  subtitle: string;
  location: string;
  period: string;
  note: string;
};

type Entry = WorkEntry | EduEntry;

const timeline: Entry[] = [
  {
    type: "work",
    title: "Wipro (ABB)",
    subtitle: "Project Engineer",
    location: "Pune, India",
    period: "Nov 2024 → Present",
    current: true,
    bullets: [
      "Engineered Python/Bash automation scripts that cut manual monitoring overhead by 30%.",
      "Root-cause analysis on production failures — 25% reduction in MTTR across L3/L4 fixes.",
      "Optimised API-level communication within enterprise architectures, improving runtime stability by 15%.",
      "Replicated bugs in sandbox environments alongside core dev teams for continuous delivery.",
    ],
  },
  {
    type: "work",
    title: "NSArrows Innovations",
    subtitle: "Data Science Intern",
    location: "Pune, India",
    period: "Jun 2024 → Sep 2024",
    bullets: [
      "FastAPI + MongoDB service extracting structured data from 500+ PDFs — processing time down 40%.",
      "End-to-end Python pipeline for video transcription and multilingual voice synthesis (3+ languages).",
      "Semantic search recommendation engine using Qdrant and MongoDB vector embeddings.",
    ],
  },
  {
    type: "edu",
    title: "Imarticus Learning",
    subtitle: "PGP in Data Science & Analytics",
    location: "Pune, India",
    period: "2023 → 2024",
    note: "Self-inflicted. Survived.",
  },
  {
    type: "edu",
    title: "Modern College of Commerce & CS",
    subtitle: "BBA Computer Application — CGPA 8.61",
    location: "Pune University",
    period: "2020 → 2023",
    note: "Redemption arc, as covered in the bio.",
  },
  {
    type: "edu",
    title: "PDEA's Shri Mhalsakant Vidyalaya",
    subtitle: "Senior Secondary (HSC)",
    location: "Pune, India",
    period: "2018 → 2020",
    note: "55.69%. Character development. We move.",
  },
  {
    type: "edu",
    title: "S.P.M English Medium School",
    subtitle: "High School (SSC)",
    location: "Nigdi, Pune",
    period: "2007 → 2018",
    note: "69% and 11 years of plot setup. Nice.",
  },
];

export function WorkExperience() {
  return (
    <section>
      <div className="relative">
        {/* Vertical spine */}
        <div
          className="absolute left-[7px] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, rgb(16 185 129) 8%, rgb(16 185 129 / 0.5) 92%, transparent)" }}
        />

        <div className="space-y-6">
          {timeline.map((entry, i) => (
            <div key={i} className="relative pl-8 flex items-stretch">
              {/* Timeline dot — centered on the card */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
                {entry.type === "work" && entry.current ? (
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500" />
                  </span>
                ) : (
                  <span className="h-4 w-4 rounded-full border-2 border-emerald-500/60 bg-white dark:bg-zinc-950" />
                )}
              </div>

              {/* Card */}
              <div className={`w-full rounded-2xl border p-5 sm:p-6 shadow-sm ring-1 transition-all ${
                entry.type === "work"
                  ? "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 ring-black/5 dark:ring-white/5"
                  : "border-zinc-200/60 dark:border-zinc-800/50 bg-zinc-50/60 dark:bg-zinc-900/40 ring-black/5 dark:ring-white/[0.03]"
              }`}>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold tracking-tight ${
                        entry.type === "work"
                          ? "text-base md:text-lg text-zinc-900 dark:text-zinc-100"
                          : "text-sm md:text-base text-zinc-700 dark:text-zinc-300"
                      }`}>
                        {entry.title}
                      </h3>
                      {entry.type === "work" && entry.current && (
                        <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          Active
                        </span>
                      )}
                    </div>
                    <p className={`text-sm font-medium mt-0.5 ${
                      entry.type === "work"
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-zinc-500 dark:text-zinc-400"
                    }`}>
                      {entry.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-[11px] text-zinc-500 dark:text-zinc-400 shrink-0">
                    <span className="flex items-center gap-1">
                      <TbCalendar className="text-xs" />
                      {entry.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <TbMapPin className="text-xs" />
                      {entry.location}
                    </span>
                  </div>
                </div>

                {/* Work bullets */}
                {entry.type === "work" && (
                  <ul className="space-y-1.5 mt-3">
                    {entry.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-[12px] md:text-[13px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Education note */}
                {entry.type === "edu" && (
                  <p className="mt-2 text-[11px] md:text-[12px] text-zinc-400 dark:text-zinc-500 italic">
                    {entry.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
