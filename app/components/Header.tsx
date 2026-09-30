"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="glass-panel rounded-2xl px-5 py-3 flex justify-between items-center gap-4 bg-slate-950/70 backdrop-blur-xl border border-white/10 shadow-2xl">
          
          {/* Brand */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-purple-600 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-400 font-mono font-black text-sm">
                MG
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-100 tracking-tight text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
                Martin Gonzalez
              </span>
              <span className="text-[11px] text-gray-400 font-sans tracking-wide flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Mendoza, Argentina • Backend PHP & Full Stack
              </span>
            </div>
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-xl border border-white/5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 text-xs font-semibold text-gray-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/cv"
              className="px-3.5 py-1.5 text-xs font-mono font-medium text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 rounded-xl transition-all flex items-center gap-1.5"
            >
              <span>📄 Ver CV ATS</span>
            </Link>

            <Link
              href="/admin"
              className="px-3.5 py-1.5 text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 rounded-xl transition-all flex items-center gap-1.5"
            >
              <span>⚙️ Admin</span>
            </Link>
          </div>


          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none"
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

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 glass-panel rounded-2xl p-4 shadow-2xl space-y-2 font-sans animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2.5 text-xs font-semibold text-gray-200 hover:text-white hover:bg-slate-800/80 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-800">
              <Link
                href="/admin"
                className="block px-4 py-2 text-xs font-mono text-cyan-400 hover:bg-cyan-950/50 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                ⚙️ Panel de Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}




