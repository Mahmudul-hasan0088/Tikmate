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
        setUrl(text)
      } catch (err) {
        toast.error("Failed to paste from clipboard")
      }
    }
  }

  async function downloadTikTok(url: string) {
    try {
      const response = await fetch(
        `https://tikwm.com/api/?url=${encodeURIComponent(url)}`
      )
      const data = await response.json()

      if (data.code !== 0) {
        throw new Error(data.msg || "Failed to fetch video")
      }

      return {
        success: true,
        data: data.data,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Something went wrong",
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) {
      toast.error("Please enter a TikTok URL")
      return
    }

    setIsLoading(true)
    setVideoDetails(null)
    try {
      const result = await downloadTikTok(url)
      if (result.success && result.data) {
        setVideoDetails(result.data)
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
    <div className="relative bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFF" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>
      <div className="relative max-w-4xl mx-auto text-center px-4 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            TikTok Video Download
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
        >
          <div className="relative flex-1">
            <Input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste TikTok link here"
              className="w-full pl-4 pr-20 py-7 rounded-xl text-black shadow-lg border-2 border-transparent focus:border-blue-400 transition-all bg-white"
              disabled={isLoading}
            />
            <Button
              type="button"
              variant="secondary"
              onClick={handlePasteOrClear}
              disabled={isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700 font-medium rounded-lg"
            >
              {url ? (
                <>
                  <X className="h-4 w-4" /> Clear
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
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-7 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Fetching...
              </>
            ) : (
              <>
                <Download className="h-5 w-5" />
                Get Video
              </>
            )}
          </Button>
        </motion.form>

        {videoDetails && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 bg-white rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="p-2 bg-gray-50 flex items-start gap-3">
              <div className="flex-shrink-0 size-20 overflow-hidden rounded-lg">
                <img
                  src={videoDetails.cover}
                  alt="Video thumbnail"
                  className="object-cover"
                />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1 line-clamp-2">
                  {videoDetails.title}
                </h3>
                <div className="flex items-center gap-3 text-gray-600">
                  <span className="font-medium">
                    {videoDetails.author.nickname}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-3">
              <Button
                onClick={handleVideoDownload}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
              >
                <Download className="h-5 w-5" />
                Download Without Watermark
              </Button>

              {videoDetails.music && (
                <Button
                  onClick={handleMusicDownload}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  <Music className="h-5 w-5" />
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
