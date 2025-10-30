"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Star, ArrowRight } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-white dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-transparent dark:from-amber-950/10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      {/* Ethiopian Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 0 L100 100 L0 100 Z' fill='none' stroke='%23D97706' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23D97706' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand - Matching Header Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="relative">
                <div className="flex flex-col transform group-hover:scale-105 transition-transform duration-700">
                  <h1 className="font-['Playfair_Display'] text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none transition-colors duration-500">
                    Addis
                  </h1>
                  <div className="flex items-center justify-between mt-0.5">
                    <div className="w-10 h-0.5 bg-gradient-to-r from-amber-600 to-transparent dark:from-amber-400"></div>
                    <p className="text-[10px] tracking-[0.2em] text-amber-600 dark:text-amber-400 uppercase font-light px-2 transition-colors duration-500">
                      Luxury Hotel
                    </p>
                    <div className="w-10 h-0.5 bg-gradient-to-l from-amber-600 to-transparent dark:from-amber-400"></div>
                  </div>
                </div>

                {/* Animated Logo Glow */}
                <div className="absolute -inset-8 bg-gradient-to-r from-amber-400/0 via-amber-200/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:via-amber-200/5 group-hover:to-amber-400/10 rounded-2xl blur-2xl transition-all duration-1000 pointer-events-none" />
              </div>
            </div>
            <p className="text-slate-700 dark:text-amber-100/80 text-lg leading-relaxed mb-6 font-light max-w-md transition-colors duration-500">
              Where Ethiopian heritage meets refined luxury in the heart of
              Addis Ababa. Experience authentic hospitality rooted in centuries
              of tradition.
            </p>

            {/* Awards */}
            <div className="flex items-center gap-4 text-slate-600 dark:text-amber-200/70 transition-colors duration-500">
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-amber-500 text-amber-500" />
                <Star size={14} className="fill-amber-500 text-amber-500" />
                <Star size={14} className="fill-amber-500 text-amber-500" />
                <Star size={14} className="fill-amber-500 text-amber-500" />
                <Star size={14} className="fill-amber-500 text-amber-500" />
              </div>
              <span className="text-sm font-light">
                World Luxury Hotel Award 2024
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-6 text-lg tracking-wide transition-colors duration-500">
              Explore
            </h4>
            <ul className="space-y-4">
              {[
                "Rooms & Suites",
                "Dining Experiences",
                "Cultural Programs",
                "Wellness Spa",
                "Gallery",
                "Special Offers",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-amber-100/80 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 flex items-center gap-2 group text-sm font-light"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-6 text-lg tracking-wide transition-colors duration-500">
              Information
            </h4>
            <ul className="space-y-4">
              {[
                "About Us",
                "Sustainability",
                "Careers",
                "Press Room",
                "Gallery",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-amber-100/80 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 flex items-center gap-2 group text-sm font-light"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-6 text-lg tracking-wide transition-colors duration-500">
              Stay Connected
            </h4>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-slate-600 dark:text-amber-100/80 group transition-colors duration-500">
                <MapPin
                  size={16}
                  className="text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm font-light">
                  Addis Ababa, Ethiopia
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-amber-100/80 group transition-colors duration-500">
                <Phone
                  size={16}
                  className="text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm font-light">+251 11 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-amber-100/80 group transition-colors duration-500">
                <Mail
                  size={16}
                  className="text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm font-light">
                  reservations@theaddis.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <label className="text-slate-700 dark:text-amber-200/80 text-sm font-light transition-colors duration-500">
                Join our newsletter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/50 dark:bg-slate-800/50 border border-amber-500/20 dark:border-amber-500/30 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-amber-200/50 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-200/50 dark:border-amber-500/30 pt-8 transition-colors duration-500">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-slate-600 dark:text-amber-200/70 text-sm font-light transition-colors duration-500">
              <p>
                &copy; 2025 The Addis Hotel. All rights reserved. | Luxury
                Heritage Experience
              </p>
            </div>

            <div className="flex gap-8 text-slate-600 dark:text-amber-200/70 text-sm font-light transition-colors duration-500">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Accessibility",
                "Sustainability",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
