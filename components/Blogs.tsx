'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, BookOpen } from 'lucide-react'

export default function Blogs() {
  const blogs = [
    {
      title: 'The Future of AI in Business Automation',
      excerpt:
        'Discover how AI automation is transforming business operations and driving efficiency across industries.',
      date: 'March 15, 2024',
      category: 'AI & Automation',
      readTime: '5 min read',
    },
    {
      title: 'Best Practices for Cloud Migration',
      excerpt:
        'Learn the essential strategies and considerations for successfully migrating your infrastructure to the cloud.',
      date: 'March 10, 2024',
      category: 'Cloud Services',
      readTime: '7 min read',
    },
    {
      title: 'UI/UX Design Trends for 2024',
      excerpt:
        'Explore the latest design trends that are shaping user experiences in digital products this year.',
      date: 'March 5, 2024',
      category: 'Design',
      readTime: '6 min read',
    },
  ]

  return (
    <section
      id="blog"
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
            Stay Updated with{' '}
            <span className="text-[#00A485]">Tech Trends & Insights</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Get practical tips on software development, digital transformation,
            and IT innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{blog.category}</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#00A485] transition-colors">
                {blog.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {blog.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{blog.date}</span>
                </div>
                <span>{blog.readTime}</span>
              </div>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold group-hover:gap-3 transition-all"
                style={{ color: '#00A485' }}
                whileHover={{ x: 5 }}
              >
                Read More
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
            </motion.article>
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
            href="#blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 md:px-8 md:py-4 text-white rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#004B78] to-[#00A485] hover:from-[#00A485] hover:to-[#004B78]"
          >
            View All Blogs
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

