"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex shrink-0 items-center">
              <h1 className="text-xl font-bold text-blue-600">TikMate</h1>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
