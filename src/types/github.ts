export type GitHubRepository = {
  name: string;
  fullName: string;
  url: string;
  description?: string;
  homepageUrl?: string;
  language?: string;
  stars: number;
  forks: number;
  updatedAt: string;
  topics: string[];
  isFork: boolean;
};

export type GitHubProfile = {
  login: string;
  profileUrl: string;
  publicRepositoryCount?: number;
};

export type GitHubActivity = {
  profile?: GitHubProfile;
  repositories: GitHubRepository[];
  isAvailable: boolean;
};
