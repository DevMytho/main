'use client'

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function CustomCursor() {
  const { theme } = useTheme()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28 })

  const shadowX = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const shadowY = useSpring(mouseY, { stiffness: 120, damping: 20 })

  const [variant, setVariant] = useState("default")

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleHover = () => setVariant("hover")
    const handleLeave = () => setVariant("default")

    window.addEventListener("mousemove", moveCursor)

    const hoverElements = document.querySelectorAll(
      "a, button, input, textarea, [data-cursor-hover]"
    )

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover)
      el.addEventListener("mouseleave", handleLeave)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover)
        el.removeEventListener("mouseleave", handleLeave)
      })
    }
  }, [mouseX, mouseY])

  const cursorVariants = {
    default: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: "rgba(var(--primary), 0.9)"
  },
    hover: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "rgba(var(--primary), 0.95)",
    mixBlendMode: "difference"
  }
  }

  const cursorColor =
    theme === "light"
      ? "rgba(0,0,0,0.4)"
      : "rgba(120,119,198,0.5)"

  return (
    <>
      {/* Shadow */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 bg-primary opacity-20"
        style={{
          x: shadowX,
          y: shadowY,
          translateX: "-50%",
          translateY: "-50%",
          width: 40,
          height: 40
        }}
      />

      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: `0 0 20px 6px ${cursorColor}`
        }}
        variants={cursorVariants}
        animate={variant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  )
}
