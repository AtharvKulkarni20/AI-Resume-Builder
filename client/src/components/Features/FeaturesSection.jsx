"use client"

import { motion } from "framer-motion"
import  FeatureCard  from "./FeatureCard"
import { Clock, Shield, PenTool, Brain, Star, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Craft Your Best Resume in Minutes",
    description: "Quick and effortless resume building with our intuitive interface and smart templates.",
  },
  {
    icon: Shield,
    title: "ATS-Friendly Templates",
    description: "Ensure your resume passes automated tracking systems with our optimized formats.",
  },
  {
    icon: PenTool,
    title: "Expertly Curated Content",
    description: "Professionally written sections tailored for different jobs and industries.",
  },
  {
    icon: Brain,
    title: "AI-Powered Assistance",
    description: "Smart suggestions and auto-completion while editing to enhance your content.",
  },
  {
    icon: Star,
    title: "Stand Out From the Crowd",
    description: "Unique, professional templates designed to impress recruiters and hiring managers.",
  },
  {
    icon: TrendingUp,
    title: "Maximize Your Earning Potential",
    description: "Build resumes that align with high-paying opportunities in your field.",
  },
]

export default function FeaturesSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Features we offer...</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to create a professional resume that gets you hired
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
