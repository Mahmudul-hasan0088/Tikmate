"use client"

import DownloadSection from "@/components/download-section"
import Faq from "@/components/faq"
import Instructions from "@/components/features"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <DownloadSection />
      <Instructions />
      <Faq />
    </div>
  )
}
