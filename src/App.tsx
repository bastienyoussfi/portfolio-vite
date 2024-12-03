import { motion } from 'framer-motion';
import CursorFollower from './components/CursorFollower/CursorFollower';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Home/Hero';
import WorkGrid from './components/WorkGrid/WorkGrid';

export default function App() {
  return (
    <div className="bg-black text-white">
      <CursorFollower />
      <Navigation />
      <Hero />
      <motion.section
        id="work"
        className="py-20 px-4 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <WorkGrid />
      </motion.section>
      {/* Add other sections */}
    </div>
  );
}