import type { Project } from "@/data/projects";

const accentBg: Record<Project["accent"], string> = {
  orange: "bg-project-orange",
  violet: "bg-project-violet",
  mint: "bg-project-mint",
  blue: "bg-project-blue",
};

export function ProjectVisual({
  accent,
  size = "large",
}: {
  accent: Project["accent"];
  size?: "large" | "small";
}) {
  const isLarge = size === "large";
  return (
    <div
      className={[
        "relative grid place-items-center overflow-hidden",
        accentBg[accent],
        isLarge ? "h-[245px]" : "h-[130px]",
      ].join(" ")}
    >
      {/* Mini browser window */}
      <div
        className={[
          "flex gap-[6px] border border-ink/45 bg-paper p-3 shadow-[14px_14px_0_rgb(17_17_15/0.15)] [transform:perspective(500px)_rotateY(-12deg)_rotateX(7deg)]",
          isLarge ? "h-[58%] w-[66%]" : "h-[70%] w-[75%]",
        ].join(" ")}
      >
        <i className="flex-1 border border-ink/20 bg-ink/5" />
        <i className="flex-[1.7] border border-ink/20 bg-ink/5" />
        <i className="flex-1 border border-ink/20 bg-ink/5" />
      </div>
    </div>
  );
}