"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PiTextTBold, PiPhoneCallBold, PiClipboardTextBold, PiFloppyDiskBold } from "react-icons/pi"

const journeySteps = [
  {
    icon: PiTextTBold,
    title: "Patient Receives Invite",
    description: "A text, email, or phone invite prompts the patient to begin intake.",
    image: "/journey-invite.webp",
  },
  {
    icon: PiPhoneCallBold,
    title: "Automated Intake Call from Lyris Ai",
    description: "Clicking the invite link immediately triggers an automated call from Lyris Ai to begin the intake.",
    image: "/journey-call.webp",
  },
  {
    icon: PiClipboardTextBold,
    title: "Lyris Ai Guides Intake with Your Custom Script",
    description: "Lyris Ai carefully follows your office's custom script, asking all necessary intake and follow-up questions.",
    image: "/journey-script.webp",
  },
  {
    icon: PiFloppyDiskBold,
    title: "Instant Transcription & Summary",
    description: "Summary notes are instantly sent to the office with key information highlighted, ready for review.",
    image: "/journey-summary.webp",
  },
]

export default function LyrisJourney() {
  const { ref, inView } = useInView({
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