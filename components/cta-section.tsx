"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8 shadow-xl sm:p-12"
        >
          {/* Enhanced background effects */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600/80 to-blue-700/80"
              animate={{
                background: [
                  "linear-gradient(to right, rgba(8, 145, 178, 0.8), rgba(29, 78, 216, 0.8))",
                  "linear-gradient(to right, rgba(6, 182, 212, 0.8), rgba(37, 99, 235, 0.8))",
                  "linear-gradient(to right, rgba(8, 145, 178, 0.8), rgba(29, 78, 216, 0.8))",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            {/* Animated particles */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  y: [0, Math.random() * -100],
                  x: [0, Math.random() * 50 - 25],
                  opacity: [0, 0.8, 0],
                  scale: [0, Math.random() * 1 + 1, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 10,
                }}
              />
            ))}

            {/* Light beams */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`beam-${i}`}
                className="absolute h-[200%] w-[10px] bg-white/10 blur-md"
                style={{
                  top: "-50%",
                  left: `${i * 30 + 20}%`,
                  transformOrigin: "center",
                  rotate: "45deg",
                }}
                animate={{
                  opacity: [0, 0.3, 0],
                  left: [`${i * 30 + 20}%`, `${i * 30 + 25}%`, `${i * 30 + 20}%`],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
            <Sparkles className="mx-auto mb-6 h-12 w-12 text-cyan-200" />
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to transform your healthcare practice?
            </h2>
            <p className="mb-8 text-lg text-cyan-100 sm:text-xl">
              Join the healthcare providers who are saving time, reducing errors, and improving patient care with
              MyHuman Ai.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Link href="/contact">
                <Button size="lg" className="group relative overflow-hidden bg-white text-cyan-700 hover:bg-cyan-50">
                  <span className="relative z-10 flex items-center">
                    Schedule a Demo
                    <motion.div className="ml-2 flex items-center" whileHover={{ x: 5 }}>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </span>
                  <span className="absolute bottom-0 left-0 h-0 w-full bg-gradient-to-r from-cyan-200 to-blue-200 transition-all duration-300 group-hover:h-full"></span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden border-white text-cyan-700 hover:bg-white/10 hover:text-white dark:text-white dark:hover:text-white"
                >
                  <span className="relative z-10">Contact Us</span>
                  <span className="absolute inset-0 border border-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  <span className="absolute -inset-px scale-x-0 bg-white/10 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

