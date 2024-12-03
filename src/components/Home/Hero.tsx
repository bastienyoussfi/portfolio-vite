import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:32px_32px]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl px-4 text-center"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Creating Digital
          <span className="block mt-2">Experiences</span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Full Stack Developer specializing in crafting exceptional digital
          solutions
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { Icon: Github, url: "#" },
            { Icon: Linkedin, url: "#" },
            { Icon: Twitter, url: "#" },
            { Icon: Mail, url: "#" },
          ].map(({ Icon, url }, index) => (
            <motion.a
              key={index}
              href={url}
              className="p-3 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowRight size={24} className="text-gray-400 rotate-90" />
      </motion.div>
    </div>
  );
};

export default Hero;
