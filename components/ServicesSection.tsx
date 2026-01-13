'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Code,
  Globe,
  Brain,
  Smartphone,
  Palette,
  Image as ImageIcon,
  Search,
  Cloud,
  Settings,
} from 'lucide-react'

export default function ServicesSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0) // For seamless visual position

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description:
        'Custom software solutions designed to optimize business processes, improve efficiency, and drive measurable results.',
      color: 'from-[#004B78] to-[#00A485]',
      image: '💻',
      gradient: 'from-blue-600 to-teal-500',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description:
        'Modern, responsive, and high-performance websites styled according to your brand and audience, ensuring growth and engagement.',
      color: 'from-green-500 to-green-600',
      image: '🌐',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Brain,
      title: 'AI Automation',
      description:
        'Intelligent AI-powered systems that automate tasks, analyze data, and enhance decision-making for smarter business operations.',
      color: 'from-purple-500 to-purple-600',
      image: '🤖',
      gradient: 'from-purple-600 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description:
        'User-friendly mobile applications built for performance, scalability, and seamless experiences across platforms.',
      color: 'from-pink-500 to-pink-600',
      image: '📱',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Intuitive UI/UX designs focused on usability, engagement, and turning ideas into impactful digital products.',
      color: 'from-orange-500 to-orange-600',
      image: '🎨',
      gradient: 'from-orange-500 to-amber-600',
    },
    {
      icon: ImageIcon,
      title: 'Graphic Design',
      description:
        'Creative branding and visual design solutions including logos, brand identity, and marketing material that help your business stand out and leave a lasting impression.',
      color: 'from-red-500 to-red-600',
      image: '🖼️',
      gradient: 'from-red-500 to-orange-600',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description:
        'Data-driven SEO strategies to increase search visibility, attract qualified traffic, and convert visitors into loyal customers, boosting your online presence.',
      color: 'from-yellow-500 to-yellow-600',
      image: '🔍',
      gradient: 'from-yellow-500 to-amber-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description:
        'Scalable and secure cloud solutions that enable seamless infrastructure management, improved performance, and cost-efficient growth for your business.',
      color: 'from-cyan-500 to-cyan-600',
      image: '☁️',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Settings,
      title: 'DevOps',
      description:
        'End-to-end DevOps solutions that streamline development, automate deployments, and ensure faster, more reliable software delivery.',
      color: 'from-indigo-500 to-indigo-600',
      image: '⚙️',
      gradient: 'from-indigo-600 to-purple-600',
    },
  ]

  // Duplicate services for infinite scroll
  const duplicatedServices = [...services, ...services, ...services]

  // Auto-scroll: move one card every 2 seconds, circular infinite loop
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Keep incrementing, loop back to 0 after last card (circular)
        return (prev + 1) % services.length
      })
      setDisplayIndex((prev) => {
        // Keep incrementing for visual position (never resets, uses duplicated services)
        // When we reach end of second set, reset to start of second set seamlessly
        if (prev >= services.length * 2 - 4) {
          return services.length // Reset to start of second set (seamless)
        }
        return prev + 1
      })
    }, 2000) // Move every 2 seconds

    return () => clearInterval(interval)
  }, [isPaused, services.length])

  // Calculate translateX based on display index for seamless visual movement
  // On desktop: 4 cards visible, each card is calc((100%-4.5rem)/4)
  // We need to move by one card width + gap
  // Approximate: card is ~25% of container, gap is ~1.5rem which is ~1.5% on large screens
  // So we move by approximately 26.5% per card
  // Use displayIndex relative to second set for seamless loop
  const visualIndex = displayIndex >= services.length ? displayIndex - services.length : displayIndex
  const translateX = -(visualIndex * 26.5) // Move by one card width + gap

  // Get visible card indices for dots (based on original services array)
  const getVisibleIndices = () => {
    const indices = []
    for (let i = 0; i < 4; i++) {
      const actualIndex = (currentIndex + i) % services.length
      indices.push(actualIndex)
    }
    return indices
  }

  const visibleIndices = getVisibleIndices()

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
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
            Services That Drive{' '}
            <span className="text-[#00A485]">Digital Growth</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            We provide end-to-end IT solutions, from web and mobile apps to AI
            systems and digital product design, helping businesses scale
            efficiently.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative mb-8 md:mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{
                x: `${translateX}%`,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
              }}
            >
              {duplicatedServices.map((service, index) => (
                <motion.div
                  key={`${service.title}-${index}`}
                  className="flex-shrink-0 w-[calc(100vw-2rem)] md:w-[calc((100%-4.5rem)/4)]"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group h-full flex flex-col overflow-hidden">
                    {/* Image Section */}
                    <div
                      className={`relative h-48 bg-gradient-to-br ${service.gradient} overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl opacity-30">{service.image}</div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 flex-grow flex flex-col">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {services.map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  visibleIndices.includes(index)
                    ? 'w-8 h-3 bg-gradient-to-r from-[#004B78] to-[#00A485]'
                    : 'w-3 h-3 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 md:px-8 md:py-4 text-white rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#004B78] to-[#00A485] hover:from-[#00A485] hover:to-[#004B78]"
          >
            View All Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
