"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PiCaretLeftBold, PiCaretRightBold, PiQuotesBold } from "react-icons/pi"
import { Button } from "@/components/ui/button"

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      quote:
        "MyHuman Ai has transformed our patient intake process. We've reduced administrative time by 70% while improving data accuracy.",
      author: "Dr. Sarah Johnson",
      title: "Chief Medical Officer, Westside Medical Group",
      image: "/sarahjohnson.webp",
    },
    {
      quote:
        "The Clarion transcription service has been a game-changer for our practice. It's like having an extra staff member who never takes a day off.",
      author: "Dr. Michael Chen",
      title: "Family Physician, Eastside Health Partners",
      image: "/michaelchen.webp",
    },
    {
      quote:
        "Our patients love the seamless intake process, and our staff appreciates the accurate, instant documentation. It's a win-win solution.",
      author: "Amanda Rodriguez",
      title: "Practice Manager, Northside Clinic",
      image: "/amandarodriguez.webp",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  // Calculate indices for preloading
  const nextIndex = (currentIndex + 1) % testimonials.length;
  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;

  return (
    <section className="w-full bg-gradient-to-r from-cyan-50 to-blue-50 py-20 dark:from-cyan-950/30 dark:to-blue-950/30 relative">
      {/* Preload hidden images */}
      <div style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', opacity: 0 }}>
        {currentIndex !== nextIndex && (
          <img src={testimonials[nextIndex].image} alt="" width={1} height={1} loading="lazy" />
        )}
        {currentIndex !== prevIndex && nextIndex !== prevIndex && (
          <img src={testimonials[prevIndex].image} alt="" width={1} height={1} loading="lazy" />
        )}
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" className="absolute opacity-[0.03]">
          <defs>
            <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Hear from healthcare professionals who have transformed their practices with MyHuman Ai.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 sm:p-10">
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-cyan-500/20"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </div>
            <div className="absolute left-6 top-6 text-cyan-500 opacity-20 dark:text-cyan-400 sm:left-10 sm:top-10">
              <PiQuotesBold className="h-16 w-16 rotate-180" />
            </div>

            <div className="relative z-10 min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <p className="mb-8 text-lg italic text-gray-700 dark:text-gray-300 sm:text-xl">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  <div className="flex flex-col items-center">
                    <div className="mb-3 h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].author}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold">{testimonials[currentIndex].author}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[currentIndex].title}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative z-20 mt-8 flex justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full"
                aria-label="Previous testimonial"
              >
                <PiCaretLeftBold className="h-5 w-5" />
              </Button>

              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      currentIndex === index ? "bg-cyan-500 w-6" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full"
                aria-label="Next testimonial"
              >
                <PiCaretRightBold className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

