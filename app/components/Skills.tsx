"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "Kotlin", "Rust", "HTML", "CSS"],
  },
  {
    label: "Backend",
    skills: ["Flask", "SQLAlchemy", "REST APIs", "Node.js"],
  },
  {
    label: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
    ],
  },
  {
    label: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    label: "Mobile & Desktop",
    skills: ["Android (Kotlin)", "Firebase Auth", "Tauri"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Linux", "PyGame"],
  },
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
      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

      <div className="flex flex-col gap-10">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-50">
              {category.label}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
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
        ))}
      </div>
    </motion.div>
  );
}
