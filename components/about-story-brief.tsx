"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutStoryBrief() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="w-full bg-white dark:bg-gray-950 py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Story
          </h2>
          <div className="prose prose-lg dark:prose-invert mx-auto text-gray-600 dark:text-gray-400">
            <p>
              Founded on the principle that technology should amplify human capability, MyHuman Ai began with a vision to bridge the gap between advanced AI and practical, everyday professional needs. We saw the potential for AI to alleviate administrative burdens, enhance accuracy, and ultimately free up professionals to focus on the core, human aspects of their work.
            </p>
            <p>
              Driven by collaboration and a relentless pursuit of excellence, we build AI that works seamlessly alongside humans, augmenting their skills and expanding their reach.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 