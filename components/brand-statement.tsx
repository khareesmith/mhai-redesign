"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function BrandStatement() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="flex flex-col items-center justify-center space-y-6 text-center sm:flex-row sm:space-y-0 sm:space-x-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-cyan-600">My</span> Human.
            </h2>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 w-0 bg-cyan-600"
              animate={inView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-cyan-600">My</span> Ai.
            </h2>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 w-0 bg-cyan-600"
              animate={inView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

