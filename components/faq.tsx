import { motion } from "framer-motion"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "How to Download TikTok Videos Without Watermark?",
      answer: `1. Copy the TikTok video link you want to download
2. Paste the link in the input field above
3. Click the "Get Video" button
4. Click the "Download" button when the video details appear
5. Your video will automatically download without watermark`,
    },
    {
      question: "How to get the TikTok video download link?",
      answer: `1. Open TikTok app or website
2. Find the video you want to download
3. Click the Share button
4. Select "Copy Link"
5. Return to SnapTik and paste the link`,
    },
    {
      question: "Is SnapTik safe to use?",
      answer:
        "Yes, SnapTik is completely safe to use. We don't store any of your personal information or downloaded videos on our servers. The service works by processing the video URL you provide and delivering the video directly to your device.",
    },
    {
      question: "Why choose SnapTik for TikTok downloads?",
      answer:
        "SnapTik offers several advantages:\n- No watermark on downloaded videos\n- No registration required\n- Fast download speeds\n- Works on all devices\n- Completely free to use\n- No software installation needed",
    },
    {
      question: "Can I download TikTok videos on mobile devices?",
      answer:
        "Yes, SnapTik works perfectly on mobile devices. You can download TikTok videos on any device with a web browser, including smartphones and tablets. The process is the same as on desktop.",
    },
    {
      question: "Are there any download limits?",
      answer:
        "While we don't impose strict limits on downloads, we encourage responsible use of our service. If you're downloading multiple videos, please space out your requests to ensure the best experience for all users.",
    },
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
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our TikTok video downloader
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white shadow-lg"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="whitespace-pre-line text-gray-600">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
