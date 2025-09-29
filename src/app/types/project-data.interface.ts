export interface ProjectData {
  id: string;
  isHidden?: boolean;
  name: string;
  site?: string;
  repo?: string | null;
  numberOfImages: number;
  description: {
    summary: string;
    features: string[];
  }
}