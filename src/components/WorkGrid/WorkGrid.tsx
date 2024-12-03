import { motion } from "framer-motion";

const WorkGrid = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of the project",
      image: "/placeholder.jpg",
      tags: ["React", "Node.js", "AWS"],
    },
    // Add more projects...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="group relative bg-gray-900 overflow-hidden"
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col justify-center items-center h-full text-white p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-center mb-4">
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm border border-gray-700 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkGrid;
