"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "// 01. INICIO", href: "#inicio" },
    { label: "// 02. EXPERIENCIA", href: "#experiencia" },
    { label: "// 03. PROYECTOS", href: "#proyectos" },
    { label: "// 04. HABILIDADES", href: "#habilidades" },
    { label: "// 05. CONTACTO", href: "#contacto" },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="cyber-panel rounded-xl px-4 py-3 flex justify-between items-center gap-4 border border-cyan-500/30 bg-slate-950/80 backdrop-blur-xl shadow-2xl">
          
          {/* Brand */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
              MG_
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-100 tracking-wider text-sm sm:text-base group-hover:text-cyan-400 transition-colors uppercase font-mono">
                Martin Gonzalez
              </span>
              <span className="text-[10px] text-cyan-400/80 font-mono tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Backend PHP • Full Stack
              </span>
            </div>
          </Link>

          {/* Futuristic Tech Status Bar (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] font-mono text-gray-300">
            <span className="text-cyan-400 font-semibold">[SYS_OK]</span>
            <span className="text-slate-600">|</span>
            <span className="hover:text-cyan-300 transition-colors">PHP 8+</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-cyan-300 transition-colors">Laravel</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-cyan-300 transition-colors">CodeIgniter</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-cyan-300 transition-colors">Vue.js</span>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 text-xs font-mono text-gray-300 hover:text-cyan-400 hover:bg-cyan-950/40 rounded border border-transparent hover:border-cyan-500/30 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden p-2 text-cyan-400 hover:text-cyan-300 rounded-lg focus:outline-none"
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
          <div className="md:hidden mt-2 bg-slate-950/95 border border-cyan-500/40 rounded-xl p-4 shadow-2xl space-y-2 font-mono animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-xl">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2.5 text-xs font-semibold text-gray-200 hover:text-cyan-400 hover:bg-cyan-950/50 rounded-lg border border-transparent hover:border-cyan-500/30 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}



