"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";

const skills = [
  "Html",
  "CSS",
  "Js",
  "Python",
  "Rust",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Redux",
  "GraphQL",
  "Node.js",
  "MongoDb",
  "MySql",
  "Git",
];

export default function Skills() {
  const { theme } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-lg shadow-md transition-all duration-300 cursor-none
              ${
                hoveredSkill === skill
                  ? theme === "dark"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                  : "bg-accent"
              }`}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <motion.span
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
