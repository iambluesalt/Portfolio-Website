import { SectionHeading } from "./SectionHeading";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { certificates, totalCertifications } from "~/shared/certificationsData";
import { TbTrophy, TbCertificate, TbSparkles } from "react-icons/tb";

// Simple achievements data (feel free to expand)
const achievements: { icon?: JSX.Element; title: string; description: string; meta?: string }[] = [
  {
    icon: <TbTrophy className="text-amber-500 h-7 w-7" />,
    title: "Chess Tournament Wins",
    description: "Secured 1st place twice locally – pattern recognition, strategy and patience bleed into how I debug & architect systems.",
    meta: "June-2022 and May-2023"
  },
  {
    icon: <TbSparkles className="text-emerald-500 h-7 w-7" />,
    title: "Here lies void, my life",
    description: "Navigating the chaotic landscape of modern life, one breakdown at a time.",
    meta: "2002–Present"
  },
  {
    icon: <TbCertificate className="text-cyan-500 h-7 w-7" />,
    title: `${totalCertifications}+ Technical Certifications`,
    description: "Across AWS, ML, Python, SQL & more – focused on breadth early, depth ongoing.",
    meta: "Continuous learning"
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="space-y-8">
      <div className="flex items-center gap-3">
        <SectionHeading className="">Achievements & Certifications</SectionHeading>
        <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-none shadow-sm">Growth</Badge>
      </div>
      <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
        A curated snapshot of progress outside pure project delivery—tangible milestones that shaped how I think, build and iterate.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map(a => (
          <Card key={a.title} className="group relative overflow-hidden border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-900/60">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-transparent" />
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-sm md:text-base font-bold">
                <span className="grid place-items-center">
                  {a.icon}
                </span>
                <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 bg-clip-text text-transparent">
                  {a.title}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-xs md:text-sm text-zinc-600 dark:text-zinc-300 space-y-3">
              <p>{a.description}</p>
              {a.meta && <div className="text-[11px] uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{a.meta}</div>}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certifications Listing */}
      <div className="mt-4 space-y-6">
        <h3 className="font-heading text-lg md:text-xl font-semibold tracking-tight flex items-center gap-2">
          <span>Detailed Certifications</span>
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">({totalCertifications} total)</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(certificates).map(([platform, certs]) => (
            <div key={platform} className="rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/50 p-5 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-base tracking-wide text-emerald-600 dark:text-emerald-400">{platform}</h4>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[12px] px-3 py-1">{Object.keys(certs).length}</Badge>
              </div>
              <ul className="space-y-2 text-[12px] md:text-[13px]">
                {Object.entries(certs).map(([title, link]) => (
                  <li key={title} className="leading-snug">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1 group/link">
                      <span className="text-zinc-700 dark:text-zinc-300 group-hover/link:text-cyan-500 transition">
                        {title}
                      </span>
                      <span className="text-cyan-500 opacity-0 group-hover/link:opacity-100 transition text-[16px]">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
