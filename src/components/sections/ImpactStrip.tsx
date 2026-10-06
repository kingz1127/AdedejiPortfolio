const stats = [
  { value: "04+", label: "Years building" },
  { value: "40%", label: "Faster API responses" },
  { value: "3-tier", label: "Secure role architecture" },
  { value: "Full-stack", label: "End-to-end ownership" },
];

export default function ImpactStrip() {
  return (
    <section
      aria-label="Career highlights"
      className="grid grid-cols-2 border-y border-border lg:grid-cols-4"
    >
      {stats.map((stat, index) => {
        // Borders: bottom on first two at mobile, right on all but last
        const isMobileTopRow = index < 2;
        const isLast = index === stats.length - 1;
        const isDesktopLast = index === 3;

        return (
          <div
            key={stat.label}
            className={[
              "flex min-h-[125px] flex-col justify-center border-border px-5 py-6 lg:min-h-[154px] lg:px-[max(24px,4vw)] lg:py-8",
              // Right border (skip last column on desktop, skip index 1 & 3 on mobile)
              !isLast && "border-r",
              // Mobile: second item in each row shouldn't have right border
              index % 2 === 1 && "border-r-0",
              // Mobile: first row gets bottom border
              isMobileTopRow && "border-b",
              // Restore right border on desktop
              "lg:border-r",
              isDesktopLast && "lg:border-r-0",
              isMobileTopRow && "lg:border-b-0",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <strong className="mb-2 text-[clamp(30px,3vw,47px)] font-medium tracking-[-0.055em]">
              {stat.value}
            </strong>
            <span className="text-[11px] text-muted">{stat.label}</span>
          </div>
        );
      })}
    </section>
  );
}