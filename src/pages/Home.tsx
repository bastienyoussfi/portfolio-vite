import React from "react";
import Hero from "../components/Home/Hero";
import { ArrowDown } from "lucide-react";

const Home: React.FC = () => {
  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "TailwindCSS",
    "PostgreSQL",
    "AWS",
    "Docker",
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-purple-400" size={32} />
      </div>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
          <div className="prose prose-lg text-gray-300">
            <p>
              I'm a passionate full-stack developer with a keen interest in
              building scalable web applications and solving complex problems.
              With experience in both frontend and backend development, I bring
              ideas to life through code.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-purple-900/30 rounded-full text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Featured Projects
          </h2>
          {/* Add your ProjectCards component here */}
        </div>
      </section>
    </div>
  );
};

export default Home;