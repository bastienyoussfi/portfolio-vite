import React, { useState } from "react";
import BlogCard from "../components/Blog/BlogCard";
import { BlogPost } from "../types";

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const posts: BlogPost[] = [
    {
      id: "1",
      title: "Building a Modern React Application with TypeScript",
      excerpt:
        "Learn how to set up and structure a React application using TypeScript and modern best practices.",
      content: "...", // Full blog post content
      date: "2024-03-15",
      tags: ["React", "TypeScript", "Web Development"],
    },
    // Add more blog posts
  ];

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        {/* Featured Post */}
        {posts[0] && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Featured Post
            </h2>
            <BlogCard post={posts[0]} />
          </div>
        )}

        {/* Posts Grid */}
        <div className="space-y-8">
          {filteredPosts.slice(1).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">
              No posts found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
