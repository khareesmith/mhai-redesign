"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
// import { ShieldCheck, UserCheck, Zap } from "lucide-react" // Example icons
import { PiShieldCheckFill, PiUserCircleCheckFill, PiLightningFill } from "react-icons/pi";
import { FiUsers, FiTarget, FiShield } from "react-icons/fi"

const pillars = [
  {
    icon: FiUsers,
    title: "Accessibility",
    description: "Patients can provide requisite information quickly and easily.",
  },
  {
    icon: FiTarget,
    title: "Personalization",
    description: "Providers wield unequivocal command over patient experience.",
  },
  {
    icon: FiShield,
    title: "Ethical Technology",
    description: "Ensuring ethical excellence in the technological landscape.",
  },
]

export default function LyrisPillars() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="w-full bg-gradient-to-b from-gray-100 to-white dark:from-gray-850 dark:to-gray-950 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-8 md:grid-cols-3 md:gap-12 lg:gap-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-400">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{pillar.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 