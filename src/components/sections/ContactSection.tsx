import { ArrowRight } from "lucide-react";

const EMAIL = "osunyingboadedeji1@gmail.com";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-[590px] overflow-hidden bg-[#171714] px-[max(32px,calc((100vw-1400px)/2))] py-[100px] lg:min-h-[690px] lg:py-[145px]"
    >
      <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.13em] text-brand before:mr-2.5 before:inline-block before:h-px before:w-[22px] before:bg-current before:align-middle before:content-['']">
        Have a project in mind?
      </p>

      <h2 className="relative z-2 mb-12 max-w-[920px] text-[clamp(52px,16vw,72px)] font-medium leading-[1.02] tracking-[-0.065em] lg:mb-[54px] lg:text-[clamp(58px,7vw,112px)]">
        Let&apos;s make it
        <br />
        <em className="font-serif font-normal not-italic text-brand">
          production ready.
        </em>
      </h2>

      <a
        href={`mailto:${EMAIL}`}
        className="relative z-3 inline-flex max-w-full items-center gap-5 border-b border-paper pb-2.5 text-[14px] transition-colors hover:text-brand lg:text-[clamp(16px,2vw,26px)]"
      >
        <span className="overflow-wrap-anywhere break-all lg:break-normal">
          {EMAIL}
        </span>
        <ArrowRight className="h-6 w-6 shrink-0 lg:h-[30px] lg:w-[30px]" />
      </a>

      {/* Decorative orb */}
      <div className="pointer-events-none absolute right-[-70%] bottom-[-45%] aspect-square w-[580px] animate-[core-float_7s_ease-in-out_infinite] rounded-full border border-paper/15 lg:right-[-7%]">
        <span className="absolute inset-[14%] rounded-full border border-paper/12" />
        <span className="absolute inset-[28%] rounded-full border border-paper/12" />
        <span className="absolute top-[28%] left-[28%] aspect-square w-[44%] rotate-20 rounded-[40%] bg-brand shadow-[0_0_90px_rgb(255_92_32/0.55)]" />
      </div>
    </section>
  );
}