import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, useSearchParams } from "react-router-dom";
import { blogPosts } from "./assets/blog-posts";
import { useEffect } from "react";
import CursorFollower from "./components/CursorFollower/CursorFollower";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Home/Hero";
import BlogDetail from "./components/Blog/BlogDetail";
import ProjectsSection from "./components/Projects/ProjectsSection";
import BlogSection from "./components/Blog/BlogSection";

// Main landing page component
const Home = () => {
  // Smooth scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-black">
      <Hero />
      <motion.section
        id="work"
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProjectsSection />
      </motion.section>
      <motion.section
        id="blog"
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <BlogSection />
      </motion.section>
    </div>
  );
};

// Blog post page component
const BlogPost = () => {
  const [searchParams] = useSearchParams();
  const postId = parseInt(searchParams.get("id") || "1");
  const post = blogPosts.find((post) => post.id === postId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [postId]);

  if (!post) return <div>Post not found</div>;

  return <BlogDetail post={post} />;
};

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white">
        <CursorFollower />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/blog" element={<BlogSection />} />
        </Routes>
      </div>
    </Router>
  );
}
