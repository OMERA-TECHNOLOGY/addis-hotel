"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { ReservationModal } from "./reservation-modal"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showReservation, setShowReservation] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check system preference on mount
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-amber-100 dark:border-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  {/* Outer circle */}
                  <circle cx="24" cy="24" r="22" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                  {/* Ethiopian cross */}
                  <rect x="20" y="8" width="8" height="32" fill="#D4AF37" />
                  <rect x="8" y="20" width="32" height="8" fill="#D4AF37" />
                  {/* Center circle */}
                  <circle cx="24" cy="24" r="5" fill="#8B0000" />
                  {/* Decorative corners */}
                  <circle cx="12" cy="12" r="2" fill="#CC8844" />
                  <circle cx="36" cy="12" r="2" fill="#CC8844" />
                  <circle cx="12" cy="36" r="2" fill="#CC8844" />
                  <circle cx="36" cy="36" r="2" fill="#CC8844" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-900 dark:text-amber-100">The Addis Hotel</h1>
                <p className="text-xs text-amber-700 dark:text-amber-300">Luxury Heritage</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {["Ethos", "Experiences", "Rooms", "Testimonials"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-amber-900 dark:text-amber-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-lg transition-colors text-amber-900 dark:text-amber-100"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setShowReservation(true)}
                className="px-6 py-2 bg-amber-600 dark:bg-amber-700 text-white rounded-lg hover:bg-amber-700 dark:hover:bg-amber-600 transition-colors text-sm font-medium"
              >
                Reserve
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-lg transition-colors text-amber-900 dark:text-amber-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              {["Ethos", "Experiences", "Rooms", "Testimonials"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-sm font-medium text-amber-900 dark:text-amber-100 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex gap-2 px-4 pt-2">
                <button
                  onClick={toggleDarkMode}
                  className="flex-1 p-2 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-lg transition-colors text-amber-900 dark:text-amber-100 flex items-center justify-center gap-2"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  {isDark ? "Light" : "Dark"}
                </button>
                <button
                  onClick={() => {
                    setShowReservation(true)
                    setIsOpen(false)
                  }}
                  className="flex-1 px-4 py-2 bg-amber-600 dark:bg-amber-700 text-white rounded-lg hover:bg-amber-700 dark:hover:bg-amber-600 transition-colors text-sm font-medium"
                >
                  Reserve
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <ReservationModal isOpen={showReservation} onClose={() => setShowReservation(false)} />
    </>
  )
}
