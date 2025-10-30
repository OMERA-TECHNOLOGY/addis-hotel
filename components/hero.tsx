"use client"

import { useState } from "react"
import { VirtualTourModal } from "./virtual-tour-modal"

export function Hero() {
  const [showTour, setShowTour] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
        {/* Background with Ethiopian geometric pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600">
            <defs>
              <pattern id="ethiopian-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#ethiopian-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100 rounded-full text-sm font-medium">
                ✨ Where Heritage Meets Luxury
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-amber-900 dark:text-amber-50 leading-tight text-balance">
                The Addis Hotel
              </h2>
              <p className="text-xl text-amber-800 dark:text-amber-100 leading-relaxed">
                Experience the soul of Addis Ababa in a sanctuary of refined elegance. Where Ethiopian hospitality,
                ancient traditions, and contemporary luxury converge.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-3 bg-amber-600 dark:bg-amber-700 text-white rounded-lg hover:bg-amber-700 dark:hover:bg-amber-600 transition-colors font-medium">
                  Discover More
                </button>
                <button
                  onClick={() => setShowTour(true)}
                  className="px-8 py-3 border-2 border-amber-600 dark:border-amber-500 text-amber-600 dark:text-amber-400 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors font-medium"
                >
                  Virtual Tour
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full">
              <img
                src="/luxury-hotel-lobby-with-ethiopian-architectural-el.jpg"
                alt="The Addis Hotel Lobby"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600 dark:bg-amber-700 rounded-2xl opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <VirtualTourModal isOpen={showTour} onClose={() => setShowTour(false)} />
    </>
  )
}
