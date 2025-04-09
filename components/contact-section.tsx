"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PiPhoneFill, PiEnvelopeSimpleFill, PiMapPinFill, PiPaperPlaneTiltFill } from "react-icons/pi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    console.log("Form Data Submitted:", formData)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Placeholder: Replace with actual form submission logic
    // try {
    //   const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
    //   if (!response.ok) throw new Error('Submission failed');
    //   setSubmitStatus('success');
    //   setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' }); // Clear form
    // } catch (error) {
    //   console.error('Submission error:', error);
    //   setSubmitStatus('error');
    // }

    // Using placeholder success for now
    setSubmitStatus('success');
    setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' }); // Clear form

    setIsSubmitting(false)

    // Optionally hide status message after a delay
    setTimeout(() => setSubmitStatus(null), 5000);
  }

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Contact Us
            </motion.h2>
            <motion.p
              className="mx-auto mb-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
            >
              See firsthand how the Lyris product suite handles even the most complex cases with unmatched precision.
            </motion.p>
            <motion.p className="mb-8 text-gray-600 dark:text-gray-400">
              Fill out the form to receive more information, or give us a call.
            </motion.p>
            <div className="space-y-4">
              <a href="tel:4698846555" className="flex items-center text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors">
                <PiPhoneFill className="mr-3 h-5 w-5" />
                <span className="font-medium">469 884 6555</span>
              </a>
              <a href="mailto:info@myhumanai.com" className="flex items-center text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors">
                <PiEnvelopeSimpleFill className="mr-3 h-5 w-5" />
                <span className="font-medium">info@myhumanai.com</span> {/* Placeholder Email */} 
              </a>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <PiMapPinFill className="mr-3 h-5 w-5" />
                <span className="font-medium">Dallas, TX</span> {/* Placeholder Location */} 
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john.doe@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(123) 456-7890" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={4} />
              </div>
              <div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message <PiPaperPlaneTiltFill className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
              {submitStatus === 'success' && (
                <p className="text-sm text-green-600 dark:text-green-400">Message sent successfully! We'll be in touch soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-600 dark:text-red-400">Something went wrong. Please try again later.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 