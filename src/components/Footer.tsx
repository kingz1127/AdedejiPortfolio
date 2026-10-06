import { Link } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import { LuLinkedin, LuMail } from "react-icons/lu";

const GITHUB_URL = "https://github.com/kingz1127";
const LINKEDIN_URL = "https://www.linkedin.com/in/adedeji-oshunyingbo-58243432b?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const EMAIL = "osunyingboadedeji1@gmail.com";

export default function Footer() {
  return (
    <footer className="grid min-h-[130px] grid-cols-1 items-center gap-8 border-t border-border bg-[#171714] px-[max(20px,calc((100vw-1400px)/2))] py-8 md:grid-cols-[1fr_auto_1fr]">
      {/* Brand */}
      <div className="flex items-center gap-3.5">
        <span className="grid h-10 w-10 place-items-center -rotate-[5deg] border border-brand font-mono text-[13px] font-medium text-brand">
          AO
        </span>
        <span className="hidden text-[10px] text-muted-foreground md:inline">
          Building dependable digital products.
        </span>
      </div>

      {/* Footer nav */}
      <nav className="hidden gap-6 md:flex">
        <Link to="/" className="text-[10px] text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <Link to="/work" className="text-[10px] text-muted-foreground hover:text-foreground">
          Work
        </Link>
        <Link to="/about" className="text-[10px] text-muted-foreground hover:text-foreground">
          About
        </Link>
      </nav>

      {/* Socials */}
      <div className="flex gap-2.5 md:justify-end">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="grid h-10 w-10 place-items-center border border-border transition-colors hover:border-brand hover:text-brand"
        >
          <SiGithub size={16} />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="grid h-10 w-10 place-items-center border border-border transition-colors hover:border-brand hover:text-brand"
        >
          <LuLinkedin size={16} />
        </a>
        <a
          href={`mailto:${EMAIL}`}
          aria-label="Email"
          className="grid h-10 w-10 place-items-center border border-border transition-colors hover:border-brand hover:text-brand"
        >
          <LuMail size={16} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-[10px] text-muted-foreground md:col-span-3 md:text-right">
        © {new Date().getFullYear()} Adedeji Oshunyingbo
      </p>
    </footer>
  );
}