"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import floatingphone from "../../public/floatingphone.png"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50 to-gray-50 pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-transparent rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-purple-100 border border-purple-300 text-purple-700 text-sm font-semibold">
              The Future of Payments is Here
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
              Unified Global
            </span>
            <br />
            Payment Infrastructure
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Connect your business to 140+ countries, 400+ payment methods, and 120+ currencies through a single, intelligent API.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/signup"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-purple-500/50 text-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/posts"
              className="px-8 py-4 border-2 border-purple-300 text-purple-700 font-bold rounded-lg hover:border-purple-500 hover:text-purple-900 transition-all text-lg"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-6 md:gap-12"
          >
            <div>
              <div className="text-3xl md:text-4xl font-black text-purple-600">400+</div>
              <div className="text-gray-600 text-sm mt-2">Payment Methods</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-purple-600">140+</div>
              <div className="text-gray-600 text-sm mt-2">Countries Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-purple-600">120+</div>
              <div className="text-gray-600 text-sm mt-2">Currencies</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating phone image */}
        <motion.div
          className="absolute hidden lg:block right-0 top-1/2 transform -translate-y-1/2 w-80 h-96"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src={floatingphone}
            alt="Floating phone"
            className="object-contain w-full h-full"
          />
        </motion.div>
      </div>

    </section>
  )
}
