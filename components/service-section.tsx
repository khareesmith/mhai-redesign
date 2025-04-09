"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PiArrowRightBold } from "react-icons/pi"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ServiceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="w-full py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid gap-8 md:grid-cols-3 md:gap-12 lg:gap-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Image column */}
          <motion.div
            className="relative overflow-hidden rounded-2xl md:col-span-1 aspect-[9/16]"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/doc.webp"
              alt="Medical professional with stethoscope"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            ></motion.div>
          </motion.div>

          {/* Content column */}
          <motion.div
            className="flex flex-col justify-center md:col-span-2"
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Lyris Medical Transcription</h2>
            <p className="mb-6 text-lg font-medium text-gray-700 dark:text-gray-300">
              We're committed to making healthcare more efficient
            </p>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              We're committed to making healthcare more efficient and reliable. Our advanced AI technology ensures that
              every interaction is captured with unparalleled accuracy, helping healthcare providers save time, reduce
              administrative burden, and focus on what matters most—patient care.
            </p>
            <div>
              <Button className="group relative overflow-hidden bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-cyan-700 dark:hover:bg-cyan-800">
                <span className="relative z-10 flex items-center">
                  LEARN MORE
                  <PiArrowRightBold className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-500 transition-all duration-300 group-hover:h-full group-hover:opacity-20"></span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

