"use client";

import { useState, useRef } from "react";
import { ArrowRight, Play, Star, Clock, Users } from "lucide-react";
import { ExperienceModal } from "./experience-modal";

interface Experience {
  title: string;
  description: string;
  image: string;
  color: string;
  details: string;
  duration: string;
  capacity: string;
  rating: number;
  includes: string[];
}

export function Services() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences: Experience[] = [
    {
      title: "Ethiopian Coffee Ceremony",
      description:
        "Participate in the sacred Buna ceremony, a 2,000-year-old tradition of connection and community.",
      image: "/ethiopian-coffee-ceremony-in-luxury-hotel-setting.jpg",
      color: "from-amber-600 to-amber-800",
      details:
        "Join our master coffee roasters for an authentic Buna ceremony. Learn the ancient art of coffee preparation, roasting, and serving while enjoying traditional Ethiopian hospitality. This 90-minute experience includes freshly roasted coffee and traditional snacks.",
      duration: "90 mins",
      capacity: "2-8 guests",
      rating: 4.9,
      includes: [
        "Traditional roasting",
        "Three rounds of coffee",
        "Cultural storytelling",
        "Artisan snacks",
      ],
    },
    {
      title: "Injera Dining Experience",
      description:
        "Savor authentic Ethiopian cuisine prepared by master chefs, served on traditional injera bread.",
      image: "/gourmet-ethiopian-cuisine-presentation-with-tradit.jpg",
      color: "from-amber-700 to-amber-900",
      details:
        "Experience a multi-course Ethiopian feast prepared by our award-winning chefs. Dishes include Doro Wot, Misir Wot, Gomen, and more, all served on traditional injera. Perfect for groups or intimate dinners. Vegetarian and vegan options available.",
      duration: "2 hours",
      capacity: "2-12 guests",
      rating: 4.8,
      includes: [
        "7-course tasting",
        "Wine pairing",
        "Chef interaction",
        "Recipe booklet",
      ],
    },
    {
      title: "Ethiopian Wellness Rituals",
      description:
        "Ancient healing practices combined with modern spa treatments for complete rejuvenation.",
      image: "/modern-spa-with-ethiopian-traditional-wellness-ele.jpg",
      color: "from-amber-800 to-amber-950",
      details:
        "Indulge in our signature wellness program combining traditional Ethiopian healing practices with modern spa treatments. Includes herbal steam baths, traditional massage, and aromatherapy using locally sourced ingredients.",
      duration: "3 hours",
      capacity: "1-2 guests",
      rating: 5.0,
      includes: [
        "Herbal steam bath",
        "Traditional massage",
        "Aromatherapy",
        "Wellness consultation",
      ],
    },
    {
      title: "Artisan Collaborations",
      description:
        "Meet local Ethiopian artists and craftspeople. Exclusive access to limited-edition pieces.",
      image: "/ethiopian-artisans-working-with-traditional-crafts.jpg",
      color: "from-red-700 to-red-900",
      details:
        "Support local artisans through our exclusive collaboration program. Browse and purchase authentic Ethiopian crafts, textiles, and artwork directly from the creators. Includes artist meet-and-greets and workshops on traditional techniques.",
      duration: "2.5 hours",
      capacity: "4-10 guests",
      rating: 4.7,
      includes: [
        "Artist meeting",
        "Hands-on workshop",
        "Curated collection",
        "Cultural insights",
      ],
    },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        id="experiences"
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
                Curated Worlds
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-500">
              Immersive
              <span className="block text-amber-600 dark:text-amber-400 mt-2">
                Experiences
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-600 rounded-full mx-auto mb-8 transition-all duration-500" />
            <p className="text-xl text-slate-700 dark:text-amber-100/80 max-w-3xl mx-auto leading-relaxed font-light transition-colors duration-500">
              Discover authentic Ethiopian culture through carefully curated
              experiences designed for the discerning traveler. Each journey is
              a masterpiece of tradition and luxury.
            </p>
          </div>

          {/* Premium Experience Grid */}
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-amber-200/50 dark:border-amber-800/30 hover:border-amber-400/50 dark:hover:border-amber-600/50 transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedExp(exp)}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-amber-50/30 dark:from-slate-800 dark:to-amber-950/20 transition-colors duration-500" />

                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${exp.color} to-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  {/* Hover Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-90">
                    <div className="p-6 bg-white/20 dark:bg-black/40 backdrop-blur-md rounded-2xl border border-white/30 dark:border-white/10">
                      <Play size={32} className="text-white fill-white" />
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-2 rounded-2xl border border-amber-200/50 dark:border-amber-800/50">
                    <div className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="fill-amber-500 text-amber-500"
                      />
                      <span className="text-sm font-medium text-slate-800 dark:text-white">
                        {exp.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-500">
                    {exp.title}
                  </h3>

                  <p className="text-slate-700 dark:text-amber-100/80 leading-relaxed mb-6 font-light transition-colors duration-500">
                    {exp.description}
                  </p>

                  {/* Experience Details */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-amber-200/70">
                      <Clock size={16} />
                      <span className="text-sm font-light">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-amber-200/70">
                      <Users size={16} />
                      <span className="text-sm font-light">{exp.capacity}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <button className="group/btn flex items-center gap-3 text-amber-600 dark:text-amber-400 font-semibold hover:text-amber-700 dark:hover:text-amber-300 transition-all duration-500">
                      <span className="tracking-wide">Learn More</span>
                      <ArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      />
                    </button>

                    {/* Included Features */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {exp.includes.slice(0, 2).map((item, i) => (
                        <div
                          key={i}
                          className="px-2 py-1 bg-amber-500/10 rounded-lg border border-amber-500/20"
                        >
                          <span className="text-xs text-amber-700 dark:text-amber-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button className="group relative px-12 py-4 bg-transparent border-2 border-amber-500/50 dark:border-amber-500/50 text-amber-600 dark:text-amber-400 rounded-2xl hover:border-amber-500 dark:hover:border-amber-400 hover:bg-amber-500/10 transition-all duration-500 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 font-semibold tracking-widest text-sm flex items-center gap-3">
                VIEW ALL EXPERIENCES
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
            </button>
          </div>
        </div>
      </section>

      <ExperienceModal
        experience={selectedExp}
        onClose={() => setSelectedExp(null)}
      />
    </>
  );
}
