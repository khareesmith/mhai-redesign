"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Clock, Globe2, Shield, Zap, Scale, CheckCircle2 } from "lucide-react"

export default function FeatureSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Our AI systems work around the clock, ensuring your services are always accessible.",
    },
    {
      icon: <Globe2 className="h-6 w-6" />,
      title: "Multilingual Support",
      description: "Break language barriers with support for multiple languages to serve diverse populations.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "HIPAA Compliant",
      description: "Built with security and compliance in mind, meeting all healthcare regulatory requirements.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Processing",
      description: "Transcriptions and summaries delivered in real-time, eliminating waiting periods.",
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Scalable Solution",
      description: "Easily scales with your needs, whether you're a small practice or large hospital.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Error-Free Results",
      description: "Eliminate human error with our precision-engineered AI systems.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="w-full bg-gray-50 py-20 dark:bg-gray-900/50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" className="absolute opacity-[0.03]">
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Advanced Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our AI-powered solutions come with cutting-edge capabilities designed to transform your workflow.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="mb-4 inline-flex rounded-lg bg-cyan-100 p-3 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

