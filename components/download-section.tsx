"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function DownloadSection() {
  const benefits = [
    "No watermark in downloaded videos",
    "Support for all devices and platforms",
    "Fast download speeds with high-quality results",
    "Free to use with no registration required",
    "Simple and user-friendly interface",
    "24/7 availability and reliable service",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Download TikTok Videos Without Watermark for FREE
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            SnapTik is the leading TikTok video downloader available online.
            Download videos without watermark instantly, with no software
            installation required. Just paste your link and download!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-50"
            >
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
