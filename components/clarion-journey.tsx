"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const journeySteps = [
  {
    title: "Patient Receives Intake Invitation",
    description: "After scheduling, patients receive an intake invitation via text, email, or phone prompting them to start.",
    image: "/notification.webp",
  },
  {
    title: "Automated Intake Call from Clarion Ai",
    description: "Clicking the invite link immediately triggers an automated call from Clarion Ai to begin the intake.",
    image: "/phonecall.webp",
  },
  {
    title: "Clarion Ai Guides Intake with Your Custom Script",
    description: "Clarion Ai carefully follows your office's custom script, asking all necessary intake and follow-up questions.",
    image: "/script2.webp",
  },
  {
    title: "Instant Summary with Key Patient Info",
    description: "After the call, your office instantly receives a summarized transcript with key patient information.",
    image: "/transcription-2.webp",
  },
]

export default function ClarionJourney() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="w-full bg-white dark:bg-gray-950 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            The Patient Intake Journey
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg bg-gray-50 shadow-md dark:bg-gray-800"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="relative h-40 w-full bg-gray-200 dark:bg-gray-700">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {`${index + 1}. ${step.title}`}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 