import { useMemo, useState } from "react";
import { ArrowUpRight, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TiltCard } from "@/components/motion/TiltCard";
import { ProjectVisual } from "@/components/sections/ProjectVisual";
import { CaseStudyDialog } from "@/components/sections/CaseStudyDialog";
import { categories, projects, type Filter as FilterType, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Work() {
  const [filter, setFilter] = useState<FilterType>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => projects.filter((p) => filter === "All" || p.category === filter),
    [filter],
  );

  return (
    <>
      {/* ── Page hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[620px] flex-col justify-center border-b border-border px-[max(32px,calc((100vw-1400px)/2))] pt-[130px] pb-[70px] lg:min-h-[760px] lg:pt-[170px] lg:pb-[100px]">
        <Reveal from="bottom">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.13em] text-brand before:mr-2.5 before:inline-block before:h-px before:w-[22px] before:bg-current before:align-middle before:content-['']">
            Selected work · 2022—2026
          </p>
        </Reveal>

        <Reveal from="3d" delay={0.1}>
          <h1 className="mb-9 text-[clamp(48px,15vw,70px)] font-semibold leading-[0.94] tracking-[-0.075em] lg:text-[clamp(62px,8vw,126px)]">
            Systems with
            <br />
            <em className="font-serif font-normal not-italic text-brand">
              something to prove.
            </em>
          </h1>
        </Reveal>

        <Reveal from="bottom" delay={0.2}>
          <p className="max-w-[640px] text-[16px] leading-[1.7] text-muted lg:text-[18px]">
            Production-minded software spanning payments, global communications,
            booking operations, and mobile media.
          </p>
        </Reveal>
      </section>

      {/* ── Work browser ──────────────────────────────────────── */}
      <section className="px-[max(32px,calc((100vw-1400px)/2))] pb-[90px] lg:pb-[150px]">
        {/* Toolbar */}
        <Reveal from="bottom">
          <div className="grid min-h-[110px] grid-cols-[1fr_auto] items-center gap-6 border-b border-border py-6 font-mono text-[9px] uppercase tracking-[0.07em] text-muted lg:grid-cols-[1fr_auto_1fr]">
            <span className="hidden items-center gap-2 lg:flex">
              <Filter className="h-[15px] w-[15px] text-brand" />
              Filter by discipline
            </span>

            <div className="col-span-2 flex gap-[7px] overflow-x-auto scrollbar-none lg:col-span-1 lg:col-auto">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={cn(
                    "shrink-0 rounded-full border border-border px-3.5 py-2.5 text-[10px] transition-colors",
                    filter === item
                      ? "border-brand bg-brand/12 text-paper"
                      : "text-muted hover:border-brand hover:text-paper",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>

            <span className="hidden text-right lg:block">
              {String(visible.length).padStart(2, "0")} projects
            </span>
          </div>
        </Reveal>

        {/* Project list */}
        <Stagger gap={0.1} className="mt-0">
          {visible.map((project, index) => (
            <StaggerItem key={project.id}>
              <button
                type="button"
                onClick={() => setActive(project)}
                className="group grid w-full grid-cols-[30px_1fr] items-center gap-4 border-b border-border py-9 text-left text-paper transition-colors hover:bg-paper/[0.02] lg:grid-cols-[50px_32%_1fr_auto] lg:gap-9 lg:py-8"
              >
                <span className="row-span-2 self-start pt-2 font-mono text-[10px] text-muted lg:row-auto lg:self-center lg:pt-0">
                  {String(projects.indexOf(project) + 1).padStart(2, "0")}
                </span>

                <div className="col-start-2 lg:col-start-auto">
                  <TiltCard intensity={6}>
                    <ProjectVisual accent={project.accent} size="large" />
                  </TiltCard>
                </div>

                <div className="col-start-2 mt-4 lg:col-start-auto lg:mt-0">
                  <Badge
                    variant="outline"
                    className="mb-3 w-fit rounded-none border-border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.09em] text-brand"
                  >
                    {project.category}
                  </Badge>

                  <h2 className="mb-4 text-[clamp(30px,3.2vw,51px)] font-medium leading-[1.05] tracking-[-0.055em]">
                    {project.title}
                  </h2>

                  <p className="max-w-[540px] text-[13px] leading-[1.7] text-muted">
                    {project.summary}
                  </p>
                </div>

                <span className="hidden items-center gap-2 self-center border-b border-border pb-2 text-[11px] transition-all group-hover:gap-4 group-hover:text-brand lg:flex">
                  Open case study
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Case study dialog */}
      <CaseStudyDialog project={active} onClose={() => setActive(null)} />
    </>
  );
}