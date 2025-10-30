"use client"

import { useState } from "react"
import { ExperienceModal } from "./experience-modal"

interface Experience {
  title: string
  description: string
  image: string
  color: string
  details: string
}

export function Services() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null)

  const experiences: Experience[] = [
    {
      title: "Ethiopian Coffee Ceremony",
      description: "Participate in the sacred Buna ceremony, a 2,000-year-old tradition of connection and community.",
      image: "/ethiopian-coffee-ceremony-in-luxury-hotel-setting.jpg",
      color: "from-amber-600",
      details:
        "Join our master coffee roasters for an authentic Buna ceremony. Learn the ancient art of coffee preparation, roasting, and serving while enjoying traditional Ethiopian hospitality. This 90-minute experience includes freshly roasted coffee and traditional snacks.",
    },
    {
      title: "Injera Dining Experience",
      description: "Savor authentic Ethiopian cuisine prepared by master chefs, served on traditional injera bread.",
      image: "/gourmet-ethiopian-cuisine-presentation-with-tradit.jpg",
      color: "from-amber-700",
      details:
        "Experience a multi-course Ethiopian feast prepared by our award-winning chefs. Dishes include Doro Wot, Misir Wot, Gomen, and more, all served on traditional injera. Perfect for groups or intimate dinners. Vegetarian and vegan options available.",
    },
    {
      title: "Ethiopian Wellness Rituals",
      description: "Ancient healing practices combined with modern spa treatments for complete rejuvenation.",
      image: "/modern-spa-with-ethiopian-traditional-wellness-ele.jpg",
      color: "from-amber-800",
      details:
        "Indulge in our signature wellness program combining traditional Ethiopian healing practices with modern spa treatments. Includes herbal steam baths, traditional massage, and aromatherapy using locally sourced ingredients.",
    },
    {
      title: "Artisan Collaborations",
      description: "Meet local Ethiopian artists and craftspeople. Exclusive access to limited-edition pieces.",
      image: "/ethiopian-artisans-working-with-traditional-crafts.jpg",
      color: "from-red-700",
      details:
        "Support local artisans through our exclusive collaboration program. Browse and purchase authentic Ethiopian crafts, textiles, and artwork directly from the creators. Includes artist meet-and-greets and workshops on traditional techniques.",
    },
  ]

  return (
    <>
      <section id="experiences" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">Curated Worlds</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 text-balance">Immersive Experiences</h2>
            <p className="text-lg text-amber-800 max-w-2xl mx-auto">
              Discover authentic Ethiopian culture through carefully curated experiences designed for the discerning
              traveler.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-2xl border border-amber-200 hover:border-amber-600 transition-all hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedExp(exp)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={exp.image || "/placeholder.svg"}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${exp.color} to-transparent opacity-30 group-hover:opacity-40 transition-opacity`}
                  />
                </div>
                <div className="p-8 bg-white">
                  <h4 className="text-2xl font-bold text-amber-900 mb-3">{exp.title}</h4>
                  <p className="text-amber-800 leading-relaxed mb-4">{exp.description}</p>
                  <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors flex items-center gap-2">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExperienceModal experience={selectedExp} onClose={() => setSelectedExp(null)} />
    </>
  )
}
