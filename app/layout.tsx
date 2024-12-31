import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SnapTik - TikTok Video Downloader Without Watermark",
  description:
    "Download TikTok videos without watermark. Fast and free for all devices.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
