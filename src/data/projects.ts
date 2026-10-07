

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
  githubUrl?: string;
  homepageUrl?: string;
  manual?: boolean;   // ← new: marks projects that aren't fetched from GitHub
};

export const manualProjects: Project[] = [
  {
    id: "icm",
    title: "ICM Global Outreach",
    category: "Backend",
    summary:
      "Volunteer and donation management system powering global outreach operations.",
    challenge:
      "Design a multi-role platform that could process NGN and USD donations reliably while coordinating global outreach communications across continents.",
    result:
      "Architected a 3-tier Spring Boot 3 system with Paystack payment integration, KingsChat OAuth2, multi-channel notifications (FCM, Brevo, Twilio/WhatsApp), JPA Specification search, and automated geocoding. Asynchronous processing boosted API response times by 40%.",
    stack: [
      "Spring Boot 3",
      "PostgreSQL",
      "Paystack",
      "KingsChat OAuth2",
      "Firebase FCM",
      "Twilio",
      "Brevo",
      "Google Maps",
      "JPA Specifications",
    ],
    accent: "orange",
    manual: true,
  },
];

export const categories = ["All", "Backend", "Full-stack", "Mobile"] as const;
export type Filter = (typeof categories)[number];