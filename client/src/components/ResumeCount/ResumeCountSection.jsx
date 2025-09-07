"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import CountUp from "react-countup"
import { FileText, Users, Award, Download } from "lucide-react"

const stats = [
  {
    icon: FileText,
    number: 120000,
    suffix: "+",
    label: "Resumes Created",
    description: "Professional resumes built",
  },
  {
    icon: Users,
    number: 50000,
    suffix: "+",
    label: "Successful Hires",
    description: "People got their dream jobs",
  },
  {
    icon: Award,
    number: 50,
    suffix: "+",
    label: "Templates Available",
    description: "Professional designs",
  },
  {
    icon: Download,
    number: 95,
    suffix: "%",
    label: "Success Rate",
    description: "Interview callback rate",
  },
]

export default function ResumeCountSection() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Trusted by Professionals Worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join the thousands who have transformed their careers with our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: index * 0.1 },
              }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsVisible(true)}
              className="text-center group"
            >
              <div className="bg-card shadow-[0_0_15px_#00FFFF] backdrop:blur-md border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">
                    {isVisible && <CountUp end={stat.number} duration={2.5} delay={index * 0.2} separator="," />}
                    <span className="text-primary">{stat.suffix}</span>
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-1 text-foreground">{stat.label}</h3>

                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
