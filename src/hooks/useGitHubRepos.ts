// import { useEffect, useState } from "react";

// export type GitHubRepo = {
//   id: number;
//   name: string;
//   description: string | null;
//   html_url: string;
//   language: string | null;
//   stargazers_count: number;
//   fork: boolean;
//   updated_at: string;
// };

// export type GitHubStatus = "loading" | "live" | "fallback";

// const USERNAME = "kingz1127";
// const API = `https://api.github.com/users/${USERNAME}/repos?per_page=30&sort=updated`;

// const fallback: GitHubRepo[] = [
//   {
//     id: 1,
//     name: "ICM Global Outreach",
//     description:
//       "A multi-role donation and outreach platform with secure payments, geocoding, and multi-channel notifications.",
//     html_url: `https://github.com/${USERNAME}`,
//     language: "Java",
//     stargazers_count: 0,
//     fork: false,
//     updated_at: "2025-01-01",
//   },
//   {
//     id: 2,
//     name: "Hotel Booking System",
//     description:
//       "Real-time availability, booking workflows, check-in logic, and dedicated customer and admin interfaces.",
//     html_url: `https://github.com/${USERNAME}`,
//     language: "Spring Boot",
//     stargazers_count: 0,
//     fork: false,
//     updated_at: "2024-12-01",
//   },
//   {
//     id: 3,
//     name: "Mobile Audio Player",
//     description:
//       "Background audio streaming with ExoPlayer, MediaSession controls, and Bluetooth media button support.",
//     html_url: `https://github.com/${USERNAME}`,
//     language: "Android",
//     stargazers_count: 0,
//     fork: false,
//     updated_at: "2024-11-01",
//   },
// ];

// export function useGitHubRepos(limit = 3) {
//   const [repos, setRepos] = useState<GitHubRepo[]>(fallback);
//   const [status, setStatus] = useState<GitHubStatus>("loading");

//   useEffect(() => {
//     const controller = new AbortController();

//     fetch(API, { signal: controller.signal })
//       .then((res) => {
//         if (!res.ok) throw new Error("GitHub API unavailable");
//         return res.json() as Promise<GitHubRepo[]>;
//       })
//       .then((data) => {
//         const selected = data
//           .filter((repo) => !repo.fork && repo.description)
//           .sort(
//             (a, b) =>
//               b.stargazers_count - a.stargazers_count ||
//               new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
//           )
//           .slice(0, limit);

//         if (selected.length) {
//           setRepos(selected);
//           setStatus("live");
//         } else {
//           setStatus("fallback");
//         }
//       })
//       .catch((err: unknown) => {
//         if (!(err instanceof DOMException && err.name === "AbortError")) {
//           setStatus("fallback");
//         }
//       });

//     return () => controller.abort();
//   }, [limit]);

//   return { repos, status };
// }


import { useEffect, useRef, useState } from "react";

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
};

export type GitHubStatus = "loading" | "live" | "fallback";

const USERNAME = "kingz1127";
const API = `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`;

/**
 * Add the exact GitHub repo names you want to feature, in order.
 * They'll appear on the homepage in this sequence.
 */
const PINNED_REPOS = [
  // "icm-global-outreach",
  // "hotel-booking-system",
  // "mobile-audio-player",
];

/**
 * Display names + descriptions that override whatever GitHub has.
 * Useful when your repo names are technical but the card should look polished.
 */
const OVERRIDES: Record<string, { title: string; description: string }> = {
  // "icm-global-outreach": {
  //   title: "ICM Global Outreach",
  //   description:
  //     "Multi-role donation and outreach platform with secure payments and geocoding.",
  // },
};

const fallback: GitHubRepo[] = [
  {
    id: 1,
    name: "ICM Global Outreach",
    description:
      "A multi-role donation and outreach platform with secure payments, geocoding, and multi-channel notifications.",
    html_url: `https://github.com/${USERNAME}`,
    language: "Java",
    stargazers_count: 0,
    fork: false,
    updated_at: "2025-01-01",
  },
  {
    id: 2,
    name: "Hotel Booking System",
    description:
      "Real-time availability, booking workflows, check-in logic, and dedicated customer and admin interfaces.",
    html_url: `https://github.com/${USERNAME}`,
    language: "Spring Boot",
    stargazers_count: 0,
    fork: false,
    updated_at: "2024-12-01",
  },
  {
    id: 3,
    name: "Mobile Audio Player",
    description:
      "Background audio streaming with ExoPlayer, MediaSession controls, and Bluetooth media button support.",
    html_url: `https://github.com/${USERNAME}`,
    language: "Android",
    stargazers_count: 0,
    fork: false,
    updated_at: "2024-11-01",
  },
];

function pickRepos(all: GitHubRepo[], limit: number): GitHubRepo[] {
  // If pinned list is empty, fall back to "top by stars, exclude forks"
  if (PINNED_REPOS.length === 0) {
    return all
      .filter((r) => !r.fork)
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
      .slice(0, limit);
  }

  // Otherwise: match the pinned order exactly
  const byName = new Map(all.map((r) => [r.name, r]));
  return PINNED_REPOS.map((name) => byName.get(name))
    .filter((r): r is GitHubRepo => Boolean(r))
    .slice(0, limit)
    .map((r) => {
      const override = OVERRIDES[r.name];
      return override
        ? { ...r, name: override.title, description: override.description }
        : r;
    });
}

export function useGitHubRepos(limit = 3) {
  const [repos, setRepos] = useState<GitHubRepo[]>(fallback);
  const [status, setStatus] = useState<GitHubStatus>("loading");
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;

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