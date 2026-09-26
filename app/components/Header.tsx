"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Mí", href: "#sobre-mi" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#0f172a]/75 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl flex justify-between items-center transition-all duration-300">
          {/* Logo / Name */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
              MG
            </div>
            <span className="font-semibold text-gray-100 tracking-tight group-hover:text-purple-400 transition-colors hidden sm:inline">
              Martin Gonzalez
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 rounded-full px-4 py-1.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Availability Status Badge */}
          <div className="hidden sm:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Disponible para proyectos</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2.5 text-sm font-medium text-gray-200 hover:text-white hover:bg-purple-600/20 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center justify-center gap-2 text-emerald-400 text-xs font-medium py-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Disponible para trabajar</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

