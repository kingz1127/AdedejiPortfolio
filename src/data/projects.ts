export type ProjectCategory = "Backend" | "Full-stack" | "Mobile";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  challenge: string;
  result: string;
  stack: string[];
  accent: "orange" | "violet" | "mint" | "blue";
};

export const projects: Project[] = [
  {
    id: "icm",
    title: "ICM Global Outreach",
    category: "Backend",
    summary:
      "Global donation, outreach, and volunteer operations in one secure system.",
    challenge:
      "Design a multi-role platform that could process NGN and USD donations reliably while coordinating global outreach communications.",
    result:
      "Delivered a three-tier permission model, Paystack verification with webhook fail-safes, automated geocoding, and asynchronous notifications that improved API response time by 40%.",
    stack: ["Spring Boot 3", "PostgreSQL", "Paystack", "Firebase", "OAuth2"],
    accent: "orange",
  },
  {
    id: "hotel",
    title: "Hotel Booking System",
    category: "Full-stack",
    summary:
      "Real-time room operations for customers, staff, and administrators.",
    challenge:
      "Create a dependable booking engine that handles room availability, date conflicts, walk-ins, and check-in workflows without operational ambiguity.",
    result:
      "Built customer and administration interfaces around a Java API with date-aware availability, instant confirmation, and complete booking management.",
    stack: ["Java", "Spring Boot", "MySQL", "REST API", "React"],
    accent: "violet",
  },
  {
    id: "travel",
    title: "Travel & Booking Platform",
    category: "Full-stack",
    summary:
      "Dynamic passenger workflows, seat selection, and real-time dashboards.",
    challenge:
      "Make complex group bookings feel simple while preserving accurate passenger, seat, and session state.",
    result:
      "Implemented dynamic adult and child forms, persistent sessions, calendar views, role-based dashboards, and real-time data updates.",
    stack: ["TypeScript", "React", "Supabase", "MongoDB", "RBAC"],
    accent: "mint",
  },
  {
    id: "audio",
    title: "Mobile Audio Ecosystem",
    category: "Mobile",
    summary:
      "Native and cross-platform audio that keeps playing in the background.",
    challenge:
      "Deliver reliable playback across minimized apps, Bluetooth controls, and changing mobile lifecycle states.",
    result:
      "Shipped Android and React Native players with streaming, MediaSession controls, background playback, and complete track management.",
    stack: ["Android", "Java", "ExoPlayer", "React Native", "Expo"],
    accent: "blue",
  },
];

export const categories = ["All", "Backend", "Full-stack", "Mobile"] as const;
export type Filter = (typeof categories)[number];