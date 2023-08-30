
export interface WebsiteData {
  name: string;
  url: string;
  repoUrl?: string;
  images?: {
    name: string;
    n: number;
  }
  description: {
    summary: string;
    features: string[];
  }
}
