import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollTo } from "../../hooks/useScrollTo";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string, section?: string) => {
    if (location.pathname === path && !section) {
      // If we're already on the page, just scroll to top
      scrollTo("top");
    } else if (location.pathname === path && section) {
      // If we're on the page and there's a section, scroll to it
      scrollTo(section);
    } else {
      // If we're navigating to a new page
      navigate(path);
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        if (section) {
          scrollTo(section);
        } else {
          scrollTo("top");
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavigation("/")}
            className="text-xl font-bold text-white hover:text-gray-300 transition"
          >
            YourName
            <span className="text-gray-400">.dev</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("/", "work")}
              className={`text-sm tracking-wider hover:text-white transition ${
                location.pathname === "/"
                  ? "text-white font-medium"
                  : "text-gray-400"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation("/", "blog")}
              className={`text-sm tracking-wider hover:text-white transition ${
                location.pathname === "/"
                  ? "text-white font-medium"
                  : "text-gray-400"
              }`}
            >
              Blog
            </button>
            <a
              href="/resume.pdf"
              className="px-4 py-2 text-sm border border-gray-700 hover:bg-white hover:text-black transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={
          isMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg"
      >
        <div className="px-4 py-4 space-y-4">
          <button
            onClick={() => handleNavigation("/", "work")}
            className="block w-full text-left text-sm tracking-wider text-gray-400 hover:text-white transition"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavigation("/", "blog")}
            className="block w-full text-left text-sm tracking-wider text-gray-400 hover:text-white transition"
          >
            Blog
          </button>
          <a
            href="/resume.pdf"
            className="block text-sm text-gray-400 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume →
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
