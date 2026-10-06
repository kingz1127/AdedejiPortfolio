import { ArrowUpRight, Check, MessageSquare } from "lucide-react";
import { SiGithub } from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "./ProjectVisual";
import type { Project } from "@/data/projects";



export function CaseStudyDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-[720px] gap-0 rounded-none border-0 bg-paper p-0 text-ink sm:max-w-[720px] [&>button]:hidden"
      >
        {project && (
          <div className="max-h-[90vh] overflow-y-auto p-[70px_clamp(28px,5vw,70px)]">
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute top-6 right-7 font-mono text-[10px] uppercase tracking-widest hover:text-brand"
            >
              Close ×
            </button>

            {/* Header */}
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.13em] text-brand">
              {project.category} case study
            </p>
            <DialogTitle className="mb-9 text-[clamp(48px,6vw,78px)] font-medium leading-[0.95] tracking-[-0.065em]">
              {project.title}
            </DialogTitle>

            {/* Visual */}
            <div className="mb-10">
              <ProjectVisual accent={project.accent} size="large" />
            </div>

            {/* Details */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-9">
              <div>
                <span className="flex w-fit items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-ink/60">
                  <MessageSquare className="h-4 w-4 text-brand" />
                  Challenge
                </span>
                <p className="mt-3 text-[13px] leading-[1.75] text-ink/70">
                  {project.challenge}
                </p>
              </div>
              <div>
                <span className="flex w-fit items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-ink/60">
                  <Check className="h-4 w-4 text-brand" />
                  Outcome
                </span>
                <p className="mt-3 text-[13px] leading-[1.75] text-ink/70">
                  {project.result}
                </p>
              </div>
            </div>

            {/* Stack */}
            <div className="mb-10 flex flex-wrap gap-[7px]">
              {project.stack.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="rounded-full border-ink/16 bg-transparent px-3 py-2 font-mono text-[9px] text-ink/80"
                >
                  {item}
                </Badge>
              ))}
            </div>

            {/* Link */}
            <a
  href={project.githubUrl ?? "https://github.com/kingz1127"}
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2.5 border-b border-ink pb-2 text-[13px] font-bold hover:text-brand"
>
  Explore GitHub
  <ArrowUpRight className="h-4 w-4" />
</a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}