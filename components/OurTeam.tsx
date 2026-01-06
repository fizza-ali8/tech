'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, Shield, Code, Palette, Settings } from 'lucide-react'

export default function OurTeam() {
  const teamMembers = [
    {
      name: 'Alex Robertson',
      role: 'Head of Cybersecurity',
      expertise: 'Security Architecture & Risk Management',
      icon: Shield,
    },
    {
      name: 'Shelia Abernathy',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development & AI Integration',
      icon: Code,
    },
    {
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      expertise: 'User Experience & Product Design',
      icon: Palette,
    },
    {
      name: 'Sarah Johnson',
      role: 'DevOps Engineer',
      expertise: 'Cloud Infrastructure & Automation',
      icon: Settings,
    },
  ]

  return (
    <section
      id="team"
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
            Meet Our <span className="text-[#00A485]">Team</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            The talented individuals behind our innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center group"
            >
              <motion.div
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00A485 0%, #004B78 100%)' }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <member.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base font-semibold mb-2 sm:mb-3" style={{ color: '#00A485' }}>
                {member.role}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{member.expertise}</p>
              <div className="flex justify-center gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-[#00A485] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-[#00A485] transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-[#00A485] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

