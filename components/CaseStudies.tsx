'use client'

import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp } from 'lucide-react'

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'E-Commerce Platform Transformation',
      client: 'TechRetail Inc.',
      challenge:
        'Legacy system causing slow performance and poor user experience.',
      solution:
        'Built a modern, scalable e-commerce platform with AI-powered recommendations.',
      results: '300% increase in sales, 50% reduction in load time.',
      metric: '+300%',
      metricLabel: 'Sales Growth',
    },
    {
      title: 'AI-Powered Customer Support',
      client: 'ServicePro Solutions',
      challenge:
        'High customer support costs and slow response times.',
      solution:
        'Implemented custom RAG chatbot system for instant customer assistance.',
      results: '70% reduction in support tickets, 24/7 availability.',
      metric: '70%',
      metricLabel: 'Cost Reduction',
    },
    {
      title: 'Cloud Migration & DevOps',
      client: 'FinanceFlow Corp',
      challenge:
        'On-premise infrastructure limiting scalability and increasing costs.',
      solution:
        'Migrated to cloud with automated CI/CD pipeline and monitoring.',
      results: '60% cost savings, 5x faster deployments.',
      metric: '60%',
      metricLabel: 'Cost Savings',
    },
  ]

  return (
    <section
      id="case-studies"
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
            Success <span className="text-[#00A485]">Stories</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Real projects, real results. See how we've helped businesses
            transform their digital presence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold text-[#00A485]">
                  {study.client}
                </span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#00A485] transition-colors" />
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                {study.title}
              </h3>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Challenge:
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Solution:
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Results:
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm font-semibold">
                    {study.results}
                  </p>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A485]" />
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#00A485]">
                      {study.metric}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {study.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

