// app/not-found.tsx
"use client"
import { motion } from "motion/react";
import Link from "next/link";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: "radial-gradient(ellipse 100% 50% at 50% 0%, rgba(10, 190, 299, 0.15), transparent 70%), #000000",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 10) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-bold text-emerald-400 relative">
              404
              <motion.div
                className="absolute -inset-4 bg-emerald-400/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </h1>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-bold mb-4"
          >
            Page Not Found
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 text-lg mb-12 max-w-md mx-auto leading-relaxed"
          >
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to familiar territory.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/"
                className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium transition-all duration-200 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <FiHome className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-6 py-3 bg-transparent text-white border border-white/20 rounded-lg font-medium transition-all duration-200 hover:bg-white/5 hover:border-white/30"
              >
                <FiArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex justify-center space-x-2"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-emerald-400/50 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 text-gray-500 text-sm"
        >
          <p>Akash Biradar • Full Stack Developer</p>
        </motion.div>
      </div>
    </div>
  );
}