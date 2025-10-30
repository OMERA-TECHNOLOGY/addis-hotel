"use client";

import { useState, useRef } from "react";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Amara Kebede",
      role: "Travel Journalist",
      text: "The Addis transcends the typical luxury hotel experience. It's a cultural immersion that honors Ethiopian heritage while delivering world-class comfort. Every moment felt like a celebration of authentic Ethiopian hospitality.",
      avatar: "/professional-headshot-woman-ethiopian.jpg",
    },
    {
      name: "David Chen",
      role: "Business Executive",
      text: "Every detail reflects thoughtfulness—from the Ethiopian coffee ceremony to the artisan collaborations. This is luxury with purpose. The attention to cultural authenticity while maintaining five-star standards is remarkable.",
      avatar: "/professional-headshot-man-asian.jpg",
    },
    {
      name: "Sophie Laurent",
      role: "Luxury Travel Blogger",
      text: "The Addis is a masterclass in authentic hospitality. You don't just stay here; you become part of the story of Addis Ababa. The cultural experiences and personalized service set a new standard for luxury hotels.",
      avatar: "/professional-headshot-woman-european.jpg",
    },
    {
      name: "Tewodros Assefa",
      role: "Diplomatic Corps",
      text: "As an Ethiopian returning home, The Addis perfectly captures the soul of our culture while embracing modern luxury. The Debo hospitality tradition is alive and thriving here. Truly exceptional.",
      avatar: "/professional-headshot-man-asian.jpg",
    },
    {
      name: "Yordanos Tesfaye",
      role: "Cultural Ambassador",
      text: "The artisan collaborations and cultural programming showcase Ethiopia's rich heritage in the most sophisticated way. This isn't just accommodation—it's an educational and transformative experience.",
      avatar: "/professional-headshot-woman-ethiopian.jpg",
    },
    {
      name: "Samuel Getachew",
      role: "International Investor",
      text: "The perfect blend of business amenities and cultural authenticity. The conference facilities are world-class, while the cultural experiences provide unique networking opportunities. Outstanding.",
      avatar: "/professional-headshot-man-ethiopian.jpg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-500"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-transparent dark:from-amber-950/10 pointer-events-none" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-amber-200/20 dark:bg-amber-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-300/10 dark:bg-amber-500/5 rounded-full blur-3xl" />

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
            <Quote size={16} className="text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-light tracking-widest text-amber-700 dark:text-amber-300 uppercase">
              Guest Stories
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-500">
            Voices of
            <span className="block text-amber-600 dark:text-amber-400 mt-2">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-600 rounded-full mx-auto mb-8 transition-all duration-500" />
          <p className="text-xl text-slate-700 dark:text-amber-100/80 max-w-3xl mx-auto leading-relaxed font-light transition-colors duration-500">
            Discover what our guests say about their transformative experiences
            at The Addis Hotel. Their stories reflect our commitment to
            authentic Ethiopian hospitality and world-class luxury.
          </p>
        </div>

        {/* Premium Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 border border-amber-200/50 dark:border-amber-800/30 hover:border-amber-400/50 dark:hover:border-amber-600/50 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onMouseEnter={() => setActiveTestimonial(idx)}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-amber-50/30 dark:from-slate-800 dark:to-amber-950/20 rounded-3xl transition-colors duration-500" />

              {/* Quote Icon */}
              <div className="relative mb-6">
                <div className="p-3 bg-amber-500/10 dark:bg-amber-500/10 rounded-2xl border border-amber-200/50 dark:border-amber-800/30 group-hover:border-amber-400/50 dark:group-hover:border-amber-600/50 transition-all duration-500 inline-block">
                  <Quote
                    size={24}
                    className="text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Icon Glow */}
                <div className="absolute -inset-2 bg-amber-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-500 text-amber-500 group-hover:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 dark:text-amber-100/80 leading-relaxed mb-8 font-light italic transition-colors duration-500 relative">
                "{testimonial.text}"{/* Hover underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-700" />
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-200/50 dark:border-amber-800/30 group-hover:border-amber-400/50 dark:group-hover:border-amber-600/50 transition-all duration-500"
                  />
                  {/* Avatar glow */}
                  <div className="absolute -inset-1 bg-amber-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-500">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-amber-200/70 font-light transition-colors duration-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 text-slate-600 dark:text-amber-200/70">
            <div className="flex items-center gap-2">
              <Star size={16} className="fill-amber-500 text-amber-500" />
              <span className="text-sm font-light">
                Rated 4.9/5 by 247 guests
              </span>
            </div>
            <div className="w-1 h-1 bg-amber-500/50 rounded-full" />
            <div className="flex items-center gap-2">
              <Quote size={16} className="text-amber-500" />
              <span className="text-sm font-light">
                Luxury Hotel Award 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
