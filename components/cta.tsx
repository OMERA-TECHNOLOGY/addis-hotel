"use client";

import { useState } from "react";
import { ReservationModal } from "./reservation-modal";

export function CTA() {
  const [showReservation, setShowReservation] = useState(false);

  return (
    <>
      <section className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-500">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-transparent dark:from-amber-950/10 pointer-events-none" />
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

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          {/* Premium Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-500">
              Begin Your
              <span className="block text-amber-600 dark:text-amber-400 mt-2">
                Journey
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-600 rounded-full mx-auto mb-8 transition-all duration-500" />
            <p className="text-xl text-slate-800 dark:text-amber-100 max-w-2xl mx-auto leading-relaxed font-light transition-colors duration-500">
              Experience the convergence of Ethiopian heritage and refined
              luxury. Reserve your sanctuary at The Addis Hotel today.
            </p>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setShowReservation(true)}
              className="group relative px-12 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10 font-semibold tracking-widest text-lg">
                RESERVE NOW
              </span>
            </button>

            <button className="group relative px-12 py-4 bg-transparent border-2 border-amber-500/50 dark:border-amber-500/50 text-amber-600 dark:text-amber-400 rounded-2xl hover:border-amber-500 dark:hover:border-amber-400 hover:bg-amber-500/10 transition-all duration-500 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 font-semibold tracking-widest text-lg">
                CONTACT CONCIERGE
              </span>
            </button>
          </div>
        </div>
      </section>

      <ReservationModal
        isOpen={showReservation}
        onClose={() => setShowReservation(false)}
      />
    </>
  );
}
