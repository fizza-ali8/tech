'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function HeroSection() {
  const [animationData, setAnimationData] = useState<any>(null)

  // Load Lottie animation data
  useEffect(() => {
    // You can replace this with your own Lottie JSON file
    // For now, using a simple tech animation structure
    const loadAnimation = async () => {
      try {
        // Try to load from a URL or use inline data
        // Using a tech network/system animation
        const techAnim = {
          v: '5.7.4',
          fr: 30,
          ip: 0,
          op: 180,
          w: 600,
          h: 600,
          nm: 'Tech Network',
          ddd: 0,
          assets: [],
          layers: [
            {
              ddd: 0,
              ind: 1,
              ty: 4,
              nm: 'Network Circle',
              sr: 1,
              ks: {
                o: { a: 0, k: 100 },
                r: {
                  a: 1,
                  k: [
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
                    { t: 180, s: [360] },
                  ],
                },
                p: { a: 0, k: [300, 300, 0] },
                a: { a: 0, k: [0, 0, 0] },
                s: { a: 0, k: [100, 100, 100] },
              },
              ao: 0,
              shapes: [
                {
                  ty: 'gr',
                  it: [
                    {
                      d: 1,
                      ty: 'el',
                      s: { a: 0, k: [100, 100] },
                      p: { a: 0, k: [0, 0] },
                      nm: 'Ellipse Path 1',
                      mn: 'ADBE Vector Shape - Ellipse',
                      hd: false,
                    },
                    {
                      ty: 'st',
                      c: { a: 0, k: [0, 0.643, 0.529, 1] },
                      o: { a: 0, k: 80 },
                      w: { a: 0, k: 2 },
                      lc: 1,
                      lj: 1,
                      ml: 4,
                      bm: 0,
                      nm: 'Stroke 1',
                      mn: 'ADBE Vector Graphic - Stroke',
                      hd: false,
                    },
                    {
                      ty: 'tr',
                      p: { a: 0, k: [0, 0] },
                      a: { a: 0, k: [0, 0] },
                      s: { a: 0, k: [100, 100] },
                      r: { a: 0, k: 0 },
                      o: { a: 0, k: 100 },
                      sk: { a: 0, k: 0 },
                      sa: { a: 0, k: 0 },
                      nm: 'Transform',
                    },
                  ],
                  nm: 'Ellipse 1',
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: 'ADBE Vector Group',
                  hd: false,
                },
              ],
              ip: 0,
              op: 180,
              st: 0,
              bm: 0,
            },
          ],
        }
        setAnimationData(techAnim)
      } catch (error) {
        console.error('Error loading animation:', error)
      }
    }

    loadAnimation()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100/50"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          style={{ backgroundColor: '#00A485' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-64 h-64 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          style={{ backgroundColor: '#004B78' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          style={{ backgroundColor: '#00A485' }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Lottie Tech Animation - Behind Content */}
      {animationData && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-25">
          <div className="w-full h-full max-w-5xl mx-auto">
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      )}

      {/* Fallback Tech Visualization - Animated System Architecture */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-full h-full max-w-5xl mx-auto">
          {/* Animated Tech System */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Rotating Tech Circles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#00A485]"
                style={{
                  width: `${140 + i * 70}px`,
                  height: `${140 + i * 70}px`,
                  opacity: 0.12 - i * 0.02,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 18 + i * 6,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.4,
                }}
              />
            ))}

            {/* Central Hub */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#00A485] to-[#004B78] opacity-30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Orbiting System Nodes */}
            {[...Array(10)].map((_, i) => {
              const angle = (i * 36 * Math.PI) / 180
              const radius = 120
              return (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3.5 h-3.5 rounded-full bg-[#00A485] opacity-40"
                  style={{
                    transformOrigin: '0 0',
                  }}
                  animate={{
                    x: [
                      Math.cos(angle) * radius,
                      Math.cos(angle + Math.PI / 5) * radius,
                      Math.cos(angle) * radius,
                    ],
                    y: [
                      Math.sin(angle) * radius,
                      Math.sin(angle + Math.PI / 5) * radius,
                      Math.sin(angle) * radius,
                    ],
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 7 + i * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                />
              )
            })}

            {/* Connecting Lines - Data Flow */}
            <svg
              className="absolute inset-0 w-full h-full opacity-15"
              style={{ filter: 'blur(0.5px)' }}
            >
              {[...Array(10)].map((_, i) => {
                const angle1 = (i * 36 * Math.PI) / 180
                const angle2 = ((i + 1) * 36 * Math.PI) / 180
                const radius = 120
                const centerX = 50
                const centerY = 50
                const x1 = centerX + (Math.cos(angle1) * radius) / 4
                const y1 = centerY + (Math.sin(angle1) * radius) / 4
                const x2 = centerX + (Math.cos(angle2) * radius) / 4
                const y2 = centerY + (Math.sin(angle2) * radius) / 4

                return (
                  <motion.line
                    key={i}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="#00A485"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 0],
                      opacity: [0, 0.15, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: 'easeInOut',
                    }}
                  />
                )
              })}
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-primary-100 rounded-full text-primary-700 text-xs md:text-sm font-medium mb-6 md:mb-8 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 164, 133, 0.3)' }}
            animate={{
              boxShadow: [
                '0 0 0px rgba(0, 164, 133, 0.2)',
                '0 0 15px rgba(0, 164, 133, 0.3)',
                '0 0 0px rgba(0, 164, 133, 0.2)',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span>Technology with Purpose</span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight px-2"
        >
          Transforming Ideas into
          <br />
          <motion.span
            className="bg-gradient-to-r from-[#004B78] to-[#00A485] bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0%', '200%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200%',
            }}
          >
            Powerful Digital Products
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
        >
          We create future-ready software, websites, and AI solutions that help
          businesses innovate, automate, and succeed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#services"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 164, 133, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 md:px-10 md:py-5 text-white rounded-lg font-semibold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 bg-gradient-to-r from-[#004B78] to-[#00A485] hover:from-[#00A485] hover:to-[#004B78] overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00A485] to-[#004B78] opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <span className="relative z-10">Explore Services</span>
            <motion.div
              className="relative z-10"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block z-10"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center backdrop-blur-sm bg-white/50">
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
