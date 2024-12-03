import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-gray-300 transition"
          >
            YourName
            <span className="text-gray-400">.dev</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Projects", "Blog", "About"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className={`text-sm tracking-wider hover:text-white transition ${
                  location.pathname === `/${item.toLowerCase()}`
                    ? "text-white font-medium"
                    : "text-gray-400"
                }`}
              >
                {item}
              </Link>
            ))}
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
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-black/90 backdrop-blur-lg`}
      >
        <div className="px-4 py-4 space-y-4">
          {["Projects", "Blog", "About"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`block text-sm tracking-wider hover:text-white transition ${
                location.pathname === `/${item.toLowerCase()}`
                  ? "text-white font-medium"
                  : "text-gray-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            className="block text-sm text-gray-400 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;