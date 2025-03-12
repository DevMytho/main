"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/3"
        >
          <Image
            src="/image/profile.png"
            alt="Profile picture"
            width={450}
            height={400}
            className="rounded-full mx-auto"
          />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-2/3"
        >
          <p className="text-lg mb-4">
            Hey there! I&apos;m Devvv, a passionate front-end web developer with
            a sharp eye for design and a deep love for creating seamless user
            experiences. My expertise lies in building modern, responsive, and
            high-performance web applications using technologies like React.js,
            Next.js, and TypeScript.
          </p>
          <p className="text-lg mb-4">
            Over the years, I&apos;ve had the opportunity to work on a diverse
            range of projects — from crafting minimalist portfolio websites to
            developing large-scale web applications. I thrive on solving complex
            front-end challenges and delivering clean, scalable code that
            enhances user interaction.
          </p>
          <p className="text-lg mb-4">
            Beyond coding, you&apos;ll often find me exploring the latest web
            technologies, contributing to open-source projects, or fine-tuning
            my skills through hands-on learning. I believe great design is about
            solving problems, not just looking pretty — and that&apos;s the
            philosophy I bring to every project I work on.
          </p>
          <p className="text-lg mb-4">
            I&apos;m always on the lookout for exciting collaborations,
            challenging projects, or innovative ideas. If you&apos;re looking
            for a dedicated front-end developer who can bring your vision to
            life with precision and creativity — let&apos;s connect!
          </p>
          <p className=" text-xl font-bold">
            Interested in working together?
            <a
              href="#contact"
              className=" text-blue-400 underline italic hover:text-blue-500 transition-colors duration-200"
            >
              {" "}
              Drop me an email
            </a>{" "}
            or{" "}
            <a
              href="#contact"
              className="text-blue-400 underline italic hover:text-blue-500 transition-colors duration-200"
            >
              request my resume!
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
