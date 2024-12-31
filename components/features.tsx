import { PlayCircle, Download, Save, Zap, Shield, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Instructions() {
  const features = [
    {
      icon: PlayCircle,
      title: "1. Copy Video URL",
      description: "Find the video you want to download and copy its URL from TikTok."
    },
    {
      icon: Download,
      title: "2. Paste and Download",
      description: "Paste the URL into our downloader and click the download button."
    },
    {
      icon: Save,
      title: "3. Enjoy Your Video",
      description: "Save the video to your device and watch it anytime, anywhere!"
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Download videos in seconds with our optimized servers."
    },
    {
      icon: Shield,
      title: "100% Safe",
      description: "No registration required. Your privacy is our priority."
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Our service is available round the clock for your convenience."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Download your favorite TikTok videos in three simple steps. No registration required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="absolute -top-6 left-6">
                <div className="bg-blue-600 rounded-xl p-3 inline-block shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the best TikTok video downloader with premium features at no cost.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-50 rounded-xl p-3 inline-block mb-4">
                <benefit.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

