import Hero from "@/components/sections/Hero";
import ImpactStrip from "@/components/sections/ImpactStrip";
import WorkPreview from "@/components/sections/WorkPreview";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import { Reveal } from "@/components/motion/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal from="3d" duration={0.9}><ImpactStrip /></Reveal>
      <Reveal from="3d" delay={0.05}><WorkPreview /></Reveal>
      <Reveal from="bottom"><ExpertiseSection /></Reveal>
      <Reveal from="bottom"><AboutSection /></Reveal>
      <Reveal from="3d"><ContactSection /></Reveal>
    </>
  );
}