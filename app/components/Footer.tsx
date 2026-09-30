"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-950 border-t border-white/5 text-gray-400 py-12 relative overflow-hidden font-sans text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
                MG
              </div>
              <h3 className="text-gray-100 text-sm font-bold tracking-tight font-sans">
                Martin Gonzalez
              </h3>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Desarrollador Backend PHP especializado en Laravel & CodeIgniter 4. Creación de lógica robusta, optimización de consultas MySQL e integración de vistas con Vue.js y Tailwind CSS.
            </p>
            <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1.5 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Mendoza, Argentina • Disponible para proyectos
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-gray-200 text-xs font-mono font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Navegación
            </h3>
            <ul className="space-y-2 text-xs text-gray-300 font-sans">
              <li>
                <Link href="#inicio" className="hover:text-cyan-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#experiencia" className="hover:text-cyan-400 transition-colors">
                  Experiencia Laboral
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="hover:text-cyan-400 transition-colors">
                  Proyectos Destacados
                </Link>
              </li>
              <li>
                <Link href="#habilidades" className="hover:text-cyan-400 transition-colors">
                  Stack Tecnológico
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-cyan-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Social */}
          <div>
            <h3 className="text-gray-200 text-xs font-mono font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contacto Directo
            </h3>
            <ul className="space-y-2 text-xs text-gray-300 mb-4 font-sans">
              <li>📍 Mendoza, Argentina</li>
              <li>
                ✉️{" "}
                <a
                  href="mailto:Martinegs2012@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Martinegs2012@gmail.com
                </a>
              </li>
              <li>
                📱{" "}
                <a
                  href="https://wa.me/542613440973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-mono"
                >
                  +54 2613440973 (WhatsApp)
                </a>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              <a
                href="https://github.com/martinegs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-500/50 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/martin-gonzalez7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-500/50 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-sans">
          <p>&copy; {currentYear ?? "2026"} Martin Gonzalez • Desarrollador Backend & Full Stack</p>
          <p className="text-gray-400">Diseñado con Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}




