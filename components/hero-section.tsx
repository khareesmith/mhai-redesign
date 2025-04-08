"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PiCaretRightBold } from "react-icons/pi"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/circuits-3.webp"
          alt="Tech circuit background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 mix-blend-overlay"></div>
      </div>

      {/* Enhanced animated circuit lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${Math.random() * 20},${50 + (i - 4) * 10} Q${25 + Math.random() * 10},${30 + Math.random() * 20} ${50 + Math.random() * 5},${50 + (i - 4) * 5} T${100 - Math.random() * 20},${50 + (i - 4) * 8}`}
              stroke={`rgba(${14 + i * 10}, ${165 + i * 5}, ${233 - i * 10}, 0.5)`}
              strokeWidth="0.2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0.1 }}
              animate={{
                pathLength: 1,
                opacity: [0.1, 0.3, 0.1],
                y: [0, Math.random() * 5 - 2.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                ease: "easeInOut",
                delay: i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.1, scale: 0.5 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [0.5, 1, 0.5],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              MyHuman <span className="text-cyan-400">Ai</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="mx-auto mb-8 max-w-2xl text-lg text-cyan-300 sm:text-xl md:text-2xl">
              Expanding the Reach of Human Excellence through Ai
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/products">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-cyan-500 hover:bg-cyan-600 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Explore Products
                  <PiCaretRightBold className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="group relative ml-4 overflow-hidden border-cyan-500 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 z-0 bg-cyan-950 opacity-0 transition-opacity group-hover:opacity-100"></span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="flex h-10 w-6 items-center justify-center rounded-full border border-cyan-400/30"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 h-16 w-full overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-white dark:fill-background"
          ></path>
        </svg>
      </div>
    </section>
  )
}

