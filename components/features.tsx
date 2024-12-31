import { motion } from "framer-motion"
import { Clock, Download, PlayCircle, Save, Shield, Zap } from "lucide-react"

export default function Instructions() {
  const features = [
    {
      icon: PlayCircle,
      title: "1. Copy Video URL",
      description:
        "Find the video you want to download and copy its URL from TikTok.",
    },
    {
      icon: Download,
      title: "2. Paste and Download",
      description:
        "Paste the URL into our downloader and click the download button.",
    },
    {
      icon: Save,
      title: "3. Enjoy Your Video",
      description:
        "Save the video to your device and watch it anytime, anywhere!",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Download videos in seconds with our optimized servers.",
    },
    {
      icon: Shield,
      title: "100% Safe",
      description: "No registration required. Your privacy is our priority.",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description:
        "Our service is available round the clock for your convenience.",
    },
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">How It Works</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Download your favorite TikTok videos in three simple steps. No
            registration required.
          </p>
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-white p-6 shadow-lg"
            >
              <div className="absolute -top-6 left-6">
                <div className="inline-block rounded-xl bg-blue-600 p-3 shadow-lg">
                  <feature.icon className="size-6 text-white" />
                </div>
              </div>
              <div className="pt-6">
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Choose Us</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Experience the best TikTok video downloader with premium features at
            no cost.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="mb-4 inline-block rounded-xl bg-blue-50 p-3">
                <benefit.icon className="size-6 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
