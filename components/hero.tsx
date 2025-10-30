"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Star, Award, Shield } from "lucide-react";
import { VirtualTourModal } from "./virtual-tour-modal";

export function Hero() {
  const [showTour, setShowTour] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);

  const slides = [
    {
      image:
        "/ai-prompt:luxury-hotel-lobby-ethiopian-modern-design-marble-wood-gold-accents",
      title: "Grand Lobby",
      description: "Where heritage meets contemporary elegance",
    },
    {
      image:
        "/ai-prompt:luxury-hotel-suite-ethiopian-art-king-bed-panoramic-city-views",
      title: "Presidential Suite",
      description: "Unparalleled comfort with breathtaking views",
    },
    {
      image:
        "/ai-prompt:fine-dining-restaurant-ethiopian-cuisine-luxury-ambiance",
      title: "Signature Dining",
      description: "Culinary excellence inspired by ancient traditions",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-500"
      >
        {/* Light/Dark Mode Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white to-amber-100/60 dark:from-amber-900/20 dark:via-slate-900 dark:to-amber-800/10 transition-all duration-500" />

        {/* Floating Particles - Different colors for light/dark */}
        <div className="absolute inset-0 opacity-30 dark:opacity-30 transition-opacity duration-500">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-600/40 dark:bg-amber-400 rounded-full animate-float transition-colors duration-500"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Ethiopian Pattern Overlay - Adapts to dark mode */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] transition-opacity duration-500">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50 L100 0 L100 100 L0 100 L0 0 Z' fill='none' stroke='%23${"D97706"}' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%23${"D97706"}' stroke-width='0.5'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Perfect container width - balanced and professional */}
        <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Premium Content */}
            <div className="space-y-8 relative z-10">
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/10 dark:bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 dark:border-amber-500/20 rounded-2xl transition-all duration-500">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className="fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400 transition-colors duration-500"
                    />
                  ))}
                </div>
                <span className="text-amber-700 dark:text-amber-300 text-sm font-light tracking-widest transition-colors duration-500">
                  LUXURY HERITAGE
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-none tracking-tight transition-colors duration-500">
                  Addis
                  <span className="block text-amber-600 dark:text-amber-400 mt-2 transition-colors duration-500">
                    Hotel
                  </span>
                </h1>

                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-600 rounded-full transition-all duration-500" />

                <p className="text-lg sm:text-xl text-slate-700 dark:text-amber-100/80 leading-relaxed max-w-2xl font-light transition-colors duration-500">
                  Where ancient Ethiopian traditions embrace contemporary
                  luxury. A sanctuary of refined elegance in the heart of Addis
                  Ababa, offering unparalleled hospitality and timeless
                  sophistication.
                </p>
              </div>

              {/* Premium Features */}
              <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
                {[
                  { icon: Award, text: "World Luxury Award 2024" },
                  { icon: Shield, text: "Exceptional Safety Standards" },
                  { icon: Star, text: "24/7 Personalized Service" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="p-2 bg-amber-500/10 dark:bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 dark:group-hover:bg-amber-500/20 transition-all duration-500">
                      <feature.icon
                        size={18}
                        className="text-amber-600 dark:text-amber-400 transition-colors duration-500"
                      />
                    </div>
                    <span className="text-slate-700 dark:text-amber-200 text-sm font-light transition-colors duration-500">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="group relative px-8 sm:px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative z-10 font-semibold tracking-widest text-sm">
                    RESERVE YOUR STAY
                  </span>
                </button>

                <button
                  onClick={() => setShowTour(true)}
                  className="group relative px-8 sm:px-10 py-4 bg-transparent border-2 border-amber-500/50 dark:border-amber-500/50 text-amber-600 dark:text-amber-400 rounded-2xl hover:border-amber-500 dark:hover:border-amber-400 hover:bg-amber-500/10 transition-all duration-500 transform hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 font-semibold tracking-widest text-sm flex items-center gap-3">
                    <Play
                      size={18}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    VIRTUAL TOUR
                  </span>
                </button>
              </div>
            </div>

            {/* Premium Image Slider */}
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group bg-slate-100 dark:bg-slate-800 transition-colors duration-500">
              {/* Main Image */}
              <div className="absolute inset-0 transition-opacity duration-1000">
                <div className="w-full h-full bg-gradient-to-br from-amber-400/10 to-amber-600/5 dark:from-amber-400/20 dark:to-amber-600/10 transition-all duration-500" />
                <div className="absolute inset-0 bg-slate-200/30 dark:bg-slate-800/30 transition-colors duration-500" />

                {/* AI Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-amber-200/50 transition-colors duration-500">
                  <div className="text-center">
                    <div className="text-sm font-light tracking-widest mb-2 transition-colors duration-500">
                      AI IMAGE: {slides[currentSlide].title}
                    </div>
                    <div className="text-xs transition-colors duration-500">
                      {slides[currentSlide].description}
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Info */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-2xl p-6 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500 border border-white/20 dark:border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-500">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-slate-600 dark:text-amber-200/80 font-light text-sm sm:text-base transition-colors duration-500">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? "bg-amber-500 dark:bg-amber-400 scale-125"
                        : "bg-amber-500/30 dark:bg-amber-400/30 hover:bg-amber-500/50 dark:hover:bg-amber-400/50"
                    }`}
                  />
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-amber-400/10 dark:bg-amber-400/10 rounded-full blur-3xl transition-all duration-500" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-amber-600/10 dark:bg-amber-600/10 rounded-full blur-3xl transition-all duration-500" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-amber-500/50 dark:border-amber-400/50 rounded-full flex justify-center transition-colors duration-500">
            <div className="w-1 h-3 bg-amber-500 dark:bg-amber-400 rounded-full mt-2 animate-bounce transition-colors duration-500" />
          </div>
        </div>
      </section>

      <VirtualTourModal isOpen={showTour} onClose={() => setShowTour(false)} />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </>
  );
}
