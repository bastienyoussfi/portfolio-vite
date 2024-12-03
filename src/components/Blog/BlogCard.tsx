import React from "react";
import { BlogPost } from "../../types";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className="block">
      <article className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <time>{post.date}</time>
            <span>•</span>
            <div className="flex space-x-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-purple-400">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white">{post.title}</h2>
          <p className="text-gray-400">{post.excerpt}</p>
          <div className="flex items-center space-x-2 text-purple-400">
            <span>Read more</span>
            <span>→</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
