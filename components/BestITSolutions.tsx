'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp,
  Shield,
  Target,
  Rocket,
  HeadphonesIcon,
  Zap,
} from 'lucide-react'

export default function BestITSolutions() {
  const highlights = [
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Systems that grow as your business grows.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'High-quality, protected technology solutions.',
    },
    {
      icon: Target,
      title: 'Business-Oriented Approach',
      description: 'Technology aligned with your business goals.',
    },
    {
      icon: Rocket,
      title: 'Future-Ready Technology',
      description: 'Leveraging AI, cloud, and latest frameworks.',
    },
    {
      icon: HeadphonesIcon,
      title: 'End-to-End Support',
      description: 'From planning to deployment and maintenance.',
    },
    {
      icon: Zap,
      title: 'High Performance & Speed',
      description: 'Optimized systems built for speed, stability, and peak performance.',
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #004B78 0%, #00A485 100%)' }}>
      {/* Gradient Orbs - Option B */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Left Orb - Teal */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 164, 133, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Top Right Orb - Blue */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 75, 120, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Bottom Left Orb - Purple */}
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 25, 0],
            y: [0, -25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Bottom Right Orb - Teal/Blue Mix */}
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 164, 133, 0.35) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Animated Grid Pattern - Option A */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4">
            Best IT Solutions That Scale With Your Business
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            We deliver end-to-end IT solutions that grow with your business,
            ensuring efficiency, security, and measurable results.
          </p>
          <div className="w-24 h-1 bg-white mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <highlight.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">{highlight.title}</h3>
              <p className="text-sm sm:text-base text-primary-100 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ color: '#004B78' }}
          >
            Discover Our Solutions
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

