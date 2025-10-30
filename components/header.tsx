"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun, Star, MapPin } from "lucide-react";
import { ReservationModal } from "./reservation-modal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const headerRef = useRef(null);

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    "Rooms & Suites",
    "Dining",
    "Experiences",
    "Gallery",
    "Contact",
  ];

  return (
    <>
      {/* Premium Background Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-amber-50/30 via-white to-amber-100/20 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/30 pointer-events-none -z-10" />

      <header
        ref={headerRef}
        className={`fixed top-0 w-full z-50 transition-all duration-1000 ${
          scrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-3xl shadow-2xl shadow-black/10 py-0"
            : "bg-transparent backdrop-blur-md py-4"
        }`}
      >
        {/* Luxury Top Bar */}
        <div className="border-b border-amber-200/50 dark:border-amber-800/30">
          <div className="max-w-8xl mx-auto px-8">
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-6 text-xs">
                <div className="flex items-center gap-1 text-amber-700 dark:text-amber-300">
                  <MapPin size={10} />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={10}
                      className="fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                <span>+251 911 234 567</span>
                <span>•</span>
                <span>reservations@addishotel.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            {/* Ultimate Luxury Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="flex flex-col transform group-hover:scale-105 transition-transform duration-700">
                  <h1 className="font-['Playfair_Display'] text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                    Addis
                  </h1>
                  <div className="flex items-center justify-between mt-0.5">
                    <div className="w-10 h-0.5 bg-gradient-to-r from-amber-600 to-transparent"></div>
                    <p className="text-[10px] tracking-[0.2em] text-amber-600 dark:text-amber-400 uppercase font-light px-2">
                      Luxury Hotel
                    </p>
                    <div className="w-10 h-0.5 bg-gradient-to-l from-amber-600 to-transparent"></div>
                  </div>
                </div>

                {/* Animated Logo Glow */}
                <div className="absolute -inset-8 bg-gradient-to-r from-amber-400/0 via-amber-200/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:via-amber-200/5 group-hover:to-amber-400/10 rounded-2xl blur-2xl transition-all duration-1000 pointer-events-none" />
              </div>
            </div>

            {/* World-Class Navigation */}
            <nav className="hidden xl:flex items-center space-x-0">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative px-5 py-4 group"
                  onMouseEnter={() => setActiveNav(item)}
                  onMouseLeave={() => setActiveNav("")}
                >
                  <span
                    className={`relative z-20 text-sm font-light tracking-wider transition-all duration-500 ${
                      activeNav === item
                        ? "text-amber-700 dark:text-amber-300 transform translate-y-[-2px]"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300"
                    }`}
                  >
                    {item}
                  </span>

                  {/* Magnetic Underline */}
                  <div
                    className={`absolute bottom-4 left-8 right-8 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 transform origin-left transition-all duration-700 ${
                      activeNav === item
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  />

                  {/* Floating Background */}
                  <div
                    className={`absolute inset-2 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20 rounded-xl border border-amber-200/50 dark:border-amber-800/30 transform transition-all duration-500 ${
                      activeNav === item
                        ? "scale-100 opacity-100 shadow-lg shadow-amber-500/10"
                        : "scale-90 opacity-0"
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* Premium Action Suite */}
            <div className="hidden xl:flex items-center space-x-3">
              {/* Animated Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-4 hover:bg-amber-50 dark:hover:bg-amber-950/50 rounded-2xl transition-all duration-500 group border border-amber-200/50 dark:border-amber-800/30 hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-lg cursor-pointer"
                aria-label="Toggle dark mode"
              >
                <div className="relative">
                  <div
                    className={`transform transition-all duration-700 ${
                      isDark ? "rotate-180 scale-110" : "rotate-0 scale-100"
                    }`}
                  >
                    {isDark ? (
                      <Sun size={18} className="text-amber-400" />
                    ) : (
                      <Moon size={18} className="text-slate-600" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-amber-400/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                </div>
              </button>

              {/* Ultimate Reserve Button */}
              <button
                onClick={() => setShowReservation(true)}
                className="relative px-6 py-3 group overflow-hidden rounded-xl transition-all duration-1000 hover:scale-105 hover:shadow-3xl cursor-pointer"
              >
                {/* Main Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 transform group-hover:scale-110 transition-transform duration-1000" />

                {/* Animated Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                {/* Inner Glow */}
                <div className="absolute inset-0 bg-amber-400/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-700" />

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                <div className="absolute inset-[1.5px] rounded-2xl bg-amber-600 group-hover:bg-transparent transition-all duration-500" />

                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping" />
                  <div
                    className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>

                {/* Button Content */}
                <span className="relative z-10 font-semibold text-sm tracking-widest text-white flex items-center gap-4">
                  RESERVE NOW
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-white/80 rounded-full group-hover:scale-150 transition-transform duration-500 delay-100" />
                    <div className="w-1 h-1 bg-white/60 rounded-full group-hover:scale-150 transition-transform duration-500 delay-200" />
                    <div className="w-1 h-1 bg-white/40 rounded-full group-hover:scale-150 transition-transform duration-500 delay-300" />
                  </div>
                </span>

                {/* Hover Ripple Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/10 rounded-full group-hover:w-64 group-hover:h-64 group-hover:-top-32 group-hover:-left-32 transition-all duration-700" />
                </div>
              </button>
            </div>

            {/* Premium Mobile Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-4 hover:bg-amber-50 dark:hover:bg-amber-950/50 rounded-2xl transition-all duration-500 border border-amber-200/50 dark:border-amber-800/30 group"
            >
              <div className="relative">
                {isOpen ? (
                  <X size={22} className="text-amber-600 dark:text-amber-400" />
                ) : (
                  <Menu
                    size={22}
                    className="text-slate-600 dark:text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400"
                  />
                )}
              </div>
            </button>
          </div>

          {/* Ultimate Mobile Navigation */}
          <div
            className={`xl:hidden transition-all duration-1000 overflow-hidden ${
              isOpen ? "max-h-[600px] opacity-100 pb-8" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="space-y-3 pt-6 border-t border-amber-200/50 dark:border-amber-800/30">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-6 py-5 text-lg font-light text-slate-700 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-300 rounded-2xl transition-all duration-500 border border-transparent hover:border-amber-200 dark:hover:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-950/30 group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-4 transform group-hover:translate-x-3 transition-transform duration-500">
                    <div className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150" />
                    {item}
                  </div>
                </a>
              ))}

              {/* Mobile Actions */}
              <div className="flex gap-4 pt-6">
                <button
                  onClick={toggleDarkMode}
                  className="flex-1 p-5 hover:bg-amber-50 dark:hover:bg-amber-950/50 rounded-2xl transition-all duration-500 border border-amber-200/50 dark:border-amber-800/30 flex items-center justify-center gap-4 group"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  <span className="font-light">
                    {isDark ? "Light Mode" : "Dark Mode"}
                  </span>
                </button>
                <button
                  onClick={() => {
                    setShowReservation(true);
                    setIsOpen(false);
                  }}
                  className="flex-1 px-6 py-5 bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-2xl hover:shadow-xl transition-all duration-500 font-medium text-lg"
                >
                  Reserve
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <ReservationModal
        isOpen={showReservation}
        onClose={() => setShowReservation(false)}
      />
    </>
  );
}
