"use client"

import { useState } from "react"
import { ReservationModal } from "./reservation-modal"

export function CTA() {
  const [showReservation, setShowReservation] = useState(false)

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 400">
            <defs>
              <pattern id="cross-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <rect x="80" y="20" width="40" height="160" fill="white" />
                <rect x="20" y="80" width="160" height="40" fill="white" />
                <circle cx="100" cy="100" r="15" fill="white" />
              </pattern>
            </defs>
            <rect width="1200" height="400" fill="url(#cross-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900 dark:text-amber-50 text-balance">
            Begin Your Journey
          </h2>
          <p className="text-xl text-amber-800 dark:text-amber-100 mb-8 leading-relaxed">
            Experience the convergence of Ethiopian heritage and refined luxury. Reserve your sanctuary at The Addis
            Hotel today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowReservation(true)}
              className="px-8 py-4 bg-amber-600 dark:bg-amber-700 text-white rounded-lg hover:bg-amber-700 dark:hover:bg-amber-600 transition-colors font-semibold text-lg"
            >
              Reserve Now
            </button>
            <button className="px-8 py-4 border-2 border-amber-600 dark:border-amber-500 text-amber-600 dark:text-amber-400 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors font-semibold text-lg">
              Contact Concierge
            </button>
          </div>
        </div>
      </section>

      <ReservationModal isOpen={showReservation} onClose={() => setShowReservation(false)} />
    </>
  )
}
