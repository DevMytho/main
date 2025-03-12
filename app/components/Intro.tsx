"use client";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 text-center"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Devvv
      </motion.h1>
      <motion.p
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="text-xl md:text-2xl mb-8"
      >
        An Avid Reader, Casual Gamer & Tech Geek
      </motion.p>
      <motion.a
        href="#about"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
      >
        Know More
      </motion.a>
    </motion.div>
  );
}
