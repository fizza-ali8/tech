'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Globe,
  Brain,
  Smartphone,
  Palette,
  Image,
  Search,
  Cloud,
  Settings,
} from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description:
        'Custom software solutions designed to optimize business processes, improve efficiency, and drive measurable results.',
      color: 'from-[#004B78] to-[#00A485]',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description:
        'Modern, responsive, and high-performance websites styled according to your brand and audience, ensuring growth and engagement.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Brain,
      title: 'AI Automation (Workflow & Custom Rag Chatbots)',
      description:
        'Intelligent AI-powered systems that automate tasks, analyze data, and enhance decision-making for smarter business operations.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description:
        'User-friendly mobile applications built for performance, scalability, and seamless experiences across platforms.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Intuitive UI/UX designs focused on usability, engagement, and turning ideas into impactful digital products.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Image,
      title: 'Graphic Design',
      description:
        'Creative branding and visual design solutions including logos, brand identity, and marketing material that help your business stand out and leave a lasting impression.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description:
        'Data-driven SEO strategies to increase search visibility, attract qualified traffic, and convert visitors into loyal customers, boosting your online presence.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description:
        'Scalable and secure cloud solutions that enable seamless infrastructure management, improved performance, and cost-efficient growth for your business.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Settings,
      title: 'DevOps',
      description:
        'End-to-end DevOps solutions that streamline development, automate deployments, and ensure faster, more reliable software delivery.',
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <motion.div
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
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
            className="inline-block px-6 py-3 md:px-8 md:py-4 text-white rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#004B78] to-[#00A485] hover:from-[#00A485] hover:to-[#004B78]"
          >
            View All Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

