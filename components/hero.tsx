"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Clipboard, Download, Loader2, Music, X } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface MusicInfo {
  id: string
  title: string
  play: string
  cover: string
  author: string
  original: boolean
  duration: number
  album: string
}

interface Author {
  id: string
  unique_id: string
  nickname: string
  avatar: string
}

interface VideoDetails {
  id: string
  region: string
  title: string
  cover: string
  duration: number
  play: string
  wmplay: string
  music: string
  music_info: MusicInfo
  author: Author
}

export default function Hero() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null)

  const handlePasteOrClear = async () => {
    if (url) {
      setUrl("")
      setVideoDetails(null)
    } else {
      try {
        const text = await navigator.clipboard.readText()
        if (!text) {
          toast.error("Clipboard is empty")
          return
        }
        setUrl(text)
      } catch (err) {
        toast.error("Failed to paste from clipboard")
      }
    }
  }

  // async function downloadTikTok(url: string) {
  //   try {
  //     const response = await fetch(
  //       `https://tikwm.com/api/?url=${encodeURIComponent(url)}`
  //     )
  //     const data = await response.json()

  //     if (data.code !== 0) {
  //       throw new Error(data.msg || "Failed to fetch video")
  //     }

  //     return {
  //       success: true,
  //       data: data.data,
  //     }
  //   } catch (error) {
  //     return {
  //       success: false,
  //       error: error instanceof Error ? error.message : "Something went wrong",
  //     }
  //   }
  // }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) {
      toast.error("Please enter a TikTok URL")
      return
    }

    setIsLoading(true)
    setVideoDetails(null)
    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch video details. Please try again.")
      }

      const result = await response.json()
      if (result.success && result.data) {
        setVideoDetails(result.data.data)
        toast.success("Video details fetched successfully!")
      } else {
        throw new Error(result.error || "Failed to fetch video details")
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to fetch video details"
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleVideoDownload = () => {
    if (videoDetails) {
      const a = document.createElement("a")
      a.href = videoDetails.play
      a.download = `tiktok-${videoDetails.id}.mp4`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      toast.success("Video download started!")
    }
  }

  const handleMusicDownload = () => {
    if (videoDetails?.music) {
      const a = document.createElement("a")
      a.href = videoDetails.music
      a.download = `tiktok-music-${videoDetails.id}.mp3`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      toast.success("Music download started!")
    }
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 py-16 text-white sm:py-24 lg:py-32">
      <div className="relative mx-auto max-w-4xl space-y-8 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            TikTok Video Download
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <Input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste TikTok link here"
              className="w-full rounded-xl border-2 border-transparent bg-white py-7 pl-4 pr-20 text-black shadow-lg transition-all focus:border-blue-400"
              disabled={isLoading}
            />
            <Button
              type="button"
              variant="secondary"
              onClick={handlePasteOrClear}
              disabled={isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg py-2 px-2 font-medium text-blue-600 hover:text-blue-700 gap-1"
              aria-label={url ? "Clear URL" : "Paste URL"}
            >
              {url ? (
                <>
                  <X className="size-4" />
                  Clear
                </>
              ) : (
                <>
                  <Clipboard className="size-4" />
                  Paste
                </>
              )}
            </Button>
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="rounded-xl bg-green-500 px-8 py-7 text-white shadow-lg transition-all duration-200 hover:bg-green-600 hover:shadow-xl text-lg font-semibold"
          >
            {isLoading ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Fetching...
              </>
            ) : (
              <>
                <Download className="size-5" />
                Get Video
              </>
            )}
          </Button>
        </motion.form>

        {!videoDetails && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-gray-400"
          >
            <p>
              No video details to show. Paste a TikTok link and fetch details!
            </p>
          </motion.div>
        )}

        {videoDetails && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 overflow-hidden rounded-xl bg-white shadow-2xl"
          >
            <div className="flex items-start gap-3 bg-gray-50 p-2">
              <div className="size-20 shrink-0 overflow-hidden rounded-lg">
                <img
                  src={videoDetails.cover}
                  alt="Video thumbnail"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-left">
                <h3 className="mb-1 line-clamp-2 text-xl font-semibold text-gray-900">
                  {videoDetails.title}
                </h3>
                <div className="flex items-center gap-3 text-gray-600">
                  <span className="font-medium">
                    {videoDetails.author?.nickname}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 p-6">
              <Button
                onClick={handleVideoDownload}
                className="w-full rounded-lg bg-blue-600 py-6 text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
              >
                <Download className="size-5" />
                Download Without Watermark
              </Button>

              {videoDetails.music && (
                <Button
                  onClick={handleMusicDownload}
                  className="w-full rounded-lg bg-purple-600 py-6 text-white shadow-md transition-all duration-200 hover:bg-purple-700 hover:shadow-lg"
                >
                  <Music className="size-5" />
                  Download Music
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
