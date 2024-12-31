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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">
            Download TikTok Videos Without Watermark for FREE
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
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
          className="grid gap-6 md:grid-cols-2"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg bg-gray-50 p-4"
            >
              <CheckCircle className="size-5 shrink-0 text-green-500" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
