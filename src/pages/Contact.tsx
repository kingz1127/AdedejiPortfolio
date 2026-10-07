// import { useState, type FormEvent } from "react";
// import { ArrowRight, ArrowUpRight, Check, Mail } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Reveal } from "@/components/motion/Reveal";

// const EMAIL = "osunyingboadedeji1@gmail.com";

// export default function Contact() {
//   const [submitted, setSubmitted] = useState(false);
//   const [projectType, setProjectType] = useState("");

//   function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setSubmitted(true);
//   }

//   return (
//     <section className="grid min-h-screen grid-cols-1 gap-[70px] px-[max(32px,calc((100vw-1400px)/2))] pt-[130px] pb-[80px] lg:grid-cols-[1fr_0.75fr] lg:gap-0 lg:pt-[170px] lg:pb-[100px]">
//       {/* ── Intro column ──────────────────────────────────────── */}
//       <div className="pr-0 lg:pr-[clamp(40px,7vw,110px)]">
//         <Reveal from="bottom">
//           <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.13em] text-brand before:mr-2.5 before:inline-block before:h-px before:w-[22px] before:bg-current before:align-middle before:content-['']">
//             Start a conversation
//           </p>
//         </Reveal>

//         <Reveal from="3d" delay={0.1}>
//           <h1 className="mb-9 text-[clamp(48px,15vw,70px)] font-semibold leading-[0.94] tracking-[-0.075em] lg:text-[clamp(55px,6vw,92px)]">
//             Bring the challenge.
//             <br />
//             I&apos;ll bring the{" "}
//             <em className="font-serif font-normal not-italic text-brand">
//               systems thinking.
//             </em>
//           </h1>
//         </Reveal>

//         <Reveal from="bottom" delay={0.2}>
//           <p className="max-w-[610px] text-[15px] leading-[1.75] text-muted lg:text-[16px]">
//             Tell me what you&apos;re building, where it is stuck, and what
//             success looks like. I&apos;ll respond with the right next questions.
//           </p>
//         </Reveal>

//         <Reveal from="bottom" delay={0.3}>
//           <div className="mt-[60px] flex flex-col gap-2">
//             <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-muted">
//               <Mail className="h-[15px] w-[15px] text-brand" />
//               Prefer email?
//             </span>
//             <a
//               href={`mailto:${EMAIL}`}
//               className="w-fit border-b border-border pb-1.5 text-[14px] transition-colors hover:text-brand"
//             >
//               {EMAIL}
//             </a>
//           </div>
//         </Reveal>
//       </div>

//       {/* ── Form / success column ─────────────────────────────── */}
//       <Reveal from="bottom" delay={0.15} className="self-center">
//         <div className="border border-border bg-white/[0.02] p-7 lg:p-[clamp(28px,4vw,55px)]">
//           {submitted ? (
//             <div className="flex min-h-[500px] flex-col justify-center">
//               <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.07em] text-success">
//                 <Check className="h-4 w-4" />
//                 Message prepared
//               </span>

//               <h2 className="my-6 text-[64px] font-medium leading-none tracking-[-0.06em]">
//                 Thank you.
//               </h2>

//               <p className="text-[14px] leading-[1.75] text-muted">
//                 This demo form is ready to connect to your preferred form
//                 service. For now, email Adedeji directly to begin the
//                 conversation.
//               </p>

//               <a
//                 href={`mailto:${EMAIL}`}
//                 className="mt-6 inline-flex w-fit items-center gap-2.5 border-b border-paper pb-2 text-[13px] font-bold hover:text-brand"
//               >
//                 Open email
//                 <ArrowUpRight className="h-4 w-4" />
//               </a>

//               <button
//                 type="button"
//                 onClick={() => setSubmitted(false)}
//                 className="mt-9 w-fit text-[11px] text-muted hover:text-paper"
//               >
//                 Send another note
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-7">
//               <Field label="01 · Your name" htmlFor="name">
//                 <Input
//                   id="name"
//                   name="name"
//                   placeholder="How should I address you?"
//                   required
//                   className="h-auto rounded-none border-0 border-b border-border bg-transparent px-0 py-2.5 text-[14px] focus-visible:border-brand focus-visible:ring-0"
//                 />
//               </Field>

//               <Field label="02 · Email address" htmlFor="email">
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="you@company.com"
//                   required
//                   className="h-auto rounded-none border-0 border-b border-border bg-transparent px-0 py-2.5 text-[14px] focus-visible:border-brand focus-visible:ring-0"
//                 />
//               </Field>

//               <Field label="03 · Project type" htmlFor="type">
//                 <Select
//                   value={projectType}
//                   onValueChange={setProjectType}
//                   required
//                 >
//                   <SelectTrigger
//                     id="type"
//                     className="h-auto rounded-none border-0 border-b border-border bg-transparent px-0 py-2.5 text-[14px] focus:border-brand focus:ring-0"
//                   >
//                     <SelectValue placeholder="Choose a project type" />
//                   </SelectTrigger>
//                   <SelectContent className="rounded-none border-border bg-ink-soft">
//                     <SelectItem value="backend">Backend or API system</SelectItem>
//                     <SelectItem value="fullstack">Full-stack product</SelectItem>
//                     <SelectItem value="mobile">Mobile application</SelectItem>
//                     <SelectItem value="consulting">Technical consultation</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </Field>

//               <Field label="04 · Tell me about it" htmlFor="message">
//                 <Textarea
//                   id="message"
//                   name="message"
//                   placeholder="The opportunity, challenge, timeline..."
//                   required
//                   rows={4}
//                   className="resize-y rounded-none border-0 border-b border-border bg-transparent px-0 py-2.5 text-[14px] focus-visible:border-brand focus-visible:ring-0"
//                 />
//               </Field>

//               <Button
//                 type="submit"
//                 className="h-[58px] w-full justify-between rounded-none bg-brand px-5 text-[13px] font-bold text-paper hover:bg-paper hover:text-ink"
//               >
//                 Send project brief
//                 <ArrowRight className="h-5 w-5" />
//               </Button>
//             </form>
//           )}
//         </div>
//       </Reveal>
//     </section>
//   );
// }

// /** Small wrapper for label + input grouping. */
// function Field({
//   label,
//   htmlFor,
//   children,
// }: {
//   label: string;
//   htmlFor: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="space-y-3">
//       <Label
//         htmlFor={htmlFor}
//         className="font-mono text-[9px] uppercase tracking-[0.06em] text-muted"
//       >
//         {label}
//       </Label>
//       {children}
//     </div>
//   );
// }

import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/motion/Reveal";

const EMAIL = "osunyingboadedeji1@gmail.com";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type SubmitState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<SubmitState>("idle");
  const [projectType, setProjectType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!ACCESS_KEY) {
      setState("error");
      setErrorMessage(
        "Form is not configured. Add VITE_WEB3FORMS_KEY to your .env.local file.",
      );
      return;
    }

    setState("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      access_key: ACCESS_KEY,
      subject: `New project inquiry from ${formData.get("name")}`,
      from_name: "Adedeji Portfolio",
      name: formData.get("name"),
      email: formData.get("email"),
      project_type: projectType,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message ?? "Something went wrong. Try again.");
      }

      setState("success");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Try again.";
      setErrorMessage(message);
      setState("error");
    }
  }

  return (
    <section className="grid min-h-screen grid-cols-1 gap-[70px] px-[max(32px,calc((100vw-1400px)/2))] pt-[130px] pb-[80px] lg:grid-cols-[1fr_0.75fr] lg:gap-0 lg:pt-[170px] lg:pb-[100px]">
      {/* ── Intro column ──────────────────────────────────────── */}
      <div className="pr-0 lg:pr-[clamp(40px,7vw,110px)]">
        <Reveal from="bottom">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.13em] text-brand before:mr-2.5 before:inline-block before:h-px before:w-[22px] before:bg-current before:align-middle before:content-['']">
            Start a conversation
          </p>
        </Reveal>

        <Reveal from="3d" delay={0.1}>
          <h1 className="mb-9 text-[clamp(48px,15vw,70px)] font-semibold leading-[0.94] tracking-[-0.075em] lg:text-[clamp(55px,6vw,92px)]">
            Bring the challenge.
            <br />
            I&apos;ll bring the{" "}
            <em className="font-serif font-normal not-italic text-brand">
              systems thinking.
            </em>
          </h1>
        </Reveal>

        <Reveal from="bottom" delay={0.2}>
          <p className="max-w-[610px] text-[15px] leading-[1.75] text-muted lg:text-[16px]">
            Tell me what you&apos;re building, where it is stuck, and what
            success looks like. I&apos;ll respond with the right next questions.
          </p>
        </Reveal>

        <Reveal from="bottom" delay={0.3}>
          <div className="mt-[60px] flex flex-col gap-2">
            <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-muted">
              <Mail className="h-[15px] w-[15px] text-brand" />
              Prefer email?
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className="w-fit border-b border-border pb-1.5 text-[14px] transition-colors hover:text-brand"
            >
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>

      {/* ── Form / success / error column ─────────────────────── */}
      <Reveal from="bottom" delay={0.15} className="self-center">
        <div className="border border-border bg-white/[0.02] p-7 lg:p-[clamp(28px,4vw,55px)]">
          {state === "success" ? (
            <SuccessState onReset={() => setState("idle")} />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <Field label="01 · Your name" htmlFor="name">
                <Input
                  id="name"
                  name="name"
                  placeholder="How should I address you?"
                  required
                  disabled={state === "sending"}
                  className="h-auto rounded-none border-0 border-b border-border bg-transparent px-0 py-2.5 text-[14px] focus-visible:border-brand focus-visible:ring-0"
                />
              </Field>

              <Field label="02 · Email address" htmlFor="email">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  disabled={state === "sending"}
                  className="h-auto rounded-none border-0 border-b border-border bg-transparent px-0 py-2.5 text-[14px] focus-visible:border-brand focus-visible:ring-0"
                />
              </Field>

              <Field label="03 · Project type" htmlFor="type">
                <Select
                  value={projectType}
                  onValueChange={setProjectType}
                  required
                  disabled={state === "sending"}
                >
                  <SelectTrigger
                    id="type"
                    className="h-auto rounded-none border-0 border-b border-border bg-transparent px-0 py-2.5 text-[14px] focus:border-brand focus:ring-0"
                  >
                    <SelectValue placeholder="Choose a project type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-border bg-ink-soft">
                    <SelectItem value="Backend or API system">
                      Backend or API system
                    </SelectItem>
                    <SelectItem value="Full-stack product">
                      Full-stack product
                    </SelectItem>
                    <SelectItem value="Mobile application">
                      Mobile application
                    </SelectItem>
                    <SelectItem value="Technical consultation">
                      Technical consultation
                    </SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field label="04 · Tell me about it" htmlFor="message">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="The opportunity, challenge, timeline..."
                  required
                  rows={4}
                  disabled={state === "sending"}
                  className="resize-y rounded-none border-0 border-b border-border bg-transparent px-0 py-2.5 text-[14px] focus-visible:border-brand focus-visible:ring-0"
                />
              </Field>

              {state === "error" && (
                <div className="border border-brand-dark/40 bg-brand-dark/5 p-3 text-[12px] text-brand">
                  {errorMessage}
                </div>
              )}

              <Button
                type="submit"
                disabled={state === "sending"}
                className="h-[58px] w-full justify-between rounded-none bg-brand px-5 text-[13px] font-bold text-paper hover:bg-paper hover:text-ink disabled:opacity-60"
              >
                {state === "sending" ? (
                  <>
                    Sending
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send project brief
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex min-h-[500px] flex-col justify-center">
      <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.07em] text-success">
        <Check className="h-4 w-4" />
        Message sent
      </span>

      <h2 className="my-6 text-[64px] font-medium leading-none tracking-[-0.06em]">
        Thank you.
      </h2>

      <p className="text-[14px] leading-[1.75] text-muted">
        I&apos;ve received your message and will reply within a day or two. If
        it&apos;s urgent, email me directly.
      </p>

      <a
        href={`mailto:${EMAIL}`}
        className="mt-6 inline-flex w-fit items-center gap-2.5 border-b border-paper pb-2 text-[13px] font-bold hover:text-brand"
      >
        Open email
        <ArrowUpRight className="h-4 w-4" />
      </a>

      <button
        type="button"
        onClick={onReset}
        className="mt-9 w-fit text-[11px] text-muted hover:text-paper"
      >
        Send another note
      </button>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <Label
        htmlFor={htmlFor}
        className="font-mono text-[9px] uppercase tracking-[0.06em] text-muted"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}