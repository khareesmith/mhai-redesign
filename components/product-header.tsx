"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ProductHeader() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-850 py-16 sm:py-24">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 text-lg font-semibold text-cyan-600 dark:text-cyan-400">
          Clarion
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Ai-Powered Patient Intake
        </h1>
      </motion.div>
    </section>
  )
} 