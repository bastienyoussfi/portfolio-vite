import { BlogPost } from "../types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "Learn how to structure large React applications using TypeScript, clean architecture principles, and modern best practices.",
    content: `
      # Building Scalable React Applications with TypeScript

      When building large-scale applications in React, proper architecture and type safety become crucial...
      
      ## Clean Architecture in React

      The key to maintainable React applications lies in proper separation of concerns...

      ## TypeScript Best Practices

      Using TypeScript effectively in React projects requires understanding some key concepts...
    `,
    date: "2024-03-15",
    tags: ["React", "TypeScript", "Architecture"],
  },
  {
    id: "2",
    title: "Optimizing React Performance",
    excerpt:
      "Deep dive into React performance optimization techniques, from code splitting to memorization strategies.",
    content: `
      # Optimizing React Performance

      Performance optimization in React applications requires a multi-faceted approach...
      
      ## Code Splitting Strategies

      Implementing effective code splitting can significantly improve initial load times...

      ## Memoization Techniques

      Strategic use of useMemo and useCallback can prevent unnecessary re-renders...
    `,
    date: "2024-03-10",
    tags: ["React", "Performance", "Optimization"],
  },
];
