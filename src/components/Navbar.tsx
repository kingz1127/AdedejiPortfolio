import { Link, NavLink } from "react-router-dom";
import { Github, Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState } from "react";

const GITHUB_URL = "https://github.com/kingz1127";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/expertise", label: "Expertise" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-1/2 z-20 flex h-24 w-[min(100%-64px,1400px)] -translate-x-1/2 items-center justify-between border-b border-border">
      {/* Brand */}
      <Link to="/" className="flex items-center gap-3.5">
        <span className="grid h-10 w-10 place-items-center -rotate-[5deg] border border-brand-light font-mono text-[13px] font-medium text-brand">
          AO
        </span>
        <span className="text-sm font-bold tracking-tight">
          Adedeji Oshunyingbo
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-9 md:flex">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              cn(
                "text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground",
                isActive && "text-foreground",
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Desktop CTA */}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        className="hidden items-center gap-2 border-b border-foreground pb-1.5 text-[13px] font-bold md:flex"
      >
        <Github className="h-4 w-4" />
        GitHub
        <ArrowUpRight className="h-4 w-4" />
      </a>

      {/* Mobile trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[240px] bg-ink border-border">
          <SheetHeader>
            <SheetTitle className="text-left font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Navigation
            </SheetTitle>
          </SheetHeader>
          <nav className="mt-8 flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground",
                    isActive && "text-foreground",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-2 rounded-md px-3 py-3 text-sm font-semibold text-brand"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}