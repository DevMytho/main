import { NextResponse } from "next/server";

const projects = [
  {
    id: "1",
    title: "Port-scanner with GUI",
    image: "/image/port-scanner.png",
    description:
      "A Python-based network security tool for Linux with a full GUI. Scans open ports, identifies services, and helps analyse network exposure. Documented on YouTube @MeowCode.",
    deployLink: "",
    githubLink: "https://github.com/devmytho/port-scanner",
  },
  {
    id: "2",
    title: "Nudge",
    image: "/image/nudge.jpg",
    description:
      "A minimal Android to-do app built with Kotlin and Firebase. Features real-time sync, Firebase Authentication, and a clean UI focused on performance. Currently at ~17MB with 15+ active users.",
    deployLink: "",
    githubLink: "https://github.com/DevMytho/Nudge",
  },

  {
    id: "3",
    title: "Shooter Game (Pygame)",
    image: "/image/shooter.png",
    description: "A simple platformer shooting game made using Pygame.",
    deployLink: "",
    githubLink: "https://github.com/DevMytho/Shooter",
  },
  {
    id: "4",
    title: "Profile Website (Old)",
    image: "/image/pf-web.png",
    description: "A personal profile website showcasing my work.",
    deployLink: "https://devmytho.github.io/profile/",
    githubLink: "https://github.com/devmytho/profile",
  },
  {
    id: "5",
    title: "SEO Modified Website",
    image: "/image/brew.png",
    description: "An SEO-optimized website for Discord Server.",
    deployLink: "https://brewdies.co.in",
    githubLink: "https://github.com/devmytho/brewdies",
  },
];

export async function GET() {
  return NextResponse.json(projects, { status: 200 });
}
