import { Database, LayoutGrid, Server } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const groups = [
  {
    icon: Server,
    title: "Backend systems",
    blurb:
      "Secure APIs, authentication, payment flows, and background jobs built to be operated, not just to run.",
    tools: [
      "Java 17+",
      "Spring Boot 3",
      "Node.js",
      "REST & GraphQL",
      "OAuth2 / JWT",
      "JPA / Hibernate",
      "Paystack / Stripe",
      "Firebase Cloud Messaging",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Product interfaces",
    blurb:
      "Interfaces that feel obvious under pressure — responsive, accessible, and expressive without being noisy.",
    tools: [
      "React 19",
      "TypeScript",
      "React Router v7",
      "Tailwind v4",
      "shadcn/ui",
      "Radix UI",
      "Motion",
      "React Native / Expo",
    ],
  },
  {
    icon: Database,
    title: "Data & cloud",
    blurb:
      "Persistence that scales and infrastructure that holds up when traffic spikes.",
    tools: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Docker",
      "Kubernetes",
      "AWS (EC2 / S3 / RDS)",
      "GitHub Actions",
    ],
  },
];

export default function Expertise() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative flex min-h-[620px] flex-col justify-center border-b border-border px-[max(32px,calc((100vw-1400px)/2))] pt-[130px] pb-[70px] lg:min-h-[760px] lg:pt-[170px] lg:pb-[100px]">
        <Reveal from="bottom">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.13em] text-brand before:mr-2.5 before:inline-block before:h-px before:w-[22px] before:bg-current before:align-middle before:content-['']">
            Technical expertise
          </p>
        </Reveal>
        <Reveal from="3d" delay={0.1}>
          <h1 className="mb-9 text-[clamp(48px,15vw,70px)] font-semibold leading-[0.94] tracking-[-0.075em] lg:text-[clamp(62px,8vw,126px)]">
            From interface to
            <br />
            <em className="font-serif font-normal not-italic text-brand">
              infrastructure.
            </em>
          </h1>
        </Reveal>
        <Reveal from="bottom" delay={0.2}>
          <p className="max-w-[640px] text-[16px] leading-[1.7] text-muted lg:text-[18px]">
            The stack I reach for when the problem is real, the deadline is
            tight, and the system needs to hold up after launch.
          </p>
        </Reveal>
      </section>

      {/* ── Skill groups ──────────────────────────────────────── */}
      <section className="px-[max(32px,calc((100vw-1400px)/2))] py-[90px] lg:py-[140px]">
        <Stagger gap={0.12} className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <StaggerItem key={group.title}>
                <article className="flex h-full flex-col border border-border p-7 lg:p-9">
                  <div className="mb-7 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center border border-brand text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="text-[22px] font-medium tracking-[-0.03em]">
                      {group.title}
                    </h2>
                  </div>

                  <p className="mb-6 text-[13px] leading-[1.75] text-muted">
                    {group.blurb}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border px-3 py-2 font-mono text-[9px] text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section className="border-t border-border px-[max(32px,calc((100vw-1400px)/2))] py-[90px] lg:py-[140px]">
        <Reveal from="3d">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-[820px] text-[clamp(38px,4.5vw,68px)] font-medium leading-[1.02] tracking-[-0.06em]">
              Have a problem that needs
              <br />
              <em className="font-serif font-normal not-italic text-brand">
                the right stack.
              </em>
            </h2>
            <a
              href="/contact"
              className="inline-flex h-[58px] shrink-0 items-center gap-6 rounded-none bg-brand px-7 text-[13px] font-bold text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Start a conversation
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}