export default function AppDownload() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-semibold mb-4">Download SnapTik App</h3>
      <p className="text-gray-600 mb-6">
        I now provide an app for downloading TikTok videos. It is fast, easy, with no watermark and HD quality
      </p>
      <div className="flex gap-4">
        <a href="#" className="h-[40px]">
          <img
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            className="h-full"
          />
        </a>
        <a href="#" className="h-[40px]">
          <img
            src="/app-store-badge.png"
            alt="Download on the App Store"
            className="h-full"
          />
        </a>
      </div>
    </div>
  )
}

