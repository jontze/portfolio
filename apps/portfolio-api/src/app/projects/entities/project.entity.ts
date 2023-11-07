export class Project {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  createdAt: string;
  updatedAt: string;
  primaryLanguage?: {
    name: string;
    color?: string;
  };
}
