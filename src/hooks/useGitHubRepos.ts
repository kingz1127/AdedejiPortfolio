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

export type GitHubStatus = "loading" | "live" | "error";
export type RepoCategory = "Backend" | "Full-stack" | "Mobile";

const USERNAME = "kingz1127";
const API = `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`;

/**
 * The exact GitHub repo names you want to feature, in display order.
 * Homepage shows the first 3, Work page shows all of them.
 * These names must match GitHub exactly (case-sensitive).
 */
export const PINNED_REPOS: string[] = [
  "DevOps-CloudSandBox",
  "Hackathon-project",
  "Hotel-booking-backend",
  "Hotel-booking-frontend",
  "KingzPlay-RN",
  "LinkedShield",
  "icmfold"
];

/**
 * Category assigned to each pinned repo. Used for the Work page filter.
 * This is the ONLY piece of data that doesn't come from GitHub.
 */
export const REPO_CATEGORIES: Record<string, RepoCategory> = {
  "DevOps-CloudSandBox": "Full-stack",
  "Hackathon-project": "Full-stack",
  "Hotel-booking-backend": "Backend",
  "Hotel-booking-frontend": "Full-stack",
  "KingzPlay-RN": "Mobile",
  "LinkedShield": "Backend",
  "icmfold": "Backend"
};

/**
 * Optional title polish only. Descriptions and links still come from GitHub.
 * If you don't want polished titles either, delete this map and the
 * TITLE_OVERRIDES[r.name] lookup inside pickRepos.
 */
export const TITLE_OVERRIDES: Record<string, string> = {
  "DevOps-CloudSandBox": "DevOps CloudSandbox",
  "Hackathon-project": "School Management System",
  "Hotel-booking-backend": "Hotel Booking System - Backend",
  "Hotel-booking-frontend": "Hotel Booking — Frontend",
  " kehindeoloruntayo/Fresher-resource-Hub": "Fresher Resource Hub",
  LinkedShield: "LinkedShield",
  "icmfold": "icmfold",
};

function pickRepos(all: GitHubRepo[], limit: number | null): GitHubRepo[] {
  const byName = new Map(all.map((r) => [r.name, r]));

  const matched = PINNED_REPOS.map((name) => byName.get(name)).filter(
    (r): r is GitHubRepo => Boolean(r),
  );

  const sliced = limit === null ? matched : matched.slice(0, limit);

  // Preserve the real GitHub name, optionally polish the display title.
  // Description, html_url, language, stars, updated_at all come from GitHub.
  return sliced.map((r) => ({
    ...r,
    githubName: r.name,
    name: TITLE_OVERRIDES[r.name] ?? r.name,
  }));
}

export function useGitHubRepos(limit: number | null = 3) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [status, setStatus] = useState<GitHubStatus>("loading");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(API, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GitHub API returned ${res.status} ${res.statusText}`);
        }
        return res.json() as Promise<GitHubRepo[]>;
      })
      .then((data) => {
        const selected = pickRepos(data, limit);
        if (!selected.length) {
          throw new Error(
            `None of the pinned repos matched. Checked: ${PINNED_REPOS.join(
              ", ",
            )}. GitHub returned ${data.length} repos.`,
          );
        }
        setRepos(selected);
        setStatus("live");
        setError(null);
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        const message = err instanceof Error ? err.message : String(err);
        console.error("[useGitHubRepos]", message);
        setStatus("error");
        setError(message);
      });

    return () => controller.abort();
  }, [limit]);

  return { repos, status, error };
}