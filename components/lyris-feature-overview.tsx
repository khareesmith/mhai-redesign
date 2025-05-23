"use client"

import Image from "next/image"
import { PiCheckCircleFill } from "react-icons/pi";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const features = [
  "Performs patient intake, transcription, and summarization",
  "Available 24/7, scalable to meet any demand",
  "Multilingual capabilities for diverse patient populations",
  "Regulatory and HIPAA compliant out-of-the-box",
  "Eliminates human error & never has a bad day",
]

export default function LyrisFeatureOverview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="w-full bg-white dark:bg-gray-950 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Content column */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Lyris Patient Intake
            </h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <PiCheckCircleFill className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image column */}
          <motion.div
            className="relative aspect-video overflow-hidden rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="/patient-intake.webp"
              alt="Lyris Patient Intake Application Screenshot"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-50"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 