"use client"

import { motion } from "framer-motion"
import { CheckCircle, FileText, Award, Globe } from "lucide-react"
import CountUp from "react-countup"
import { useInView } from "framer-motion"
import { useRef } from "react"
import StarsCanvas from "../Canvas/StarCanvas"

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const highlights = [
    {
      icon: CheckCircle,
      title: "AI-Powered",
      description: "Advanced AI algorithms help create compelling resume content tailored to your industry.",
    },
    {
      icon: FileText,
      title: "ATS-Friendly",
      description: "All templates are optimized to pass Applicant Tracking Systems used by top companies.",
    },
    {
      icon: Award,
      title: "Professional Templates",
      description: "Expertly designed templates created by hiring managers and career experts.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Trusted by professionals in over 150 countries worldwide.",
    },
  ]

  const stats = [
    { number: 120000, suffix: "+", label: "Resumes Created" },
    { number: 50000, suffix: "+", label: "Successful Hires" },
    { number: 98, suffix: "%", label: "Success Rate" },
    { number: 150, suffix: "+", label: "Countries Served" },
  ]

  return (
    <section className="py-20 ">
      <StarsCanvas />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Empowering professionals worldwide with cutting-edge AI technology to create resumes that get results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-3xl border border-cyan-500/30 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <FileText className="w-16 h-16 text-white mx-auto mb-4" />
                  <div className="text-white font-bold text-xl">AI Resume</div>
                  <div className="text-white/80 text-sm">Builder</div>
                </div>
              </div>
            </div>
    
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Revolutionizing Resume Creation with AI</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              At AI Resume, we believe that everyone deserves a chance to showcase their potential. Our mission is to
              democratize professional opportunities by providing cutting-edge AI tools that help job seekers create
              compelling resumes that stand out in today's competitive market.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Founded by a team of career experts, AI researchers, and hiring managers, we understand the challenges of
              modern job searching. Our platform combines the latest in artificial intelligence with deep industry
              insights to create resumes that not only look professional but also effectively communicate your unique
              value proposition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{highlight.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{highlight.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-colors duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-2">
                {isInView && (
                  <CountUp end={stat.number} duration={2.5} delay={1.2 + index * 0.1} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
