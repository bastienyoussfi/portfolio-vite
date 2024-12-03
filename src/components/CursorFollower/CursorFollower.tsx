import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-50"
      animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CursorFollower;