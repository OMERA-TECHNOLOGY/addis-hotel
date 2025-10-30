"use client";

import { useState, useRef } from "react";
import { ArrowRight, Star, MapPin, Eye } from "lucide-react";

export function Rooms() {
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const rooms = [
    {
      name: "Simien Suite",
      region: "Named after the majestic Simien Mountains",
      price: "$450",
      originalPrice: "$520",
      amenities: [
        "King Bed",
        "Mountain View",
        "Private Terrace",
        "Ethiopian Art",
        "Luxury Bathroom",
        "24/7 Butler",
      ],
      image: "/luxury-hotel-suite-inspired-by-ethiopian-design-wi.jpg",
      rating: 4.9,
      size: "65 m²",
      highlights: ["Panoramic Views", "Premium Amenities", "Cultural Art"],
    },
    {
      name: "Rift Valley Retreat",
      region: "Inspired by Ethiopia's geological wonder",
      price: "$380",
      originalPrice: "$450",
      amenities: [
        "Queen Bed",
        "Valley View",
        "Spa Bath",
        "Geometric Patterns",
        "Work Desk",
        "Mini Bar",
      ],
      image: "/hotel-room-with-ethiopian-geometric-patterns-and-w.jpg",
      rating: 4.8,
      size: "45 m²",
      highlights: ["Spa Bath", "Geometric Design", "Valley Views"],
    },
    {
      name: "Addis Sanctuary",
      region: "Heart of the city, soul of Ethiopia",
      price: "$520",
      originalPrice: "$600",
      amenities: [
        "Suite Layout",
        "City View",
        "Lounge Area",
        "Premium Amenities",
        "Private Balcony",
        "Dining Area",
      ],
      image: "/luxury-penthouse-suite-with-panoramic-city-views-a.jpg",
      rating: 5.0,
      size: "85 m²",
      highlights: ["Penthouse Suite", "City Panoramas", "Luxury Lounge"],
    },
    {
      name: "Heritage Chamber",
      region: "Celebrating Ethiopian artistic traditions",
      price: "$320",
      originalPrice: "$380",
      amenities: [
        "Double Bed",
        "Garden View",
        "Work Desk",
        "Local Artwork",
        "Coffee Station",
        "Smart TV",
      ],
      image: "/boutique-hotel-room-with-ethiopian-traditional-art.jpg",
      rating: 4.7,
      size: "35 m²",
      highlights: ["Traditional Art", "Garden Views", "Cultural Design"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="rooms"
      className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-500"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-transparent dark:from-amber-950/10 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/20 dark:bg-amber-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-300/10 dark:bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/10 dark:bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 dark:border-amber-500/20 rounded-2xl mb-6 transition-all duration-500">
            <Star size={16} className="text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-light tracking-widest text-amber-700 dark:text-amber-300 uppercase">
              Accommodations
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-500">
            Rooms with
            <span className="block text-amber-600 dark:text-amber-400 mt-2">
              Soul
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-600 rounded-full mx-auto mb-8 transition-all duration-500" />
          <p className="text-xl text-slate-800 dark:text-amber-100 max-w-3xl mx-auto leading-relaxed font-light transition-colors duration-500">
            Each room tells a story of Ethiopian heritage, designed with
            meticulous attention to comfort and cultural authenticity.
            Experience luxury that honors tradition while embracing modern
            elegance.
          </p>
        </div>

        {/* Premium Rooms Grid */}
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-amber-200/50 dark:border-amber-800/30 hover:border-amber-400/50 dark:hover:border-amber-600/50 transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              onMouseEnter={() => setHoveredRoom(idx)}
              onMouseLeave={() => setHoveredRoom(null)}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-amber-50/30 dark:from-slate-800 dark:to-amber-950/20 transition-colors duration-500" />

              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-50 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Price Badge */}
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-3 rounded-2xl border border-amber-200/50 dark:border-amber-800/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">
                      {room.price}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 line-through">
                      {room.originalPrice}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 font-light">
                      per night
                    </div>
                  </div>
                </div>

                {/* View Button */}
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-amber-200/50 dark:border-amber-800/50 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    <Eye size={16} />
                    <span className="text-sm font-medium">View Details</span>
                  </button>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-6 left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-2 rounded-2xl border border-amber-200/50 dark:border-amber-800/50">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-amber-500 text-amber-500" />
                    <span className="text-sm font-medium text-slate-800 dark:text-white">
                      {room.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-500">
                      {room.name}
                    </h3>
                    <p className="text-sm font-medium text-amber-700 dark:text-amber-300 mb-1 transition-colors duration-500">
                      {room.region}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-600 dark:text-amber-200/70 font-light">
                      {room.size}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs rounded-full font-medium border border-amber-500/20 transition-all duration-300 group-hover:bg-amber-500/20 group-hover:border-amber-500/30"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.amenities.slice(0, 4).map((amenity, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-slate-700 dark:text-amber-200/80"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      <span className="text-sm font-light">{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="group/btn w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:scale-105 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative z-10 font-semibold tracking-wide flex items-center justify-center gap-3">
                    Reserve Room
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
