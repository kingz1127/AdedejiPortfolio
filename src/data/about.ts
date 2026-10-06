export type Principle = {
  number: string;
  title: string;
  body: string;
  icon: "shield" | "briefcase" | "zap";
};

export type TimelineItem = {
  date: string;
  role: string;
  company: string;
  detail: string;
};

export const principles: Principle[] = [
  {
    number: "01",
    title: "Secure by default",
    body:
      "Authentication, role boundaries, validation, and transaction integrity belong in the foundation.",
    icon: "shield",
  },
  {
    number: "02",
    title: "Designed to operate",
    body:
      "I build for the administrators, support teams, and real workflows behind the interface.",
    icon: "briefcase",
  },
  {
    number: "03",
    title: "Performance with purpose",
    body:
      "Optimization starts with user impact, then reaches through APIs, queries, and asynchronous jobs.",
    icon: "zap",
  },
];

export const timeline: TimelineItem[] = [
  {
    date: "2024 — Present",
    role: "Software Engineer · Java Backend",
    company: "The InnerCity Mission",
    detail:
      "Architecting secure APIs, payment systems, cloud messaging, advanced search, and administration tooling for global outreach operations.",
  },
  {
    date: "2022 — Present",
    role: "Full-stack Software Engineer",
    company: "Independent Product Work",
    detail:
      "Building booking platforms, real-time user systems, mobile media products, and responsive product interfaces from concept to deployment.",
  },
  {
    date: "2024 — 2026",
    role: "Advanced Diploma · Software Engineering",
    company: "NIIT Fortesoft",
    detail:
      "Deepening software architecture, engineering discipline, and end-to-end product development expertise.",
  },
];