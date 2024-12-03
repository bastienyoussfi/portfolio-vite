import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Hello, I'm YourName
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Full Stack Developer specializing in building exceptional digital
          experiences
        </p>
        <div className="flex space-x-6">
          <SocialLink
            href="https://github.com/yourusername"
            icon={<Github size={24} />}
          />
          <SocialLink
            href="https://linkedin.com/in/yourusername"
            icon={<Linkedin size={24} />}
          />
          <SocialLink
            href="https://twitter.com/yourusername"
            icon={<Twitter size={24} />}
          />
          <SocialLink href="mailto:your@email.com" icon={<Mail size={24} />} />
        </div>
      </div>
    </div>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({
  href,
  icon,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition"
  >
    {icon}
  </a>
);

export default Hero;
