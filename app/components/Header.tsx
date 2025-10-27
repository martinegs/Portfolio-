"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Desktop Navigation centrado */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="#inicio"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#sobre-mi"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sobre Mí
            </Link>
            <Link
              href="#proyectos"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="#contacto"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="#inicio"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#sobre-mi"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Mí
            </Link>
            <Link
              href="#proyectos"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              href="#contacto"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
