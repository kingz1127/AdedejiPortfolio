import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const START_DATE = new Date(2024, 0, 1); 

function getTotalMonths(): number {
  const now = new Date();
  let years = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth() - START_DATE.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return years * 12 + months;
}

function formatMonths(total: number): string {
  const years = Math.floor(total / 12);
  const months = total % 12;
  return `${String(years).padStart(2, "0")}y ${String(months).padStart(2, "0")}m`;
}

/** Animates 0 → target once `start` becomes true. */
function useCountUp(target: number, duration = 1400, start: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, start]);

  return value;
}

export default function ImpactStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  const totalMonths = getTotalMonths();
  const animatedMonths = useCountUp(totalMonths, 2400, inView);
  const animatedPercent = useCountUp(40, 3200, inView);
  const animatedTiers = useCountUp(3, 1400, inView);

  const stats = [
  { value: formatMonths(animatedMonths), label: "Years building" },
  { value: `${animatedPercent}%`, label: "Faster API at ICM" },
  { value: `${animatedTiers}-tier`, label: "RBAC at ICM" },
  { value: "Full-stack", label: "End-to-end ownership" },
];

  return (
    <section
      ref={sectionRef}
      aria-label="Career highlights"
      className="grid grid-cols-2 border-y border-border lg:grid-cols-4"
    >
      {stats.map((stat, index) => {
        const isMobileTopRow = index < 2;
        const isLast = index === stats.length - 1;
        const isDesktopLast = index === 3;

        return (
          <div
            key={stat.label}
            className={[
              "flex min-h-[125px] flex-col justify-center border-border px-5 py-6 lg:min-h-[154px] lg:px-[max(24px,4vw)] lg:py-8",
              !isLast && "border-r",
              index % 2 === 1 && "border-r-0",
              isMobileTopRow && "border-b",
              "lg:border-r",
              isDesktopLast && "lg:border-r-0",
              isMobileTopRow && "lg:border-b-0",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <strong className="mb-2 text-[clamp(30px,3vw,47px)] font-medium tracking-[-0.055em] tabular-nums">
              {stat.value}
            </strong>
            <span className="text-[11px] text-muted">{stat.label}</span>
          </div>
        );
      })}
    </section>
  );
}