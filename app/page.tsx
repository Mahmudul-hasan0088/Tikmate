"use client";
import Hero from '@/components/hero'
import DownloadSection from '@/components/download-section'
import Instructions from '@/components/features'
import Faq from '@/components/faq'

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

