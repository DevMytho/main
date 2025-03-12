"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define the project type
type Project = {
  id: string;
  title: string;
  image: string;
  description: string;
  deployLink: string;
  githubLink: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetch project data from an API or database
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-accent rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex justify-between">
                {project.deployLink ? (
                  <a
                    href={project.deployLink}
                    target="_blank"
                    className="text-blue-500"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="text-gray-400 cursor-not-allowed">
                    Live Demo (N/A)
                  </span>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  className=" text-yellow-600"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
