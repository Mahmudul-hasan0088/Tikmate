"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex shrink-0 items-center">
              <h1
                className="text-xl font-bold text-blue-600 bg-gradient-to-r from-black to-black bg-[length:0px_2px] bg-left-bottom
                  bg-no-repeat
                  transition-[background-size]
                  duration-500
                  hover:bg-[length:100%_2px]
                  group-hover:bg-[length:100%_2px]
                  dark:from-white dark:to-white"
              >
                TikMate
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
