"use client";

import { useState, useRef } from "react";
import {
  Star,
  Heart,
  Users,
  Palette,
  HeartHandshake,
  ShieldCheck,
  Mountain,
} from "lucide-react";

export function Ethos() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      title: "Yilugnta",
      subtitle: "Respect and Compassion",
      description:
        "We serve every guest with dignity and grace. Yilugnta guides how we listen, respond, and care, creating a space where everyone feels valued and respected.",
      icon: HeartHandshake,
      color: "from-amber-600 to-amber-700",
      features: [
        "Respect for All",
        "Empathetic Service",
        "Graceful Conduct",
        "Calm Communication",
      ],
    },
    {
      title: "Tiru Sewinet",
      subtitle: "Integrity in Service",
      description:
        "We keep our word and act with honesty. Tiru Sewinet means doing what is right, maintaining trust through consistency and ethical service.",
      icon: ShieldCheck,
      color: "from-amber-500 to-amber-600",
      features: [
        "Honest Interaction",
        "Transparent Processes",
        "Trustworthy Service",
        "Ethical Standards",
      ],
    },
    {
      title: "Fiker",
      subtitle: "Love in Hospitality",
      description:
        "True hospitality begins with love. Fiker drives how we welcome guests, design experiences, and create comfort with warmth and heart.",
      icon: Heart,
      color: "from-amber-700 to-amber-800",
      features: [
        "Warm Welcome",
        "Personal Care",
        "Kind Attention",
        "Comfort-Driven Service",
      ],
    },
    {
      title: "Tibeb",
      subtitle: "Excellence through Wisdom",
      description:
        "Every detail matters. Tibeb is the skill and insight behind our work, blending tradition and modern standards to deliver refined experiences.",
      icon: Mountain,
      color: "from-amber-800 to-amber-900",
      features: [
        "Skilled Staff",
        "Refined Details",
        "Continuous Learning",
        "Quality Execution",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="ethos"
      className="relative py-24 bg-gradient-to-b from-white to-amber-50/30 dark:from-slate-900 dark:to-amber-950/20 overflow-hidden transition-colors duration-500"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-200/20 dark:bg-amber-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-300/10 dark:bg-amber-500/5 rounded-full blur-3xl" />

      {/* Ethiopian Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 0 L100 100 L0 100 Z' fill='none' stroke='%23D97706' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23D97706' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/10 dark:bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 dark:border-amber-500/20 rounded-2xl mb-6 transition-all duration-500">
            <Star size={16} className="text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-light tracking-widest text-amber-700 dark:text-amber-300 uppercase">
              Our Philosophy
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-500">
            Rooted in
            <span className="block text-amber-600 dark:text-amber-400 mt-2">
              Ethiopian Values
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-600 rounded-full mx-auto mb-8 transition-all duration-500" />
          <p className="text-xl text-slate-800 dark:text-amber-100 max-w-3xl mx-auto leading-relaxed font-light transition-colors duration-500">
            The Addis is more than a hotel—it's a celebration of Ethiopian
            culture, hospitality, and the timeless beauty of Addis Ababa. Our
            foundation is built upon principles that have guided Ethiopian
            society for millennia.
          </p>
        </div>

        {/* Premium Values Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 border border-amber-200/50 dark:border-amber-800/30 hover:border-amber-400/50 dark:hover:border-amber-600/50 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-amber-50/30 dark:from-slate-800 dark:to-amber-950/20 rounded-3xl transition-colors duration-500" />

              {/* Animated Top Border */}
              <div
                className={`relative h-1 w-12 bg-gradient-to-r ${value.color} rounded-full mb-8 group-hover:w-full transition-all duration-700 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="p-4 bg-gradient-to-br from-amber-500/10 to-amber-600/5 dark:from-amber-500/10 dark:to-amber-600/5 rounded-2xl border border-amber-200/50 dark:border-amber-800/30 group-hover:border-amber-400/50 dark:group-hover:border-amber-600/50 transition-all duration-500 inline-block">
                  <value.icon
                    size={32}
                    className="text-amber-700 dark:text-amber-300 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Icon Glow */}
                <div className="absolute -inset-2 bg-amber-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-500">
                {value.title}
              </h3>

              <p className="text-sm font-medium text-amber-700 dark:text-amber-300 mb-4 tracking-wide transition-colors duration-500">
                {value.subtitle}
              </p>

              <p className="text-slate-800 dark:text-amber-100 leading-relaxed mb-6 font-light text-sm transition-colors duration-500">
                {value.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {value.features.map((feature, featureIdx) => (
                  <div
                    key={featureIdx}
                    className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500"
                    style={{ transitionDelay: `${featureIdx * 100 + 200}ms` }}
                  >
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    <span className="text-xs text-slate-700 dark:text-amber-200 font-light tracking-wide">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-6xl text-amber-500/20 dark:text-amber-400/20">
              “
            </div>
            <blockquote className="text-2xl font-light italic text-slate-800 dark:text-amber-100 leading-relaxed transition-colors duration-500">
              In the heart of Addis Ababa, we honor the past while embracing the
              future—creating a sanctuary where every guest becomes part of our
              story.
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-amber-500/50 dark:bg-amber-400/50"></div>
              <span className="text-sm text-amber-700 dark:text-amber-300 font-light tracking-widest uppercase">
                The Addis Promise
              </span>
              <div className="w-8 h-px bg-amber-500/50 dark:bg-amber-400/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
