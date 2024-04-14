export interface WebsiteData {
  name: string;
  urls: {
    site: string;
    repo?: string;
  }
  images: {
    nameTemplate: string;
    number: number;
  }
  description: {
    summary: string;
    features: string[];
  }
}

export interface Project {
  name: string;
  links: {
    icon: string;
    text: string;
    url: string;
  }[];
  images: {
    full: string;
    small: string;
    alt: string;
  }[];
  description: WebsiteData['description'];
  featuresShown: boolean;
}
