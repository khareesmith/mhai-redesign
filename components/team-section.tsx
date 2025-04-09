"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const founders = [
  {
    name: "Andrew Schroeder",
    title: "Co-Founder",
    image: "/placeholder-person.svg?text=F1&height=200&width=200",
  },
  {
    name: "Austin Hamilton",
    title: "Co-Founder",
    image: "/placeholder-person.svg?text=F2&height=200&width=200",
  },
];

const keyTeam = [
  {
    name: "Sharon Teske",
    title: "Title",
    image: "/placeholder-person.svg?text=K1&height=150&width=150",
  },
  {
    name: "Alex Langkowski",
    title: "Title",
    image: "/placeholder-person.svg?text=K2&height=150&width=150",
  },
  {
    name: "Chris Llorca",
    title: "Title",
    image: "/placeholder-person.svg?text=K3&height=150&width=150",
  },
];

const otherTeam = [
  {
    name: "Kharee Smith",
    title: "Title",
    image: "/placeholder-person.svg?text=T1&height=100&width=100",
  },
  {
    name: "Team Member Two",
    title: "UX Designer",
    image: "/placeholder-person.svg?text=T2&height=100&width=100",
  },
    {
    name: "Team Member Three",
    title: "QA Specialist",
    image: "/placeholder-person.svg?text=T3&height=100&width=100",
  },
  {
    name: "Team Member Four",
    title: "Customer Support",
    image: "/placeholder-person.svg?text=T4&height=100&width=100",
  },
  // Add more team members as needed
];

// Reusable Team Member Card Component
const TeamMemberCard = ({ member, animationDelay, size = 'md' }: { member: any; animationDelay: number; size?: 'lg' | 'md' | 'sm' }) => {
  const imageSize = size === 'lg' ? 'h-48 w-48' : size === 'md' ? 'h-36 w-36' : 'h-24 w-24';
  const textSize = size === 'lg' ? 'text-xl' : size === 'md' ? 'text-lg' : 'text-base';
  const titleSize = size === 'lg' ? 'text-base' : size === 'md' ? 'text-sm' : 'text-xs';

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
    >
      <div className={`relative ${imageSize} mb-4 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700`}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes={size === 'lg' ? "12rem" : size === 'md' ? "9rem" : "6rem"}
        />
      </div>
      <h4 className={`${textSize} font-semibold text-gray-900 dark:text-white`}>{member.name}</h4>
      <p className={`${titleSize} text-cyan-600 dark:text-cyan-400`}>{member.title}</p>
    </motion.div>
  );
};

export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold as needed for different sections
  })

  return (
    <section ref={ref} className="w-full bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            The passionate individuals driving MyHuman Ai forward.
          </p>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {founders.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} animationDelay={0.2 + index * 0.1} size="lg" />
          ))}
        </motion.div>

        {/* Key Team Section */}
        {keyTeam.length > 0 && (
          <motion.div
            className="mb-16 border-t border-gray-200 dark:border-gray-700 pt-16"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              {keyTeam.map((member, index) => (
                 <TeamMemberCard key={member.name} member={member} animationDelay={0.4 + index * 0.1} size="md" />
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Team Section */}
        {otherTeam.length > 0 && (
          <motion.div
            className="border-t border-gray-200 dark:border-gray-700 pt-16"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:gap-10">
              {otherTeam.map((member, index) => (
                 <TeamMemberCard key={member.name} member={member} animationDelay={0.6 + index * 0.05} size="sm" />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
} 