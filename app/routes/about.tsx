import type { MetaFunction } from "@remix-run/node";
import Transition from "~/components/transition";
import { SectionHeading } from "~/components/SectionHeading";
import { AchievementsSection } from "~/components/AchievementsSection";
import { SectionDivider } from "~/components/SectionDivider";

function CodeLifeBlock() {
  const code = `// Disclaimer: May contain traces of caffeine and questionable hacks

const profile = {
  title: "Generative AI Developer",
  techStack: [
    "Python", "JavaScript/TypeScript", "ReactJS", "RemixJS", "TailwindCSS",
    "PostgreSQL", "MongoDB", "Prisma", "FastAPI", "Django",
    "LangChain", "Qdrant", "MLflow", "Docker", "Jenkins", "GitLab", 
    "AWS", "Prometheus", "Grafana"
  ],
  skills: [
    "Machine Learning", "Deep Learning", "Computer Vision", "NLP",
    "Data Analysis & Visualization", "Statistical Modeling",
    "Prompt Engineering", "CI/CD (Commit → Pray → Deploy)"
  ],
  experience: ["Shhhh...it's a secret"],
  education: [
    "PGP in Data Science & Analytics (Imarticus, Pune, 2023–24)",
    "BBA Computer Application (Pune University, 2020–23, CGPA 8.61)",
    "Senior Secondary – 55.69%", 
    "High School – 69%"
  ],
  languages: [
    "English (Proficient)", 
    "Hindi & Marathi (Native)", 
    "German & Japanese (Novice – Duolingo battles ongoing)"
  ],
  fun: [
    "Chess flexer (ranked 1st twice)", 
    "Sketching human anatomy", 
    "Making ambient/lofi music",
    "Gaming (Valorant main, still silver)", 
    "Breaking things just to fix them cleaner"
  ]
};

export default profile;`;

  return (
  <div className="relative w-full rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/60 dark:bg-zinc-900/40 overflow-hidden shadow-md ring-1 ring-black/5 dark:ring-white/5">
      <div className="flex items-center gap-1 px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400 bg-gradient-to-r from-zinc-200/70 to-zinc-100/30 dark:from-zinc-800/40 dark:to-zinc-900/10">
        <span className="size-2 rounded-full bg-red-400" />
        <span className="size-2 rounded-full bg-amber-400" />
        <span className="size-2 rounded-full bg-green-400" />
        <span className="ml-3">about.life.ts</span>
      </div>
      <pre className="m-0 p-4 font-mono text-[11px] md:text-[12px] leading-relaxed text-zinc-700 dark:text-zinc-200 min-h-[260px] whitespace-pre overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export const meta: MetaFunction = () => [
  { title: 'About — fudge-fantastic' },
  { name: 'description', content: 'About Aaditya Pandagle — software developer.' },
];

export default function AboutRoute() {
  return (
    <div className="relative min-h-screen flex flex-col dark:bg-zinc-950 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 bg-[radial-gradient(circle_at_30%_30%,rgba(100,116,139,0.25),transparent_60%),radial-gradient(circle_at_75%_70%,rgba(161,161,170,0.25),transparent_60%)]" />
      <Transition>
        <main className="w-full px-6 md:px-8 pt-28 md:pt-32 pb-24 mx-auto max-w-7xl space-y-24">
          <section className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-8 text-[13px] md:text-[15px] text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
              <SectionHeading>About Me</SectionHeading>
              <p className="mb-4 first-letter:text-2xl">
                Born in Mumbai in 2002, I migrated to Pune in 2006 and have been here ever since, collecting life experiences, bad report cards, and eventually some good ones. High school? <span className="font-semibold text-emerald-400">69%</span> (heh… nice). Secondary high school? <span className="font-semibold text-emerald-400">55.69%</span> (not my proudest, but hey, character development arc). I made up for it in my BCA degree with an <span className="font-semibold text-emerald-400">8.68 CGPA</span> and a couple of chess tournament wins for extra bragging rights. To top it off, I completed a Post-Graduation in Data Science & Analytics, because apparently I enjoy a good academic challenge (and by “challenge” I mean “self-inflicted pain”).
              </p>
              <p className="mb-4 indent-6">
                Ironically, I wasn’t even into coding at first. The turning point came when people around me, especially my brother, wouldn’t shut up about how I should “just give it a try.” One thing led to another, and suddenly I was neck-deep in <span className="font-semibold text-emerald-400">Machine Learning</span>, <span className="font-semibold text-emerald-400">Deep Learning</span>, <span className="font-semibold text-emerald-400">Computer Vision</span>, and building SaaS applications. Now my toolkit is a mix of <span className="font-semibold text-emerald-400">React</span>, <span className="font-semibold text-emerald-400">Remix</span>, <span className="font-semibold text-emerald-400">Tailwind</span>, <span className="font-semibold text-emerald-400">FastAPI</span>, <span className="font-semibold text-emerald-400">Docker</span>, <span className="font-semibold text-emerald-400">AWS</span>, <span className="font-semibold text-emerald-400">LangChain</span>, <span className="font-semibold text-emerald-400">Qdrant</span>, and whatever other shiny tech I can get my hands on.
              </p>
              <p className="mb-4 indent-6">
                When I’m not wrestling with code, I’m usually playing <span className="font-semibold text-emerald-400">chess</span> like it’s a competitive sport, sketching <span className="font-semibold text-emerald-400">human anatomy</span> to stay sharp, layering <span className="font-semibold text-emerald-400">ambient/lo-fi music</span> for focus, or <span className="font-semibold text-emerald-400">gaming</span> until my eyes beg for mercy. Somehow, no matter what I do, I end up circling back to building or improving something, because even my “breaks” end up turning into side projects.
              </p>
            </div>
            <CodeLifeBlock />
          </section>

          <SectionDivider label="Milestones" />

          <AchievementsSection />
        </main>
      </Transition>
    </div>
  );
}
