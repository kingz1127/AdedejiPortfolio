import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
// import { SiGithub } from "react-icons/si";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import { Eyebrow } from "../Eyebrow";
import { SiGithub } from "react-icons/si";

export default function WorkPreview() {
  const { repos, status } = useGitHubRepos(3);

  const statusLabel =
    status === "live"
      ? "Live from GitHub"
      : status === "loading"
        ? "Connecting"
        : "Curated work";

  return (
    <section className="px-[max(32px,calc((100vw-1400px)/2))] py-[90px] lg:py-[140px]">
      {/* Section header */}
      <div className="mb-14 flex flex-col items-start gap-8 lg:mb-[58px] lg:flex-row lg:items-end lg:justify-between">
        <div>
          {/* <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.13em] text-brand before:mr-2.5 before:inline-block before:h-px before:w-[22px] before:bg-current before:align-middle before:content-['']">
            Selected systems
          </p> */}
          <Eyebrow className="mb-6">Selected systems</Eyebrow>
          <h2 className="m-0 text-[clamp(43px,5vw,76px)] font-medium leading-[1.02] tracking-[-0.065em]">
            Built for the{" "}
            <em className="font-serif font-normal not-italic text-brand">
              real world.
            </em>
          </h2>
        </div>

        <div className="flex items-center gap-2.5 pb-2.5 font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
          <span
            className={[
              "h-[7px] w-[7px] rounded-full",
              status === "loading"
                ? "animate-pulse bg-brand"
                : "bg-success",
            ].join(" ")}
          />
          {statusLabel}
        </div>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[18px] lg:grid-cols-3">
        {repos.map((repo, index) => (
          <Card
            key={repo.id}
            className="group gap-0 overflow-hidden rounded-none border-0 bg-transparent p-0 shadow-none"
          >
            {/* Visual block */}
            <Link
              to="/work"
              className={[
                "relative mb-6 grid h-[300px] place-items-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-[7px] lg:h-[340px]",
                index === 0 && "bg-project-orange",
                index === 1 && "bg-project-violet",
                index === 2 && "bg-project-mint",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="absolute top-5 left-[22px] font-mono text-[10px] text-ink/55">
                0{index + 1}
              </span>

              {/* Mini browser window */}
              <div className="h-[61%] w-[72%] border border-ink/50 bg-paper/90 shadow-[15px_15px_0_rgb(17_17_15/0.16)] [transform:perspective(700px)_rotateY(-12deg)_rotateX(7deg)]">
                <div className="flex h-[26px] items-center gap-[5px] border-b border-ink/30 px-[9px]">
                  <i className="h-[5px] w-[5px] rounded-full bg-ink" />
                  <i className="h-[5px] w-[5px] rounded-full bg-ink" />
                  <i className="h-[5px] w-[5px] rounded-full bg-ink" />
                </div>
                <div className="grid h-[calc(100%-26px)] grid-cols-[1.2fr_0.8fr] grid-rows-2 gap-[7px] p-2.5">
                  <span className="row-span-2 border border-ink/25 bg-ink/5 [background:linear-gradient(135deg,transparent_60%,rgb(17_17_15/0.07)_60%),rgb(17_17_15/0.04)]" />
                  <span className="border border-ink/25 bg-ink/5" />
                  <span className="border border-ink/25 bg-ink/5" />
                </div>
              </div>
            </Link>

            {/* Copy */}
            <div className="px-0">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="rounded-none border-border px-2 py-1 font-mono text-[8px] uppercase tracking-[0.05em] text-muted"
                >
                  {repo.language ?? "Full-stack"}
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-none border-border px-2 py-1 font-mono text-[8px] uppercase tracking-[0.05em] text-muted"
                >
                  {status === "live" ? "GitHub project" : "Case study"}
                </Badge>
              </div>

              <h3 className="mb-3 overflow-hidden text-ellipsis whitespace-nowrap text-[25px] font-semibold capitalize tracking-[-0.04em]">
                {repo.name.replaceAll("-", " ")}
              </h3>

              <p className="mb-4 min-h-[78px] text-[13px] leading-[1.65] text-muted">
                {repo.description}
              </p>

              <a
  href={repo.html_url}
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2.5 border-b border-border py-2 text-[13px] font-bold text-paper transition-all hover:gap-4 hover:text-brand"
>
  <SiGithub size={14} />
  View repository
  <ArrowRight className="h-[18px] w-[18px]" />
</a>
            </div>
          </Card>
        ))}
      </div>

      {/* View all CTA */}
      <div className="mt-14 flex justify-center lg:mt-20">
        <Link
          to="/work"
          className="inline-flex h-[58px] items-center gap-6 rounded-none bg-brand px-7 text-[13px] font-bold text-paper transition-colors hover:bg-paper hover:text-ink"
        >
          See all work
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}