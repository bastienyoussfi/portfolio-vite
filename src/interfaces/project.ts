export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  link?: string;
  github?: string;
  image?: string;
}
