"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function MissionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="w-full py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="mb-6 text-lg font-medium text-cyan-600 sm:text-xl" variants={itemVariants}>
            Our Mission
          </motion.h2>

          <motion.div className="relative mb-12 text-center" variants={itemVariants}>
            <h3 className="mx-auto max-w-4xl text-2xl font-bold text-cyan-600 sm:text-3xl md:text-4xl lg:text-5xl">
              To provide affordable and accessible hyper-specialized professional services to{" "}
              <span className="relative inline-block">
                Everyone.
                <motion.div
                  className="absolute -right-3 -top-3 -z-10 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)]"
                  initial={{ scale: 0.9, opacity: 0.7 }}
                  animate={{
                    scale: [0.9, 1.05, 0.9],
                    opacity: [0.7, 1, 0.7],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <svg
                    className="h-full w-full text-cyan-100 dark:text-cyan-900/30"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M139.2,-157.7C178.9,-130.5,207.8,-85.8,214.8,-39.5C221.8,6.8,206.9,54.7,179.4,90.9C151.9,127.1,111.8,151.6,69.6,169.6C27.4,187.6,-16.9,199,-59.6,188.5C-102.3,177.9,-143.4,145.3,-166.9,104.1C-190.4,62.9,-196.3,13.1,-186.9,-32.9C-177.6,-78.8,-153,-120.9,-118.6,-148.4C-84.2,-175.9,-40.1,-188.8,3.9,-193.5C47.9,-198.3,99.5,-184.9,139.2,-157.7Z"
                      transform="translate(100 100) scale(0.5)"
                    />
                  </svg>
                </motion.div>
              </span>
            </h3>
          </motion.div>

          <motion.p
            className="mx-auto max-w-2xl text-center text-base text-gray-600 dark:text-gray-400 sm:text-lg"
            variants={itemVariants}
          >
            We believe that AI should enhance human capabilities, not replace them. Our technology bridges the gap
            between advanced AI systems and the human touch that's essential in professional services.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

