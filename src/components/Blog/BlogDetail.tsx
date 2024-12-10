import { Clock, Calendar } from "lucide-react";
import { BlogPost } from "../../interfaces/blog-post";
import { motion } from "framer-motion";

const BlogDetail = ({ post }: { post: BlogPost }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-gray-400">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          {post.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-300"
                  >
                    {block.content}
                  </motion.p>
                );
              case "heading":
                const HeadingTag =
                  `h${block.level}` as keyof JSX.IntrinsicElements;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <HeadingTag className="text-white font-bold my-6">
                      {block.content}
                    </HeadingTag>
                  </motion.div>
                );
              case "code":
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-900 p-4 rounded-lg my-6"
                  >
                    <pre>
                      <code className="text-gray-300">{block.content}</code>
                    </pre>
                  </motion.div>
                );
              default:
                return null;
            }
          })}
        </div>
      </motion.div>
    </article>
  );
};

export default BlogDetail;
