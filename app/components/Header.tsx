'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = ['home', 'about', 'skills', 'projects', 'contact']

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-10 bg-background border-b"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-2xl font-bold cursor-none"
        >
          Devvv
        </motion.div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Button key={item} variant="ghost" onClick={() => scrollToSection(item)} className="cursor-none">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="cursor-none">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-t"
        >
          {navItems.map((item) => (
            <Button key={item} variant="ghost" onClick={() => scrollToSection(item)} className="w-full justify-start cursor-none">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}

