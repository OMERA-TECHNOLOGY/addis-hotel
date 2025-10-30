"use client"

import { X } from "lucide-react"

interface VirtualTourModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VirtualTourModal({ isOpen, onClose }: VirtualTourModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-amber-100">
          <h2 className="text-2xl font-bold text-amber-900">Virtual Tour</h2>
          <button onClick={onClose} className="p-1 hover:bg-amber-50 rounded-lg transition-colors text-amber-900">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">360°</div>
              <p className="text-amber-900 font-semibold">Interactive Virtual Tour</p>
              <p className="text-amber-700 text-sm mt-2">Explore The Addis from your screen</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-900">Tour Highlights</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Grand Lobby",
                "Luxury Suites",
                "Ethiopian Restaurant",
                "Spa & Wellness",
                "Rooftop Terrace",
                "Conference Halls",
              ].map((item) => (
                <button
                  key={item}
                  className="p-4 border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors text-amber-900 font-medium text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
          >
            Close Tour
          </button>
        </div>
      </div>
    </div>
  )
}
