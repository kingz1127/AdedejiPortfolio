
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

export const experience: TimelineItem[] = [
  {
    date: "2026",
    role: "Software Engineer · Java Backend",
    company: "The InnerCity Mission",
    detail:
      "Architected a 3-tier volunteer and donation platform (Spring Boot 3 + PostgreSQL) with Paystack NGN/USD payment integration, KingsChat OAuth2, multi-channel notifications (Firebase FCM, Brevo, Twilio/WhatsApp), JPA Specification search, and automated Google Maps geocoding. Asynchronous processing with @Async boosted API response times by 40%.",
  },
  {
    date: "2024 — Present",
    role: "Independent Product Work",
    company: "Full-stack · Mobile · Cloud",
    detail:
      "Building booking platforms (Spring Boot + MySQL), travel systems (Supabase + MongoDB), mobile media apps (Android ExoPlayer, React Native/Expo), and responsive product interfaces from concept to deployment.",
  },
];

export const education: TimelineItem[] = [
  {
    date: "2024 — 2026",
    role: "Advanced Diploma · Software Engineering (MMS)",
    company: "NIIT Fortesoft",
    detail:
      "Deepening software architecture, engineering discipline, and end-to-end product development expertise.",
  },
];