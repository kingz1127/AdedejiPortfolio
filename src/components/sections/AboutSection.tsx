import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 bg-paper text-ink lg:grid-cols-2"
    >
      {/* Visual: architecture card on orange grid */}
      <div className="relative grid min-h-[430px] place-items-center overflow-hidden bg-project-orange px-5 py-[30px] lg:min-h-[680px] lg:px-[60px] lg:py-[60px]">
        {/* Grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgb(17_17_15/0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(17_17_15/0.08)_1px,transparent_1px)] [background-size:42px_42px]"
        />

        {/* Architecture card */}
        <div className="relative w-full max-w-[490px] bg-ink-soft p-5 text-paper shadow-[26px_26px_0_rgb(116_27_0/0.27)] [transform:perspective(900px)_rotateY(7deg)_rotateX(5deg)_rotateZ(-3deg)] lg:p-[30px]">
          <span className="mb-10 block font-mono text-[9px] tracking-[0.08em] text-brand lg:mb-[55px]">
            SYSTEM_ARCHITECTURE
          </span>

          {/* Nodes */}
          <div className="mb-10 flex items-center lg:mb-[55px]">
            <span className="grid h-[63px] w-[63px] place-items-center rounded-full border border-paper/25 font-mono text-[8px] lg:h-[76px] lg:w-[76px]">
              CLIENT
            </span>
            <i className="h-px flex-1 bg-brand" />
            <span className="grid h-[63px] w-[63px] place-items-center rounded-full border border-paper/25 font-mono text-[8px] lg:h-[76px] lg:w-[76px]">
              API
            </span>
            <i className="h-px flex-1 bg-brand" />
            <span className="grid h-[63px] w-[63px] place-items-center rounded-full border border-paper/25 font-mono text-[8px] lg:h-[76px] lg:w-[76px]">
              DATA
            </span>
          </div>

          {/* Code block */}
          <div className="bg-[#0a0a09] p-[19px] font-mono text-[10px] leading-[2.1] text-[#a9a89f]">
            <span className="mr-[18px] text-[#55554f]">01</span> secure_by_default
            <br />
            <span className="mr-[18px] text-[#55554f]">02</span> scale_with_intent
            <br />
            <span className="mr-[18px] text-[#55554f]">03</span> ship_real_value
          </div>
        </div>
      </div>

      {/* Copy column */}
      <div className="flex flex-col justify-center px-5 py-[90px] lg:px-[clamp(40px,8vw,130px)] lg:py-[90px]">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.13em] text-brand before:mr-2.5 before:inline-block before:h-px before:w-[22px] before:bg-current before:align-middle before:content-['']">
          About the engineer
        </p>

        <h2 className="mb-10 text-[clamp(43px,5vw,76px)] font-medium leading-[1.02] tracking-[-0.065em]">
          Business needs,
          <br />
          translated into{" "}
          <em className="font-serif font-normal not-italic text-brand">
            code.
          </em>
        </h2>

        <p className="mb-6 max-w-[590px] text-[15px] leading-[1.85] text-muted-dark">
          I&apos;m Adedeji, a software engineer who enjoys the difficult middle:
          translating product ambition into secure architecture, fast APIs, and
          interfaces people actually enjoy using.
        </p>

        <p className="mb-6 max-w-[590px] text-[15px] leading-[1.85] text-muted-dark">
          My work spans fintech integrations, cloud messaging, authentication
          systems, mobile audio, booking products, and the infrastructure that
          keeps them dependable.
        </p>

        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-2.5 self-start border-b border-ink/16 py-2 text-[13px] font-bold transition-all hover:gap-4 hover:text-brand"
        >
          Start a conversation
          <ArrowRight className="h-[17px] w-[17px]" />
        </Link>
      </div>
    </section>
  );
}