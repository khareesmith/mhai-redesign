"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 md:py-28">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          About MyHuman Ai
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-cyan-200 sm:text-xl">
          Discover the story, mission, and values driving our commitment to human excellence through AI.
        </p>
      </motion.div>
    </section>
  )
} 