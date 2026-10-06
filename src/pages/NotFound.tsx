import { Link, useRouteError } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export default function NotFound() {
  const error = useRouteError() as { statusText?: string; message?: string } | null;

  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-5 pt-[150px] pb-20 text-center">
      <Reveal from="3d">
        <span className="font-mono text-[clamp(60px,10vw,120px)] leading-none tracking-[-0.05em] text-brand">
          404
        </span>
      </Reveal>

      <Reveal from="bottom" delay={0.15}>
        <h1 className="my-8 text-[clamp(38px,6vw,72px)] font-semibold leading-[1.02] tracking-[-0.06em]">
          That route left
          <br />
          <em className="font-serif font-normal not-italic text-brand">
            the system.
          </em>
        </h1>
      </Reveal>

      <Reveal from="bottom" delay={0.25}>
        <p className="mb-10 max-w-[420px] text-[14px] leading-[1.75] text-muted">
          {error?.statusText ??
            error?.message ??
            "There is nothing deployed at this address."}
        </p>
      </Reveal>

      <Reveal from="bottom" delay={0.35}>
        <Link
          to="/"
          className="inline-flex h-[58px] items-center gap-6 rounded-none bg-brand px-6 text-[13px] font-bold text-paper transition-colors hover:bg-paper hover:text-ink"
        >
          Return home
          <ArrowRight className="h-5 w-5" />
        </Link>
      </Reveal>
    </section>
  );
}