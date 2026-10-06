import { useState } from "react";
import { Briefcase, ShieldCheck, Zap, Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { principles, timeline } from "@/data/about";
import { cn } from "@/lib/utils";

const icons = {
  shield: ShieldCheck,
  briefcase: Briefcase,
  zap: Zap,
};

export default function About() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative grid min-h-[620px] grid-cols-1 items-end gap-10 border-b border-border px-[max(32px,calc((100vw-1400px)/2))] pt-[130px] pb-[70px] lg:min-h-[760px] lg:grid-cols-[1.4fr_0.6fr] lg:gap-[70px] lg:pt-[170px] lg:pb-[100px]">
        <Reveal from="bottom">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.13em] text-brand before:mr-2.5 before:inline-block before:h-px before:w-[22px] before:bg-current before:align-middle before:content-['']">
            About the engineer
          </p>
          <h1 className="m-0 text-[clamp(48px,15vw,70px)] font-semibold leading-[0.94] tracking-[-0.075em] lg:text-[clamp(62px,8vw,126px)]">
            I care about what
            <br />
            happens{" "}
            <em className="font-serif font-normal not-italic text-brand">
              after launch.
            </em>
          </h1>
        </Reveal>

        <Reveal from="bottom" delay={0.15}>
          <p className="max-w-[640px] pb-5 text-[16px] leading-[1.7] text-muted">
            I&apos;m Adedeji, a Lagos-based software engineer turning ambitious
            requirements into secure, scalable, and understandable products.
          </p>
        </Reveal>
      </section>

      {/* ── Principles (paper bg) ─────────────────────────────── */}
      <section className="bg-paper text-ink">
        <Reveal from="bottom">
          <div className="grid grid-cols-1 gap-12 border-b border-ink/16 px-[max(32px,calc((100vw-1400px)/2))] py-[80px] lg:grid-cols-[1fr_2fr] lg:gap-[50px] lg:py-[100px]">
            <span className="font-mono text-[9px] uppercase tracking-[0.09em] text-brand">
              My approach
            </span>
            <p className="m-0 max-w-[900px] text-[clamp(30px,3.7vw,56px)] leading-[1.2] tracking-[-0.045em]">
              Good software is more than working code. It is clarity under
              pressure, thoughtful tradeoffs, and systems that stay useful as
              the business changes.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 px-[max(32px,calc((100vw-1400px)/2))] lg:grid-cols-3">
          {principles.map((p) => {
            const Icon = icons[p.icon];
            return (
              <StaggerItem key={p.number}>
                <article className="min-h-[280px] border border-ink/16 p-[55px_25px] lg:min-h-[360px] lg:border-r-0 lg:px-[38px] lg:last:border-r">
                  <span className="flex items-center justify-between font-mono text-[10px] text-brand">
                    <Icon className="h-6 w-6 text-ink" />
                    {p.number}
                  </span>
                  <h2 className="mt-[60px] mb-5 text-[27px] font-medium tracking-[-0.04em] lg:mt-[90px]">
                    {p.title}
                  </h2>
                  <p className="text-[13px] leading-[1.75] text-muted-dark">
                    {p.body}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ── Timeline ──────────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-10 px-[max(32px,calc((100vw-1400px)/2))] py-[90px] lg:grid-cols-[0.7fr_1.3fr] lg:gap-[90px] lg:py-[140px]">
        <Reveal from="left">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.13em] text-brand before:mr-2.5 before:inline-block before:h-px before:w-[22px] before:bg-current before:align-middle before:content-['']">
              Experience timeline
            </p>
            <h2 className="text-[clamp(38px,4vw,64px)] font-medium leading-[1.05] tracking-[-0.06em]">
              A practice built
              <br />
              across disciplines.
            </h2>
          </div>
        </Reveal>

        <Stagger className="border-t border-border">
          {timeline.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <StaggerItem key={item.role}>
                <button
                  type="button"
                  onClick={() => setOpenItem(index)}
                  className="grid w-full grid-cols-[1fr_25px] gap-5 border-b border-border py-8 text-left text-paper lg:grid-cols-[130px_1fr_30px] lg:gap-6"
                >
                  <span className="col-span-2 font-mono text-[9px] uppercase tracking-[0.05em] text-muted lg:col-span-1">
                    {item.date}
                  </span>
                  <div>
                    <h3 className="mb-2 flex items-center gap-2.5 text-[21px] font-medium">
                      <Briefcase className="h-[18px] w-[18px] text-brand" />
                      {item.role}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-[0.05em] text-muted">
                      {item.company}
                    </span>
                    <p
                      className={cn(
                        "overflow-hidden text-[13px] leading-[1.7] text-muted transition-[max-height,margin,opacity] duration-300",
                        isOpen
                          ? "mt-6 max-h-[160px] opacity-100"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      {item.detail}
                    </p>
                  </div>
                  <span className="text-right text-2xl text-brand">
                    {isOpen ? (
                      <Minus className="ml-auto h-5 w-5" />
                    ) : (
                      <Plus className="ml-auto h-5 w-5" />
                    )}
                  </span>
                </button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ── Capability marquee ────────────────────────────────── */}
      <div className="overflow-hidden border-y border-border py-9">
        <div className="flex w-max animate-[marquee_24s_linear_infinite] gap-0 text-[35px] font-semibold tracking-[-0.04em] whitespace-nowrap">
          {["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Cloud systems"].map((tech) => (
            <span key={tech} className="flex items-center">
              {tech}
              <span className="mx-6 text-brand">✦</span>
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Cloud systems"].map((tech) => (
            <span key={`${tech}-dup`} className="flex items-center">
              {tech}
              <span className="mx-6 text-brand">✦</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}