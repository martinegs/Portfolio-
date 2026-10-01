"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "// INICIO", href: "#inicio" },
    { label: "// EXPERIENCIA", href: "#experiencia" },
    { label: "// PROYECTOS", href: "#proyectos" },
    { label: "// HABILIDADES", href: "#habilidades" },
    { label: "// CONTACTO", href: "#contacto" },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="cyber-panel cyber-cut-corner px-4 py-2.5 flex justify-between items-center gap-4 bg-[#0d0e15]/90 border border-[#00f0ff]/40 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
          
          {/* Brand */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#fcee09] text-[#07080c] font-mono font-black text-sm flex items-center justify-center shadow-[0_0_15px_rgba(252,238,9,0.5)] cyber-cut-corner-sm group-hover:scale-105 transition-transform">
              MG
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-gray-100 tracking-wider text-xs sm:text-sm group-hover:text-[#fcee09] transition-colors flex items-center gap-2">
                <span>MARTIN GONZALEZ</span>
                <span className="text-[9px] bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40 px-1.5 py-0.5 rounded font-mono">
                  PORTFOLIO
                </span>
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-tight flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#fcee09] animate-hud-blink" />
                DESARROLLADOR BACKEND PHP & FULL STACK
              </span>
            </div>
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-[#07080c]/80 p-1 border border-[#1e2436] font-mono text-xs">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 font-bold text-gray-300 hover:text-[#07080c] hover:bg-[#fcee09] transition-all tracking-wider uppercase text-[11px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/cv"
              className="cyber-btn-yellow px-4 py-1.5 text-[11px] flex items-center gap-1.5"
            >
              <span>📄 DESCARGAR CV ATS</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden p-2 text-[#00f0ff] hover:text-[#fcee09] focus:outline-none"
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
          <div className="md:hidden mt-2 cyber-panel border border-[#fcee09]/50 p-4 space-y-2 font-mono text-xs animate-in fade-in duration-150">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 font-bold text-gray-200 hover:text-[#07080c] hover:bg-[#fcee09] transition-all tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cv"
              className="block px-4 py-2.5 font-bold text-[#fcee09] bg-[#fcee09]/10 border border-[#fcee09]/40 hover:bg-[#fcee09] hover:text-[#07080c] transition-all tracking-wider text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              📄 VER CV ATS
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
