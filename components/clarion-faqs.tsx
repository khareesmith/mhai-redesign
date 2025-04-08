"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is my medical information secure? Will my patients' information 'show up on the internet'?",
    answer: "Every part of the process from authenticating users, to storage of past conversations is HIPAA compliant and user encrypted. Standard patient intake transcriptions and summarizations are stored on your office's environment and deleted from MHAi's systems within 90 days of intake.",
  },
  {
    question: "How much up-front work is this going to be for my office team?",
    answer: "Our base Patient Intake Ai module requires a list of intake questions from your office, as well as any secondary questions your team would want answered. Your office likely already has a version of this for training new staff. If not, filling out and reviewing this script can take anywhere between 30 minutes and 2 hours, depending on the level of detail your team wants covered in the initial consult. In addition to the intake questions, we will want your team's review and approval before real-world deployment to ensure you are happy with your bespoke Patient Intake Ai before it deploys.",
  },
  {
    question: "Help me understand why the Patient Intake Ai doesn't hallucinate when I hear that that's a big problem with Ai?",
    answer: "What makes MHAi technology different is that we have strict guardrails on our proprietary base module (which can be adjusted, improved, changed) to ensure the conversation is guided by our clients' processes and goals. The Patient Intake Ai cannot get agitated or act in a rude or dismissive manner like real humans can. It also cannot give advice or answer questions with creativity (performing deeply creative tasks is where hallucination can occur in some commercial Ai products, and that is disabled by our guardrails.)",
  },
]

export default function ClarionFAQs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="w-full bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
} 