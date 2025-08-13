// ...existing code...
import type { MetaFunction } from "@remix-run/node";
import ContactComponent from "~/components/ContactForm";
import Hero from "~/components/Hero";
import MiniHobbies from "~/components/miniHobbies";
import MiniProjects from "~/components/miniProjects";
import MiniSkills from "~/components/miniSkills";
import Transition from "~/components/transition";
import { SectionDivider } from "~/components/SectionDivider";

export const meta: MetaFunction = () => {
  return [
    { title: "fudge-fantastic" },
    { name: "description", content: "What the fuck is oatmeal!" },
  ];
};

export default function Index() {
  return (
    <div className="relative min-h-screen flex flex-col dark:bg-zinc-950 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-35 bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.22),transparent_55%),radial-gradient(circle_at_82%_65%,rgba(45,212,191,0.22),transparent_55%)]" />
      <Transition>
        <main className="w-full px-4 sm:px-6 md:px-8 pt-28 md:pt-32 pb-24 mx-auto max-w-7xl space-y-16">
          <Hero />

          <SectionDivider label="Features Projects" />
          <section className="space-y-8">
            <MiniProjects />
          </section>

          <SectionDivider label="Technical Stuff" />
          <section className="space-y-8">
            <MiniSkills />
          </section>

          <SectionDivider label="Let's Merge" />
          <section className="space-y-8">
            <MiniHobbies />
          </section>

          <SectionDivider label="Contact? Hell naw" />
          <section className="space-y-8">
            <ContactComponent />
          </section>
        </main>
      </Transition>
    </div>
  );
}
