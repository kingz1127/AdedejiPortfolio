import { useState } from "react";
import { Briefcase, GraduationCap, Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { cn } from "@/lib/utils";
import type { TimelineItem } from "@/data/about";

type TimelineSectionProps = {
  id?: string;
  eyebrow: string;
  heading: React.ReactNode;
  items: TimelineItem[];
  variant: "experience" | "education";
  defaultOpen?: number;
};

export function TimelineSection({
  id,
  eyebrow,
  heading,
  items,
  variant,
  defaultOpen = 0,
}: TimelineSectionProps) {
  const [openItem, setOpenItem] = useState<number>(defaultOpen);
  const Icon = variant === "education" ? GraduationCap : Briefcase;

  return (
    <section
      id={id}
      className="grid grid-cols-1 gap-10 px-[max(32px,calc((100vw-1400px)/2))] py-[90px] lg:grid-cols-[0.7fr_1.3fr] lg:gap-[90px] lg:py-[140px]"
    >
      <Reveal from="left">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.13em] text-brand before:mr-2.5 before:inline-block before:h-px before:w-[22px] before:bg-current before:align-middle before:content-['']">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(38px,4vw,64px)] font-medium leading-[1.05] tracking-[-0.06em]">
            {heading}
          </h2>
        </div>
      </Reveal>

      <Stagger className="border-t border-border">
        {items.map((item, index) => {
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
                    <Icon className="h-[18px] w-[18px] text-brand" />
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
  );
}