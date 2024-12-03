import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-purple-400 transition"
          >
            YourName.dev
          </Link>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                to="/projects"
                className="text-gray-300 hover:text-white transition"
              >
                Projects
              </Link>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-white transition"
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition"
              >
                About
              </Link>
              <a
                href="/resume.pdf"
                className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
