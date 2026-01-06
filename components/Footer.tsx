'use client'

import { motion } from 'framer-motion'
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Software Development',
    'Web Development',
    'AI Automation',
    'App Development',
    'UI/UX Design',
    'Graphic Design',
    'SEO Optimization',
    'Cloud Services',
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#00A485] to-[#004B78] bg-clip-text text-transparent">
              Aurora Nexus
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Transforming ideas into powerful digital products. Your partner in
              digital transformation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#00A485] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-[#00A485] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm sm:text-base text-gray-400 hover:text-[#00A485] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#00A485' }} />
                <a
                  href="mailto:info@auroranexus.com"
                  className="text-xs sm:text-sm text-gray-400 hover:text-[#00A485] transition-colors break-all"
                >
                  info@auroranexus.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#00A485' }} />
                <a
                  href="tel:+1234567890"
                  className="text-xs sm:text-sm text-gray-400 hover:text-[#00A485] transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#00A485' }} />
                <span className="text-xs sm:text-sm text-gray-400">
                  123 Tech Street, Digital City, DC 12345
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-xs sm:text-sm text-gray-400 px-4">
            © {currentYear} Aurora Nexus. All rights reserved. | Technology with
            Purpose
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

