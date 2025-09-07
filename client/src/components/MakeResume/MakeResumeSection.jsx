"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function MakeResumeSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyan-500/5 to-primary/10"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-primary mr-3" />
            <span className="text-primary font-semibold text-lg">Ready to Get Started?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Start Creating Your{" "}
            <span className="text-white bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
              Resume Today
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of professionals who have successfully landed their dream jobs with our AI-powered resume
            builder.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="font-semibold rounded-xl transition-all
                hover:bg-[#00FFFF]  border-2 border-[#00FFFF] text-[#00FFFF]">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className=" py-2 font-semibold rounded-xl transition-all
                bg-[#00FFFF] text-black hover:bg-transparent hover:text-[#00FFFF] border-2 border-[#00FFFF]">
              View Templates
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mt-6"
          >
            No credit card required • Free templates available • Export in multiple formats
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
