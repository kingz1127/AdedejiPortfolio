import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Direction the element slides in from */
  from?: "bottom" | "top" | "left" | "right" | "3d";
  /** Duration (seconds) */
  duration?: number;
  className?: string;
  once?: boolean;
};

const distance = 40;

function buildVariants(
  from: RevealProps["from"],
  duration: number,
  delay: number,
): Variants {
  const base = {
    opacity: 0,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (from === "3d") {
    return {
      hidden: {
        ...base,
        y: distance,
        rotateX: 12,
        transformPerspective: 1000,
      },
      show: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as const },
      },
    };
  }

  const axis =
    from === "left" || from === "right" ? { x: distance } : { y: distance };
  const sign = from === "top" || from === "left" ? -1 : 1;

  return {
    hidden: { ...base, ...mapAxis(axis, sign) },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as const },
    },
  };
}

function mapAxis(axis: { x?: number; y?: number }, sign: number) {
  if (axis.x !== undefined) return { x: axis.x * sign };
  return { y: (axis.y ?? distance) * sign };
}

export function Reveal({
  children,
  delay = 0,
  from = "bottom",
  duration = 0.7,
  className,
  once = true,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={buildVariants(from, duration, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </motion.div>
  );
}