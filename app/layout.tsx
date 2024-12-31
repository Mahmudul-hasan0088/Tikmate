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
    "Download TikTok videos without watermark for free. Fast, easy, and compatible with all devices. No registration required.",
  keywords:
    "TikTok downloader, video downloader, no watermark, free download, social media tools",
  openGraph: {
    title: "SnapTik - TikTok Video Downloader Without Watermark",
    description:
      "Download TikTok videos without watermark for free. Fast, easy, and compatible with all devices.",
    url: "https://snaptik.app",
    siteName: "SnapTik",
    images: [
      {
        url: "https://snaptik.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SnapTik TikTok Downloader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapTik - TikTok Video Downloader Without Watermark",
    description:
      "Download TikTok videos without watermark for free. Fast, easy, and compatible with all devices.",
    images: ["https://snaptik.app/twitter-image.jpg"],
    creator: "@snaptik_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://snaptik.app" />
      </head>
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
