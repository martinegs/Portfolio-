"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import { Project, ExperienceItem, SkillCategory } from "@/lib/initialData";
import { getStoredProjects, getStoredExperiences, getStoredSkills } from "@/lib/storage";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [skills, setSkills] = useState<SkillCategory[]>([]);

  // Interactive Cyberdeck API Endpoint state
  const [activeEndpoint, setActiveEndpoint] = useState<"profile" | "stack" | "availability" | "ping">("profile");

  // Copy toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`✓ ${label} COPIADO AL CYBERDECK`);
  };

  // Reactive sync with admin changes
  useEffect(() => {
    const loadData = () => {
      setProjects(getStoredProjects());
      setExperiences(getStoredExperiences());
      setSkills(getStoredSkills());
    };

    loadData();

    window.addEventListener("portfolio_data_updated", loadData);
    window.addEventListener("storage", loadData);

    return () => {
      window.removeEventListener("portfolio_data_updated", loadData);
      window.removeEventListener("storage", loadData);
    };
  }, []);

  const categories = ["Todos", "Full-Stack", "Backend", "Frontend"];

  const filteredProjects = projects.filter((p) => {
    const matchesFilter =
      activeFilter === "Todos" || p.category === activeFilter || p.technologies.includes(activeFilter);
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  // Cyberdeck API responses
  const endpointResponses = {
    profile: {
      netrunner: "MARTIN GONZALEZ",
      spec: "BACKEND PHP & FULL STACK DEVELOPER",
      location: "NIGHT_CITY_MENDOZA // ARGENTINA 🍇",
      education: "LIC. EN SISTEMAS DE INFORMACIÓN (UNIV. CHAMPAGNAT)",
      deployments: "NECTA (PRESENCIAL) & DIGITALTEX (REMOTO)",
      core_stack: ["PHP 8.3", "LARAVEL 11", "CODEIGNITER 4", "VUE.JS", "MYSQL"]
    },
    stack: {
      backend: ["PHP 8.3", "Laravel 11", "CodeIgniter 4", "REST APIs", "MVC"],
      frontend: ["Vue 3", "HTMX", "JavaScript ES6+", "jQuery", "Tailwind CSS"],
      databases: ["MySQL", "PostgreSQL", "SQLite", "Eloquent ORM"],
      cyberware: ["Git/GitHub", "Docker", "Postman", "Vite", "Linux (Bash)"]
    },
    availability: {
      status: "ONLINE // DISPONIBLE PARA CONTRATACIÓN",
      modalities: ["Presencial (Mendoza)", "Híbrido", "Remoto"],
      roles: ["Backend PHP Developer", "Laravel Specialist", "Full Stack Netrunner"],
      latency: "< 24 HORAS"
    },
    ping: {
      http_status: 200,
      cyberspace_msg: "PONG! NETRUNNER LINK OPTIMAL 🔥",
      timestamp: new Date().toISOString()
    }
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-[#f0f4f8] selection:bg-[#fcee09] selection:text-[#07080c] font-sans relative scanlines-bg">
      <Header />

      {/* Copy Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#07080c] border border-[#fcee09] text-[#fcee09] font-mono text-xs px-5 py-3 shadow-[0_0_20px_rgba(252,238,9,0.4)] animate-in fade-in slide-in-from-bottom-4">
          {toastMessage}
        </div>
      )}

      {/* Hero Section - Cyberpunk 2077 Night City Banner */}
      <section id="inicio" className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#00f0ff]/20 overflow-hidden">
        
        {/* Background Cyber Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none">
          <Image
            src="/images/cyberpunk_hero_bg.jpg"
            alt="Cyberpunk Night City"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-[#07080c]/80 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            
            {/* Netrunner Hero Banner */}
            <div className="md:col-span-7 space-y-6 text-left">
              
              {/* Telemetry Status Line */}
              <div className="inline-flex items-center gap-2 bg-[#07080c] border border-[#fcee09]/60 px-3.5 py-1.5 font-mono text-xs text-[#fcee09] shadow-[0_0_10px_rgba(252,238,9,0.2)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fcee09] animate-hud-blink" />
                <span className="tracking-wider uppercase font-bold">STATUS: DISPONIBLE // MENDOZA & REMOTO</span>
              </div>

              {/* Main Title with Neon Flicker */}
              <div>
                <h1 className="text-4xl sm:text-6xl font-black font-mono tracking-wider uppercase text-[#f0f4f8]">
                  HOLA, SOY <br />
                  <span className="text-[#fcee09] animate-neon-yellow drop-shadow-[0_0_15px_rgba(252,238,9,0.8)]">
                    MARTIN GONZALEZ
                  </span>
                </h1>
                <h2 className="text-sm sm:text-lg font-mono text-[#00f0ff] font-bold tracking-widest mt-2 uppercase flex items-center gap-2">
                  <span className="text-[#ff0055]">//</span> BACKEND PHP (LARAVEL & CODEIGNITER) • FULL STACK
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans max-w-2xl bg-[#0d0e15]/70 p-4 border-l-2 border-[#fcee09]">
                Desarrollador Web con enfoque en lógica backend robusta en <strong className="text-[#fcee09] font-mono">PHP, Laravel 11, CodeIgniter 4 y MySQL</strong>. Integración de interfaces reactivas con <strong className="text-[#00f0ff] font-mono">Vue.js 3, HTMX y Tailwind CSS</strong>. Código limpio, optimización de consultas SQL y arquitectura MVC escalable.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
                <a
                  href="#proyectos"
                  className="cyber-btn-yellow px-6 py-3 text-xs flex items-center gap-2"
                >
                  <span>EXPLORAR PROYECTOS</span>
                  <span>➔</span>
                </a>

                <Link
                  href="/cv"
                  className="cyber-btn-cyan px-5 py-3 text-xs flex items-center gap-2"
                >
                  <span>📄 VER CV ATS</span>
                </Link>

                <a
                  href="https://wa.me/542613440973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#07080c] hover:bg-[#00f0ff] hover:text-[#07080c] border border-[#00f0ff]/50 text-[#00f0ff] font-bold px-4 py-3 transition-all flex items-center gap-2"
                >
                  <span>📱 WHATSAPP</span>
                </a>

                <button
                  onClick={() => copyToClipboard("Martinegs2012@gmail.com", "EMAIL")}
                  className="bg-[#07080c] hover:bg-[#fcee09] hover:text-[#07080c] border border-[#fcee09]/50 text-[#fcee09] font-bold px-4 py-3 transition-all flex items-center gap-2"
                  title="Copiar mail"
                >
                  <span>📋 COPIAR EMAIL</span>
                </button>
              </div>

              {/* Cyber Stats HUD */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#1e2436] font-mono text-xs text-gray-400">
                <div className="border-l-2 border-[#fcee09] pl-3">
                  <span className="block text-[#fcee09] font-bold text-sm">PHP & LARAVEL</span>
                  <span className="text-[10px] text-gray-400 uppercase">ESPECIALIDAD CORE</span>
                </div>
                <div className="border-l-2 border-[#00f0ff] pl-3">
                  <span className="block text-[#00f0ff] font-bold text-sm">MENDOZA, AR</span>
                  <span className="text-[10px] text-gray-400 uppercase">PRESENCIAL / REMOTO</span>
                </div>
                <div className="border-l-2 border-[#ff0055] pl-3">
                  <span className="block text-[#ff0055] font-bold text-sm">LIC. SISTEMAS</span>
                  <span className="text-[10px] text-gray-400 uppercase">UNIV. CHAMPAGNAT</span>
                </div>
              </div>
            </div>

            {/* Cyberpunk Developer Portrait & Interactive Live Cyberdeck Terminal */}
            <div className="md:col-span-5 space-y-6">
              
              {/* Cyberpunk Netrunner Profile Avatar */}
              <div className="relative group max-w-xs mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fcee09] via-[#00f0ff] to-[#ff0055] rounded-none opacity-75 blur group-hover:opacity-100 transition duration-500 animate-tilt" />
                <div className="relative cyber-panel cyber-cut-corner p-2 bg-[#07080c] border border-[#fcee09]">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src="/images/cyberpunk_avatar.jpg"
                      alt="Martin Gonzalez Cyberpunk Avatar"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-[#fcee09] text-[#07080c] px-3 py-1 font-mono text-[10px] font-black uppercase flex justify-between items-center mt-2">
                    <span>// NETRUNNER: MARTIN_GONZALEZ</span>
                    <span>LEVEL 77</span>
                  </div>
                </div>
              </div>

              {/* Interactive Live Cyberdeck API Terminal */}
              <div className="cyber-panel cyber-cut-corner p-4 border border-[#00f0ff]/40 bg-[#0d0e15]/95 font-mono text-xs shadow-[0_0_25px_rgba(0,240,255,0.15)] space-y-3">
                <div className="flex items-center justify-between border-b border-[#1e2436] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#ff0055]" />
                    <span className="w-2.5 h-2.5 bg-[#fcee09]" />
                    <span className="w-2.5 h-2.5 bg-[#00f0ff]" />
                    <span className="text-[11px] text-[#00f0ff] font-bold uppercase ml-1">CYBERDECK_API_CONSOLE</span>
                  </div>
                  <span className="text-[10px] text-[#fcee09] font-bold">[200 OK]</span>
                </div>

                {/* Endpoint Selector Tabs */}
                <div className="flex flex-wrap gap-1">
                  <button
                    onClick={() => setActiveEndpoint("profile")}
                    className={`px-2 py-1 text-[10px] font-bold tracking-wider uppercase transition border ${
                      activeEndpoint === "profile"
                        ? "bg-[#fcee09] text-[#07080c] border-[#fcee09]"
                        : "bg-[#07080c] border-[#1e2436] text-gray-400 hover:text-[#00f0ff]"
                    }`}
                  >
                    GET /profile
                  </button>
                  <button
                    onClick={() => setActiveEndpoint("stack")}
                    className={`px-2 py-1 text-[10px] font-bold tracking-wider uppercase transition border ${
                      activeEndpoint === "stack"
                        ? "bg-[#fcee09] text-[#07080c] border-[#fcee09]"
                        : "bg-[#07080c] border-[#1e2436] text-gray-400 hover:text-[#00f0ff]"
                    }`}
                  >
                    GET /stack
                  </button>
                  <button
                    onClick={() => setActiveEndpoint("availability")}
                    className={`px-2 py-1 text-[10px] font-bold tracking-wider uppercase transition border ${
                      activeEndpoint === "availability"
                        ? "bg-[#fcee09] text-[#07080c] border-[#fcee09]"
                        : "bg-[#07080c] border-[#1e2436] text-gray-400 hover:text-[#00f0ff]"
                    }`}
                  >
                    GET /status
                  </button>
                  <button
                    onClick={() => setActiveEndpoint("ping")}
                    className={`px-2 py-1 text-[10px] font-bold tracking-wider uppercase transition border ${
                      activeEndpoint === "ping"
                        ? "bg-[#00f0ff] text-[#07080c] border-[#00f0ff]"
                        : "bg-[#07080c] border-[#1e2436] text-gray-400 hover:text-[#00f0ff]"
                    }`}
                  >
                    POST /ping
                  </button>
                </div>

                {/* JSON Code Output */}
                <div className="bg-[#07080c] p-3 border border-[#1e2436] overflow-x-auto text-[10px] leading-relaxed max-h-44">
                  <pre className="text-[#00f0ff]">
                    {JSON.stringify(endpointResponses[activeEndpoint], null, 2)}
                  </pre>
                </div>

                <div className="flex items-center justify-between text-[9px] text-gray-400 pt-1 border-t border-[#1e2436]">
                  <span>💡 PROBAR INTERFAZ CYBERDECK</span>
                  <span className="text-[#fcee09]">LIVE TELEMETRY</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Experience & Career Section */}
      <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#00f0ff]/20 bg-[#090a0f]/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-100 font-mono tracking-wider uppercase">
              // EXPERIENCIA LABORAL & TRAYECTORIA
            </h2>
            <p className="text-[#00f0ff] text-xs font-mono max-w-xl mx-auto uppercase">
              DESARROLLOS EN PRODUCCIÓN // REFACTORIZACIÓN DE CÓDIGO // OPTIMIZACIÓN SQL
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Story Card */}
            <div className="cyber-panel cyber-cut-corner p-6 sm:p-8 border border-[#00f0ff]/30 bg-[#0d0e15]/90 space-y-4">
              <div className="flex items-center justify-between border-b border-[#1e2436] pb-3">
                <h3 className="text-base font-bold text-[#fcee09] font-mono tracking-wider uppercase">
                  // METODOLOGÍA & ARQUITECTURA
                </h3>
                <span className="cyber-tag-cyan">DEV_STACK</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                Escribo lógica backend limpia bajo arquitectura MVC, asegurando que las tablas relacionales MySQL y consultas a base de datos se ejecuten sin cuellos de botella.
              </p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                Actualmente me desempeño como Desarrollador Full Stack en <strong className="text-[#fcee09] font-mono">Necta</strong> (Mendoza) utilizando Laravel y jQuery, posterior a mi desempeño en <strong className="text-[#00f0ff] font-mono">DigitalTex</strong> construyendo módulos corporativos a medida en PHP 8 y CodeIgniter 4.
              </p>
              <div className="pt-3 border-t border-[#1e2436] flex flex-wrap gap-2 font-mono text-xs">
                <span className="bg-[#07080c] border border-[#00f0ff]/40 text-[#00f0ff] px-3 py-1">
                  📍 Mendoza, Argentina
                </span>
                <span className="bg-[#07080c] border border-[#fcee09]/40 text-[#fcee09] px-3 py-1">
                  🎓 Univ. Champagnat
                </span>
              </div>
            </div>

            {/* Timeline */}
            <div className="cyber-panel cyber-cut-corner p-6 sm:p-8 border border-[#00f0ff]/30 bg-[#0d0e15]/90 space-y-6">
              <div className="flex items-center justify-between border-b border-[#1e2436] pb-3">
                <h3 className="text-base font-bold text-[#fcee09] font-mono tracking-wider uppercase">
                  // HISTORIAL DE EMPLEO
                </h3>
                <span className="cyber-tag">JOBS_TIMELINE</span>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-2.5 before:w-0.5 before:bg-[#00f0ff]/40">
                {experiences.map((exp, index) => (
                  <div key={exp.id || index} className="relative pl-7">
                    <span className="absolute left-1 top-1.5 w-3 h-3 bg-[#fcee09] shadow-[0_0_8px_rgba(252,238,9,0.8)]" />
                    <h4 className="text-sm font-bold text-gray-100 font-mono tracking-wide">{exp.title}</h4>
                    <p className="text-[#00f0ff] text-xs font-mono font-bold mt-0.5">{exp.company} • {exp.period}</p>
                    <p className="text-gray-300 text-xs mt-1.5 leading-relaxed font-sans">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Cyberdeck Search */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#00f0ff]/20 bg-[#07080c]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-100 font-mono tracking-wider uppercase">
              // PROYECTOS DESTACADOS
            </h2>
            <p className="text-[#00f0ff] text-xs font-mono max-w-xl mx-auto uppercase">
              SISTEMAS WEB EN TIEMPO REAL // CRUDS AVANZADOS // APIS RESTFUL
            </p>

            {/* Cyber Search Bar */}
            <div className="max-w-xl mx-auto space-y-3 pt-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="🔎 BUSCAR CYBERWARE / STACK (Ej: Laravel, Vue, CodeIgniter, SSE)..."
                  className="w-full px-4 py-3 bg-[#0d0e15] border border-[#00f0ff]/40 text-xs text-[#00f0ff] font-mono placeholder-gray-500 outline-none focus:border-[#fcee09] transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-2.5 text-xs text-[#07080c] bg-[#fcee09] font-mono font-bold px-2 py-1"
                  >
                    RESET
                  </button>
                )}
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 font-mono text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 font-bold uppercase transition border ${
                      activeFilter === cat
                        ? "bg-[#fcee09] text-[#07080c] border-[#fcee09] shadow-[0_0_15px_rgba(252,238,9,0.5)]"
                        : "bg-[#0d0e15] border-[#1e2436] text-gray-300 hover:text-[#00f0ff]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id || index} {...project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 cyber-panel rounded-none p-8 max-w-md mx-auto font-mono text-xs text-[#fcee09]">
              // NO SE ENCONTRARON MÓDULOS DE SOFTWARE PARA ESTA BÚSQUEDA.
            </div>
          )}
        </div>
      </section>

      {/* Skills Cyberware Matrix */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#00f0ff]/20 bg-[#090a0f]/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-100 font-mono tracking-wider uppercase">
              // MATRIZ DE HABILIDADES TÉCNICAS
            </h2>
            <p className="text-[#00f0ff] text-xs font-mono max-w-xl mx-auto uppercase">
              BACKEND, FRONTEND, BASES DE DATOS Y ENTORNO DE DESARROLLO
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group, index) => (
              <div
                key={group.id || index}
                className="cyber-panel cyber-cut-corner p-6 border border-[#00f0ff]/30 bg-[#0d0e15]/90 hover:border-[#fcee09]/60 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-4 border-b border-[#1e2436] pb-2">
                  <span className="text-xl">{group.icon}</span>
                  <h3 className="text-xs font-bold text-[#fcee09] font-mono tracking-wider uppercase">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="bg-[#07080c] border border-[#00f0ff]/30 text-[#00f0ff] text-[11px] font-mono font-bold px-3 py-1 uppercase"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#07080c]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-100 font-mono tracking-wider uppercase">
              // CANAL DE COMUNICACIÓN
            </h2>
            <p className="text-[#00f0ff] text-xs font-mono max-w-xl mx-auto uppercase">
              CONSULTAS SOBRE PROYECTOS, OPORTUNIDADES O CONTRATACIÓN
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Info Cards */}
            <div className="md:col-span-2 space-y-4">
              
              <div className="cyber-panel p-5 border border-[#00f0ff]/30 bg-[#0d0e15]/90 font-mono">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#07080c] border border-[#00f0ff] text-[#00f0ff] text-base">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-[#fcee09] text-xs uppercase">// UBICACIÓN CORE</h3>
                    <p className="text-gray-300 text-xs mt-0.5">Mendoza, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="cyber-panel p-5 border border-[#00f0ff]/30 bg-[#0d0e15]/90 font-mono">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#07080c] border border-[#00f0ff] text-[#00f0ff] text-base">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-bold text-[#fcee09] text-xs uppercase">// CORREO DIRECTO</h3>
                      <a
                        href="mailto:Martinegs2012@gmail.com"
                        className="text-[#00f0ff] hover:underline text-xs block mt-0.5"
                      >
                        Martinegs2012@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard("Martinegs2012@gmail.com", "EMAIL")}
                    className="text-[#fcee09] p-2 bg-[#07080c] border border-[#fcee09] text-xs hover:bg-[#fcee09] hover:text-[#07080c] transition"
                    title="Copiar Mail"
                  >
                    📋
                  </button>
                </div>
              </div>

              <div className="cyber-panel p-5 border border-[#00f0ff]/30 bg-[#0d0e15]/90 font-mono">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#07080c] border border-[#00f0ff] text-[#00f0ff] text-base">
                      📱
                    </div>
                    <div>
                      <h3 className="font-bold text-[#fcee09] text-xs uppercase">// WHATSAPP DIRECTO</h3>
                      <a
                        href="https://wa.me/542613440973"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00f0ff] hover:underline text-xs block mt-0.5"
                      >
                        +54 2613440973
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard("+542613440973", "WHATSAPP")}
                    className="text-[#fcee09] p-2 bg-[#07080c] border border-[#fcee09] text-xs hover:bg-[#fcee09] hover:text-[#07080c] transition"
                    title="Copiar WhatsApp"
                  >
                    📋
                  </button>
                </div>
              </div>

            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
