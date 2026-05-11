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
            Hey, I&apos;m Debasish, most people just call me Dev.
          </p>
          <p className="text-lg mb-4">
            I&apos;m a Python developer and Founder of Astera, a small software
            studio where we build real products for real clients. I enjoy
            writing code that actually does something useful, whether
            that&apos;s a network tool, a Discord bot, a desktop app, or a
            client website.
          </p>
          <p className="text-lg mb-4">
            So far I&apos;ve shipped a port scanner with a full GUI, a 2D
            shooter game, a Discord bot, an android app with modern ui/ux
            (Nudge) and Neatify, a file organiser published on the Microsoft
            Store. On the client side, Astera has delivered websites for a
            clothing brand, a video editing agency, and a blogging platform.
          </p>
          <p className="text-lg mb-4">
            I also run a YouTube channel called MeowCode where I document what I
            build. I think being able to explain your work matters just as much
            as writing it.
          </p>
          <p className=" text-lg mb-4">
            Currently diving into Data Science while staying active in Python
            and web development. Always open to internships, collaborations, or
            just interesting conversations about things worth building.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
