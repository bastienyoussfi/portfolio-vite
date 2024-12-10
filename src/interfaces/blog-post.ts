export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  description?: string;
  readTime: string;
  content: BlogPostContent[];
}

export interface BlogPostContent {
  type: "paragraph" | "heading" | "code" | "image";
  content: string;
  level?: number; // For headings (e.g., 1 for h1, 2 for h2, etc.)
  language?: string; // For code blocks
  alt?: string; // For images
}
