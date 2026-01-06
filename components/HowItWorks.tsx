'use client'

import { motion } from 'framer-motion'
import {
  Search,
  FileText,
  Code,
  CheckCircle,
  Rocket,
} from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Consultation',
      description: 'Understanding your goals and challenges.',
      number: '01',
    },
    {
      icon: FileText,
      title: 'Planning & Strategy',
      description: 'Roadmap and technical strategy for your solution.',
      number: '02',
    },
    {
      icon: Code,
      title: 'Design & Development',
      description: 'Creating scalable, user-friendly digital products.',
      number: '03',
    },
    {
      icon: CheckCircle,
      title: 'Testing & Quality Assurance',
      description: 'Ensuring functionality, security, and reliability.',
      number: '04',
    },
    {
      icon: Rocket,
      title: 'Deployment & Support',
      description: 'Seamless launch with continuous support.',
      number: '05',
    },
  ]

  return (
    <section
      id="process"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            From Concept to Launch:{' '}
            <span className="text-[#00A485]">Our Proven Process</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            We follow a structured approach to deliver high-quality IT solutions
            that align with your business goals.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2" style={{ background: 'linear-gradient(to right, rgba(0, 75, 120, 0.2), rgba(0, 164, 133, 0.5), rgba(0, 75, 120, 0.2))' }} />

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-gradient-to-br from-primary-50 to-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative z-10"
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <motion.div
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #004B78 0%, #00A485 100%)' }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-200">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-8 sm:mt-12 md:mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 md:px-8 md:py-4 text-white rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#004B78] to-[#00A485] hover:from-[#00A485] hover:to-[#004B78]"
          >
            Start Your Project Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

