"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
// import { Target, Heart, Lightbulb, Users } from "lucide-react" // Example icons
import { PiHeartFill, PiLightbulbFill, PiUsersFill } from "react-icons/pi"; // Removed PiCrosshairSimpleBold as Target wasn't used

const values = [
  {
    icon: PiLightbulbFill, // Replaced Lightbulb
    title: "Innovation",
    description: "Continuously exploring new AI frontiers to enhance human potential.",
  },
  {
    icon: PiHeartFill, // Replaced Heart
    title: "Empathy",
    description: "Designing technology with a deep understanding of human needs and experiences.",
  },
  {
    icon: PiUsersFill, // Replaced Users
    title: "Accessibility",
    description: "Making powerful AI tools available and affordable for everyone.",
  },
]

export default function AboutMissionValues() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="w-full bg-white dark:bg-gray-950 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-cyan-600 dark:text-cyan-400 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-700 dark:text-gray-300">
            To provide affordable and accessible hyper-specialized professional services to <span className="font-semibold text-cyan-700 dark:text-cyan-300">Everyone</span>, expanding the reach of human excellence through Ai.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="mb-12 text-center text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
            Core Values
          </h3>
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-400">
                  <value.icon className="h-6 w-6" />
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 