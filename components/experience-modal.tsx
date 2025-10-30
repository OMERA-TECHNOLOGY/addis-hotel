"use client"

import { X } from "lucide-react"

interface Experience {
  title: string
  description: string
  image: string
  color: string
  details: string
}

interface ExperienceModalProps {
  experience: Experience | null
  onClose: () => void
}

export function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  if (!experience) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-amber-100 bg-white">
          <h2 className="text-2xl font-bold text-amber-900">{experience.title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-amber-50 rounded-lg transition-colors text-amber-900">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <img
            src={experience.image || "/placeholder.svg"}
            alt={experience.title}
            className="w-full h-64 object-cover rounded-xl"
          />

          <div>
            <h3 className="text-lg font-bold text-amber-900 mb-2">Experience Details</h3>
            <p className="text-amber-800 leading-relaxed">{experience.details}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 border-y border-amber-100">
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-600">90</p>
              <p className="text-sm text-amber-700">Minutes</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-600">2-8</p>
              <p className="text-sm text-amber-700">Guests</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-600">$150</p>
              <p className="text-sm text-amber-700">Per Person</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
          >
            Book This Experience
          </button>
        </div>
      </div>
    </div>
  )
}
