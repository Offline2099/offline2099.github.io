export interface Project {
  id: string;
  isHidden?: boolean;
  name: string;
  site?: string | null;
  repo?: string | null;
  numberOfImages: number;
  description: {
    summary: string;
    features: string[];
  };
}
