'use client'

import { motion } from 'framer-motion'
import { Target, Zap, Heart } from 'lucide-react'

export default function AboutSection() {
  const features = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Cutting-edge solutions for modern challenges',
    },
    {
      icon: Zap,
      title: 'Quality',
      description: 'High standards in every project we deliver',
    },
    {
      icon: Heart,
      title: 'Responsiveness',
      description: 'Dedicated support when you need it most',
    },
  ]

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden"
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
            About Us –{' '}
            <span className="text-[#00A485]">Technology with Purpose</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              Your Partner in Digital Transformation
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
              At Aurora Nexus, we help businesses transform ideas into scalable
              digital solutions that drive real results. With a focus on
              innovation, quality, and responsiveness, we deliver services that
              make a measurable impact.
            </p>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 text-white rounded-lg font-semibold transition-colors bg-gradient-to-r from-[#004B78] to-[#00A485] hover:from-[#00A485] hover:to-[#004B78]"
            >
              Learn More About Us
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 sm:p-6 rounded-xl shadow-lg"
                >
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#00A485] mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

