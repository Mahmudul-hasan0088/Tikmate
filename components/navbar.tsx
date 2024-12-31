"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("en")

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex shrink-0 items-center">
              <h1 className="text-xl font-bold text-blue-600">TikMate</h1>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center">
            <div className="group relative">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-gray-900"
              >
                Languages
              </Button>
              <div className="invisible absolute right-0 mt-2 w-48 origin-top-right rounded-md border bg-white opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 ${
                      currentLang === lang.code ? "bg-gray-50" : ""
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-800"
            >
              {isOpen ? (
                <X className="block size-6" />
              ) : (
                <Menu className="block size-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang.code)
                  setIsOpen(false)
                }}
                className={`block w-full py-2 pl-3 pr-4 text-left text-base font-medium text-gray-700 hover:bg-gray-50 ${
                  currentLang === lang.code ? "bg-gray-50" : ""
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
