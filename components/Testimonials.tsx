'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'They built our platform exactly as we imagined — fast, secure, and scalable. The team was professional and responsive throughout the entire process.',
      author: 'Alex Robertson',
      role: 'CEO',
      company: 'TechLabs',
      rating: 5,
    },
    {
      quote:
        'Aurora Nexus transformed our business operations with their AI automation solutions. We\'ve seen incredible efficiency gains and cost savings.',
      author: 'Shelia Abernathy',
      role: 'CTO',
      company: 'InnovateCorp',
      rating: 5,
    },
    {
      quote:
        'Outstanding work! The website they created for us has significantly increased our online presence and customer engagement. Highly recommended!',
      author: 'Michael Chen',
      role: 'Marketing Director',
      company: 'DigitalFirst',
      rating: 5,
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            What Our <span className="text-[#00A485]">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-primary-50 to-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" style={{ color: '#00A485', opacity: 0.3 }} />
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-3 sm:pt-4">
                <p className="text-sm sm:text-base font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

