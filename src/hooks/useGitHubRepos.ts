import { useEffect, useState } from "react";

export type GitHubRepo = {
  id: number;
  name: string;
  githubName: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
  homepage: string | null;
  topics: string[];
};

export type GitHubStatus = "loading" | "live" | "fallback";
export type RepoCategory = "Backend" | "Full-stack" | "Mobile";

const USERNAME = "kingz1127";
const API = `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`;

/**
 * The exact GitHub repo names you want to feature, in display order.
 * Homepage shows the first 3, Work page shows all of them.
 */
export const PINNED_REPOS: string[] = [
  "DevOps-CloudSandBox",
  "Hackathon-project",
  "Hotel-booking-backend",
  "Hotel-booking-frontend",
  "fresher-resource-hub-backend",
  "LinkedShield",
];

/**
 * Category assigned to each pinned repo. Used for the Work page filter.
 */
export const REPO_CATEGORIES: Record<string, RepoCategory> = {
  "DevOps-CloudSandBox": "Full-stack",
  "Hackathon-project": "Full-stack",
  "Hotel-booking-backend": "Backend",
  "Hotel-booking-frontend": "Full-stack",
  "fresher-resource-hub-backend": "Backend",
  LinkedShield: "Backend",
};

/**
 * Optional display overrides. Key = GitHub repo name.
 */
export const OVERRIDES: Record<string, { title: string; description: string }> = {
  "DevOps-CloudSandBox": {
    title: "DevOps CloudSandbox",
    description:
      "Interactive learning platform that simulates enterprise infrastructure — Docker, Kubernetes, load balancing, and monitoring — inside a localized terminal.",
  },
  "Hackathon-project": {
    title: "School Management System",
    description:
      "Collaborative school administration platform covering students, staff, scheduling, and academic records.",
  },
  "Hotel-booking-backend": {
    title: "Hotel Booking System",
    description:
      "Real-time availability engine with date-aware booking, check-in workflows, and dedicated admin interfaces.",
  },
  "Hotel-booking-frontend": {
    title: "Hotel Booking — Frontend",
    description:
      "Customer-facing booking flow with live availability, date selection, and instant confirmation.",
  },
  "fresher-resource-hub-backend": {
    title: "Fresher Resource Hub",
    description:
      "Backend API powering a resource platform for early-career developers — auth, search, and content management.",
  },
  LinkedShield: {
    title: "LinkedShield",
    description:
      "Java service exploring secure integrations and API boundary protection.",
  },
};

const fallback: GitHubRepo[] = [
  {
    id: 1,
    name: "ICM Global Outreach",
    githubName: "ICM Global Outreach",
    description:
      "A multi-role donation and outreach platform with secure payments, geocoding, and multi-channel notifications.",
    html_url: `https://github.com/${USERNAME}`,
    language: "Java",
    stargazers_count: 0,
    fork: false,
    updated_at: "2025-01-01",
    homepage: null,
    topics: [],
  },
  {
    id: 2,
    name: "Hotel Booking System",
    githubName: "Hotel Booking System",
    description:
      "Real-time availability, booking workflows, check-in logic, and dedicated customer and admin interfaces.",
    html_url: `https://github.com/${USERNAME}`,
    language: "Spring Boot",
    stargazers_count: 0,
    fork: false,
    updated_at: "2024-12-01",
    homepage: null,
    topics: [],
  },
  {
    id: 3,
    name: "Mobile Audio Player",
    githubName: "Mobile Audio Player",
    description:
      "Background audio streaming with ExoPlayer, MediaSession controls, and Bluetooth media button support.",
    html_url: `https://github.com/${USERNAME}`,
    language: "Android",
    stargazers_count: 0,
    fork: false,
    updated_at: "2024-11-01",
    homepage: null,
    topics: [],
  },
];

function pickRepos(all: GitHubRepo[], limit: number | null): GitHubRepo[] {
  const byName = new Map(all.map((r) => [r.name, r]));

  const matched = PINNED_REPOS.map((name) => byName.get(name)).filter(
    (r): r is GitHubRepo => Boolean(r),
  );

  const sliced = limit === null ? matched : matched.slice(0, limit);

  return sliced.map((r) => {
    const override = OVERRIDES[r.name];
    const withName = { ...r, githubName: r.name };
    return override
      ? { ...withName, name: override.title, description: override.description }
      : withName;
  });
}

export function useGitHubRepos(limit: number | null = 3) {
  const [repos, setRepos] = useState<GitHubRepo[]>(
    limit === null ? [] : fallback.slice(0, limit),
  );
  const [status, setStatus] = useState<GitHubStatus>("loading");

  useEffect(() => {
    const controller = new AbortController();

    fetch(API, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API unavailable");
        return res.json() as Promise<GitHubRepo[]>;
      })
      .then((data) => {
        const selected = pickRepos(data, limit);
        if (selected.length) {
          setRepos(selected);
          setStatus("live");
        } else {
          setStatus("fallback");
        }
      })
      .catch((err: unknown) => {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          setStatus("fallback");
        }
      });

    return () => controller.abort();
  }, [limit]);

  return { repos, status };
}