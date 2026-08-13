import { featuredGitHubRepositoryNames, GITHUB_USERNAME } from "@/data/github";
import type { GitHubActivity, GitHubProfile, GitHubRepository } from "@/types/github";

export const GITHUB_API_BASE_URL = "https://api.github.com";

const REVALIDATE_SECONDS = 60 * 60;

type GitHubUserResponse = { login?: unknown; html_url?: unknown; public_repos?: unknown };
type GitHubRepositoryResponse = {
  name?: unknown; full_name?: unknown; html_url?: unknown; description?: unknown; homepage?: unknown;
  language?: unknown; stargazers_count?: unknown; forks_count?: unknown; updated_at?: unknown;
  topics?: unknown; fork?: unknown;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isGitHubRepository(value: unknown): value is GitHubRepositoryResponse {
  return isRecord(value) && typeof value.name === "string" && typeof value.full_name === "string" && typeof value.html_url === "string" && typeof value.updated_at === "string";
}

function toRepository(repository: GitHubRepositoryResponse): GitHubRepository {
  return {
    name: repository.name as string,
    fullName: repository.full_name as string,
    url: repository.html_url as string,
    description: typeof repository.description === "string" && repository.description ? repository.description : undefined,
    homepageUrl: typeof repository.homepage === "string" && repository.homepage ? repository.homepage : undefined,
    language: typeof repository.language === "string" && repository.language ? repository.language : undefined,
    stars: typeof repository.stargazers_count === "number" ? repository.stargazers_count : 0,
    forks: typeof repository.forks_count === "number" ? repository.forks_count : 0,
    updatedAt: repository.updated_at as string,
    topics: Array.isArray(repository.topics) ? repository.topics.filter((topic): topic is string => typeof topic === "string") : [],
    isFork: repository.fork === true,
  };
}

function toProfile(user: unknown): GitHubProfile | undefined {
  if (!isRecord(user) || typeof user.login !== "string" || typeof user.html_url !== "string") return undefined;
  return {
    login: user.login,
    profileUrl: user.html_url,
    publicRepositoryCount: typeof user.public_repos === "number" ? user.public_repos : undefined,
  };
}

export function createGithubUserApiUrl(username: string): string {
  return `${GITHUB_API_BASE_URL}/users/${encodeURIComponent(username)}`;
}

export function createGithubRepositoriesApiUrl(username: string): string {
  return `${GITHUB_API_BASE_URL}/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`;
}

function selectFeaturedRepositories(repositories: GitHubRepository[]): GitHubRepository[] {
  const candidates = repositories.filter((repository) => !repository.isFork);
  const manuallySelected = featuredGitHubRepositoryNames
    .map((name) => candidates.find((repository) => repository.name === name))
    .filter((repository): repository is GitHubRepository => Boolean(repository));

  if (manuallySelected.length) return manuallySelected.slice(0, 3);

  return candidates
    .sort((a, b) => Number(Boolean(b.description)) - Number(Boolean(a.description)) || b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 3);
}

export async function getGitHubActivity(): Promise<GitHubActivity> {
  try {
    const requestOptions = {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE_SECONDS },
    };
    const [userResult, repositoriesResult] = await Promise.all([
      fetch(createGithubUserApiUrl(GITHUB_USERNAME), requestOptions),
      fetch(createGithubRepositoriesApiUrl(GITHUB_USERNAME), requestOptions),
    ]);

    if (!userResult.ok || !repositoriesResult.ok) return { repositories: [], isAvailable: false };

    const [user, repositories] = await Promise.all([userResult.json() as Promise<GitHubUserResponse>, repositoriesResult.json() as Promise<unknown>]);
    if (!Array.isArray(repositories)) return { repositories: [], isAvailable: false };

    return {
      profile: toProfile(user),
      repositories: selectFeaturedRepositories(repositories.filter(isGitHubRepository).map(toRepository)),
      isAvailable: true,
    };
  } catch {
    return { repositories: [], isAvailable: false };
  }
}
