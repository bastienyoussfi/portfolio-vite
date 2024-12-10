import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "../../assets/blog-posts";

const BlogSection = () => {
  return (
    <section id="blog" className="min-h-screen bg-black py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12"
        >
          Latest Articles
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative grid md:grid-cols-2 gap-8 bg-gray-900"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </span>
                  <span className="border border-gray-700 px-2 py-1">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <motion.button
                  whileHover={{ x: 10 }}
                  whileTap={{ x: -2 }}
                  className="flex items-center text-white group/button"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/button:translate-x-2" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BlogSection;
