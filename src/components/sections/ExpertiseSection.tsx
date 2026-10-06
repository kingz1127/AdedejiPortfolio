import { ArrowRight } from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Backend systems",
    skills: ["Java", "Spring Boot", "Node.js", "REST APIs", "JPA"],
  },
  {
    number: "02",
    title: "Product interfaces",
    skills: ["React", "TypeScript", "React Native", "Tailwind", "Responsive UI"],
  },
  {
    number: "03",
    title: "Data & cloud",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Docker", "Kubernetes"],
  },
];

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="bg-paper px-[max(32px,calc((100vw-1400px)/2))] py-[90px] text-ink lg:py-[140px]"
    >
      {/* Header */}
      <div className="mb-14 lg:mb-[70px]">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.13em] text-brand before:mr-2.5 before:inline-block before:h-px before:w-[22px] before:bg-current before:align-middle before:content-['']">
          Technical expertise
        </p>
        <h2 className="m-0 text-[clamp(43px,5vw,76px)] font-medium leading-[1.02] tracking-[-0.065em]">
          From interface to
          <br />
          <em className="font-serif font-normal not-italic text-brand">
            infrastructure.
          </em>
        </h2>
      </div>

      {/* Skill rows */}
      <div className="border-t border-ink/16">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="grid min-h-0 grid-cols-[40px_1fr] items-center gap-5 border-b border-ink/16 py-7 transition-[padding,background] duration-200 hover:px-2.5 hover:bg-paper-deep lg:min-h-[164px] lg:grid-cols-[80px_0.8fr_1.5fr_40px] lg:gap-5 lg:py-0 lg:hover:px-5"
          >
            <span className="font-mono text-[11px] text-ink/55">
              {group.number}
            </span>

            <h3 className="m-0 text-[clamp(25px,2.5vw,40px)] font-medium tracking-[-0.05em]">
              {group.title}
            </h3>

            <div className="col-start-2 mt-3 flex flex-wrap gap-2 lg:col-start-auto lg:mt-0">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-ink/16 px-3 py-2 font-mono text-[9px] text-ink/70"
                >
                  {skill}
                </span>
              ))}
            </div>

            <span className="hidden h-[38px] w-[38px] place-items-center rounded-full border border-ink/16 lg:grid">
              <ArrowRight className="h-5 w-5" />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}