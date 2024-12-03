import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code,
  Server,
  Globe,
} from "lucide-react";

const About: React.FC = () => {
  const skills = {
    frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "GraphQL",
    ],
    backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    tools: ["Git", "AWS", "CI/CD", "Jest", "Webpack", "Linux"],
  };

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Corp",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications, mentored junior developers, and implemented CI/CD pipelines.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and AWS.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-500"
          />
          <h1 className="text-4xl font-bold text-white mb-4">Your Name</h1>
          <p className="text-xl text-gray-300 mb-6">Full Stack Developer</p>
          <div className="flex justify-center space-x-6">
            <SocialLink
              href="https://github.com/yourusername"
              icon={<Github />}
            />
            <SocialLink
              href="https://linkedin.com/in/yourusername"
              icon={<Linkedin />}
            />
            <SocialLink
              href="https://twitter.com/yourusername"
              icon={<Twitter />}
            />
            <SocialLink href="mailto:your@email.com" icon={<Mail />} />
          </div>
        </div>

        {/* Bio Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">About Me</h2>
          <div className="prose prose-lg text-gray-300">
            <p>
              I'm a passionate full-stack developer with 5+ years of experience
              in building modern web applications. I specialize in React,
              TypeScript, and Node.js, with a strong focus on creating scalable
              and maintainable solutions.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source
              projects, writing technical blog posts, or exploring new
              technologies. I'm always eager to learn and share knowledge with
              the developer community.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCategory
              title="Frontend Development"
              icon={<Globe />}
              skills={skills.frontend}
            />
            <SkillCategory
              title="Backend Development"
              icon={<Server />}
              skills={skills.backend}
            />
            <SkillCategory
              title="Tools & Platforms"
              icon={<Code />}
              skills={skills.tools}
            />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-purple-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certificates */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">
            Education & Certificates
          </h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              Computer Science, BSc
            </h3>
            <p className="text-purple-400 mb-2">University Name</p>
            <p className="text-gray-400 text-sm">2016 - 2020</p>
          </div>
        </section>
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
    className="text-gray-400 hover:text-purple-400 transition"
  >
    {icon}
  </a>
);

const SkillCategory: React.FC<{
  title: string;
  icon: React.ReactNode;
  skills: string[];
}> = ({ title, icon, skills }) => (
  <div className="bg-gray-800 rounded-lg p-6">
    <div className="flex items-center mb-4">
      <span className="text-purple-400 mr-2">{icon}</span>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-gray-300">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default About;
