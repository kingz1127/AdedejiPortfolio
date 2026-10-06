import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const b = el.getBoundingClientRect();
      const x = ((e.clientX - b.left) / b.width - 0.5) * 2;
      const y = ((e.clientY - b.top) / b.height - 0.5) * 2;
      el.style.setProperty("--pointer-x", `${x}`);
      el.style.setProperty("--pointer-y", `${y}`);
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      id="top"
      className="relative grid min-h-[850px] grid-cols-1 items-center gap-0 px-[max(32px,calc((100vw-1400px)/2))] pt-[148px] pb-[84px] lg:grid-cols-[1.03fr_0.97fr]"
    >
      {/* Vertical hairline (desktop only) */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 bottom-0 left-1/2 hidden w-px bg-border lg:block"
      />

      {/* Copy column */}
      <div className="relative z-4 pr-0 lg:pr-[clamp(32px,5vw,92px)]">
        {/* Availability */}
        <p className="mb-10 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
          <span className="h-[7px] w-[7px] rounded-full bg-success shadow-[0_0_16px_var(--color-success)]" />
          Available for selected projects
        </p>

        {/* Headline */}
        <h1 className="mb-8 max-w-[780px] text-[clamp(49px,15vw,68px)] font-semibold leading-[0.94] tracking-[-0.075em] lg:text-[clamp(58px,6.6vw,104px)]">
          I build digital
          <br />
          systems that{" "}
          <em className="font-serif font-normal not-italic text-brand">
            move.
          </em>
        </h1>

        <p className="mb-10 max-w-[590px] text-[15px] leading-[1.65] text-muted lg:text-[clamp(16px,1.4vw,20px)]">
          Full-stack engineer focused on resilient Java backends, expressive
          React interfaces, and products built to perform at scale.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-start gap-[18px] lg:flex-row lg:items-center lg:gap-[34px]">
          <Button
            asChild
            size="lg"
            className="h-[58px] gap-6 rounded-none bg-brand px-6 text-[13px] font-bold text-paper hover:bg-paper hover:text-ink"
          >
            <Link to="/work">
              Explore my work
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 border-b border-border py-2 text-[13px] font-bold transition-all hover:gap-4 hover:text-brand"
          >
            Let&apos;s build something
            <ArrowRight className="h-[17px] w-[17px]" />
          </Link>
        </div>
      </div>

      {/* 3D scene */}
      <div
        ref={sceneRef}
        aria-label="Animated three dimensional systems visualization"
        role="img"
        className="scene relative z-2 h-[470px] min-h-[470px] [perspective:1100px] transition-transform duration-200 ease-out lg:h-[min(620px,70vw)] lg:min-h-[520px]"
      >
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(255_92_32/0.16)] blur-[90px]" />

        {/* Orbits */}
        <div className="orbit orbit-one">
          <span />
        </div>
        <div className="orbit orbit-two">
          <span />
        </div>

        {/* Core cube */}
        <div className="core">
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgb(255_255_255/0.4)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.4)_1px,transparent_1px)] [background-size:28px_28px] [transform:perspective(350px)_rotateX(18deg)_scale(1.4)]" />
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] items-center gap-[3px] font-mono text-[clamp(30px,4vw,54px)] font-medium text-paper [text-shadow:0_8px_28px_rgb(58_8_0/0.35)] [transform:translate(-50%,-50%)_rotate(-8deg)_translateZ(40px)]">
            <span>&lt;</span>
            <span>/</span>
            <span>&gt;</span>
          </div>
        </div>

        {/* Float cards */}
        <div className="absolute top-[17%] right-0 z-5 flex min-w-[150px] items-center gap-3 border border-[rgb(255_255_255/0.13)] bg-[rgb(19_19_16/0.82)] p-2.5 shadow-[0_20px_60px_rgb(0_0_0/0.3)] backdrop-blur-xl lg:right-[3%] lg:min-w-[178px] lg:p-[13px_15px]">
          <span className="grid h-[34px] w-[34px] place-items-center bg-[rgb(255_92_32/0.12)] text-brand">
            <Server size={18} />
          </span>
          <div>
            <small className="mb-1 block font-mono text-[8px] tracking-[0.1em] text-muted">
              API RESPONSE
            </small>
            <strong className="block text-xs">40% faster</strong>
          </div>
        </div>

        <div className="absolute bottom-[15%] left-0 z-5 flex min-w-[150px] items-center gap-3 border border-[rgb(255_255_255/0.13)] bg-[rgb(19_19_16/0.82)] p-2.5 shadow-[0_20px_60px_rgb(0_0_0/0.3)] backdrop-blur-xl lg:left-[5%] lg:min-w-[178px] lg:p-[13px_15px]">
          <span className="h-[9px] w-[9px] rounded-full bg-success shadow-[0_0_14px_var(--color-success)]" />
          <div>
            <small className="mb-1 block font-mono text-[8px] tracking-[0.1em] text-muted">
              SYSTEM STATUS
            </small>
            <strong className="block text-xs">All systems live</strong>
          </div>
        </div>
      </div>

      {/* Meta strip */}
      <div className="absolute right-[max(32px,calc((100vw-1400px)/2))] bottom-[30px] left-[max(32px,calc((100vw-1400px)/2))] hidden justify-between font-mono text-[9px] uppercase tracking-[0.08em] text-subtle lg:flex">
        <span>Lagos, Nigeria</span>
        <span>Java / React / Cloud</span>
        <span>Scroll to explore ↓</span>
      </div>
    </section>
  );
}