"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Crónicas", href: "#inicio", icon: "📜" },
    { label: "Campañas", href: "#sobre-mi", icon: "🛡️" },
    { label: "Maravillas", href: "#proyectos", icon: "🏰" },
    { label: "Pergamino", href: "#contacto", icon: "✉️" },
  ];

  return (
    <header className="fixed top-2 left-0 right-0 z-50 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* AoE2 Top HUD Container */}
        <div className="bg-[#1c1917]/95 border-2 border-amber-600/60 rounded-xl px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.9)] flex flex-col md:flex-row justify-between items-center gap-3">
          
          {/* Brand / Crest */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-amber-500 via-amber-700 to-amber-950 border-2 border-amber-300 flex items-center justify-center text-amber-100 font-extrabold text-sm shadow-inner group-hover:scale-105 transition-transform">
              ⚔️
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-amber-200 tracking-wider text-sm sm:text-base group-hover:text-amber-400 transition-colors uppercase font-serif">
                Martin Gonzalez
              </span>
              <span className="text-[10px] text-amber-500/90 font-mono tracking-widest uppercase">
                Backend PHP • Civilización Dev
              </span>
            </div>
          </Link>

          {/* AoE2 Resource Bar (Game HUD) */}
          <div className="hidden lg:flex items-center gap-4 bg-black/60 border border-amber-800/60 px-4 py-1.5 rounded-lg text-xs font-mono text-amber-200 shadow-inner">
            <div className="flex items-center gap-1.5" title="Recurso Principal: PHP">
              <span className="text-base">🌾</span>
              <span className="text-amber-400 font-bold">1000</span>
              <span className="text-[10px] text-amber-300/60">PHP 8+</span>
            </div>
            <div className="h-4 w-px bg-amber-800/60" />
            <div className="flex items-center gap-1.5" title="Framework: Laravel">
              <span className="text-base">🪵</span>
              <span className="text-amber-400 font-bold">850</span>
              <span className="text-[10px] text-amber-300/60">Laravel</span>
            </div>
            <div className="h-4 w-px bg-amber-800/60" />
            <div className="flex items-center gap-1.5" title="Framework: CodeIgniter">
              <span className="text-base">🪙</span>
              <span className="text-amber-400 font-bold">600</span>
              <span className="text-[10px] text-amber-300/60">CodeIgniter</span>
            </div>
            <div className="h-4 w-px bg-amber-800/60" />
            <div className="flex items-center gap-1.5" title="Frontend: Vue.js">
              <span className="text-base">🪨</span>
              <span className="text-amber-400 font-bold">450</span>
              <span className="text-[10px] text-amber-300/60">Vue.js</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center gap-1 bg-amber-950/40 border border-amber-700/50 rounded-lg p-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 text-xs font-semibold text-amber-200 hover:text-amber-900 hover:bg-gradient-to-b hover:from-amber-300 hover:to-amber-500 rounded transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden p-2 text-amber-400 hover:text-amber-200 rounded-lg focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-[#1c1917]/95 border-2 border-amber-600 rounded-xl p-4 shadow-2xl space-y-2 font-serif animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2.5 text-sm font-semibold text-amber-200 hover:text-amber-950 hover:bg-amber-400 rounded-lg transition-all flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="pt-2 border-t border-amber-800 flex items-center justify-center gap-2 text-amber-400 text-xs font-mono py-1">
              <span>🏰 EDAD IMPERIAL • MENDOZA</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


