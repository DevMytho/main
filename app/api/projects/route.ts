import { NextResponse } from "next/server";

const projects = [
  {
    id: "1",
    title: "Profile Website (Old)",
    image: "/image/pf-web.png",
    description: "A personal profile website showcasing my work.",
    deployLink: "https://devmytho.github.io/profile/",
    githubLink: "https://github.com/devmytho/profile",
  },
  {
    id: "2",
    title: "SEO Modified Website",
    image: "/image/brew.png",
    description: "An SEO-optimized website for Discord Server.",
    deployLink: "https://brewdies.co.in",
    githubLink: "https://github.com/devmytho/brewdies",
  },
  {
    id: "3",
    title: "Shooter Game (Pygame)",
    image: "/image/shooter.png",
    description: "A simple platformer shooting game made using Pygame.",
    deployLink: "",
    githubLink: "https://github.com/DevMytho/Shooter",
  },
];

export async function GET() {
  return NextResponse.json(projects, { status: 200 });
}
