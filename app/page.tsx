"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

  // Interactive Live API Sandbox Endpoint state
  const [activeEndpoint, setActiveEndpoint] = useState<"profile" | "stack" | "availability" | "ping">("profile");

  // Copy toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`✓ ${label} copiado al portapapeles`);
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

  // Interactive API endpoints content
  const endpointResponses = {
    profile: {
      dev: "Martin Gonzalez",
      role: "Desarrollador Backend PHP & Full Stack",
      location: "Mendoza, Argentina 🍇",
      education: "Lic. en Sistemas de Información (Univ. Champagnat)",
      experience: "Necta (Presencial) & Digitaltex (Remoto)",
      current_focus: "Laravel, CodeIgniter 4, Vue.js, MySQL & REST APIs"
    },
    stack: {
      backend: ["PHP 8.3", "Laravel 11", "CodeIgniter", "REST APIs", "MVC"],
      frontend: ["Vue 3", "HTMX", "JavaScript ES6+", "jQuery", "Tailwind CSS", "Bootstrap"],
      databases: ["MySQL", "PostgreSQL", "SQLite", "Eloquent ORM"],
      tools: ["Git/GitHub", "Docker", "Postman", "Vite", "Linux"]
    },
    availability: {
      status: "Disponible",
      modalities: ["Presencial (Mendoza)", "Híbrido", "Remoto"],
      preferred_roles: ["Backend PHP Developer", "Laravel Developer", "Full Stack Developer"],
      response_time: "< 24 horas"
    },
    ping: {
      status: 200,
      message: "pong! Conexión backend activa e interactiva 🔥",
      timestamp: new Date().toISOString()
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-cyan-500 selection:text-slate-950 font-sans relative">
      <Header />

      {/* Copy Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-cyan-400 text-cyan-300 font-mono text-xs px-5 py-3 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          {toastMessage}
        </div>
      )}

      {/* Hero Section */}
      <section id="inicio" className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            
            {/* Main Personal Intro */}
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-mono text-emerald-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Disponible para nuevos desafíos en Mendoza / Remoto</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-gray-100 tracking-tight font-sans">
                Hola, soy <span className="human-gradient-text">Martin Gonzalez</span> 👋
              </h1>

              <h2 className="text-lg sm:text-xl font-mono text-cyan-400 font-semibold tracking-tight">
                Desarrollador Backend PHP (Laravel & CodeIgniter) • Full Stack
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans max-w-2xl">
                Me apasiona construir aplicaciones web rápidas, estructuradas y fáciles de mantener. Me especializo en lógica backend pesada con <strong className="text-cyan-300 font-semibold">PHP, Laravel, CodeIgniter y MySQL</strong>, integrando vistas dinámicas y fluidas con <strong className="text-indigo-300 font-semibold">Vue.js, HTMX, Tailwind y Bootstrap</strong>.
              </p>

              {/* Action Buttons & Quick Copy Shortcuts */}
              <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
                <a
                  href="#proyectos"
                  className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all uppercase tracking-wider flex items-center gap-2"
                >
                  <span>Explorar Proyectos</span>
                  <span>➔</span>
                </a>

                <Link
                  href="/cv"
                  className="bg-purple-950/80 hover:bg-purple-900 border border-purple-500/50 text-purple-300 font-semibold px-5 py-3 rounded-xl transition-all flex items-center gap-2"
                >
                  <span>📄 Ver / Descargar CV ATS</span>
                </Link>

                <a
                  href="https://wa.me/542613440973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-300 font-semibold px-5 py-3 rounded-xl transition-all flex items-center gap-2"
                >
                  <span>📱 WhatsApp</span>
                </a>

                <button
                  onClick={() => copyToClipboard("Martinegs2012@gmail.com", "Email")}
                  className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-gray-300 font-semibold px-4 py-3 rounded-xl transition-all flex items-center gap-2"
                  title="Copiar email al portapapeles"
                >
                  <span>📋 Copiar Mail</span>
                </button>
              </div>


              {/* Personal Quick Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5 font-mono text-xs text-gray-400">
                <div>
                  <span className="block text-cyan-400 font-bold text-sm sm:text-base">PHP & Laravel</span>
                  <span className="text-[11px] text-slate-400">Especialidad Principal</span>
                </div>
                <div>
                  <span className="block text-emerald-400 font-bold text-sm sm:text-base">Mendoza, AR</span>
                  <span className="text-[11px] text-slate-400">Presencial / Remoto</span>
                </div>
                <div>
                  <span className="block text-purple-400 font-bold text-sm sm:text-base">Lic. Sistemas</span>
                  <span className="text-[11px] text-slate-400">Univ. Champagnat</span>
                </div>
              </div>
            </div>

            {/* Interactive Live API Console Sandbox */}
            <div className="md:col-span-5">
              <div className="glass-panel rounded-3xl p-5 border border-white/10 bg-slate-950/90 font-mono text-xs shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-[11px] text-slate-400 font-bold ml-1">Live Backend API Sandbox</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-bold">[HTTP/2 200 OK]</span>
                </div>

                {/* Endpoint Tabs */}
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setActiveEndpoint("profile")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition border ${
                      activeEndpoint === "profile"
                        ? "bg-cyan-950 border-cyan-500 text-cyan-300"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    GET /profile
                  </button>
                  <button
                    onClick={() => setActiveEndpoint("stack")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition border ${
                      activeEndpoint === "stack"
                        ? "bg-cyan-950 border-cyan-500 text-cyan-300"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    GET /stack
                  </button>
                  <button
                    onClick={() => setActiveEndpoint("availability")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition border ${
                      activeEndpoint === "availability"
                        ? "bg-cyan-950 border-cyan-500 text-cyan-300"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    GET /status
                  </button>
                  <button
                    onClick={() => setActiveEndpoint("ping")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition border ${
                      activeEndpoint === "ping"
                        ? "bg-emerald-950 border-emerald-500 text-emerald-300"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    POST /ping
                  </button>
                </div>

                {/* Code JSON Response Output */}
                <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800/80 overflow-x-auto text-[11px] leading-relaxed">
                  <pre className="text-cyan-300">
                    {JSON.stringify(endpointResponses[activeEndpoint], null, 2)}
                  </pre>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                  <span>💡 Hacé clic en los botones para probar la API</span>
                  <span className="text-cyan-400">JSON Ready</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience & Timeline Section */}
      <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-slate-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-100 font-sans tracking-tight">
              Experiencia Laboral & Trayectoria
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-sans">
              Proyectos reales en producción, optimización de sistemas y formación universitaria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Story Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-slate-950/70 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <span className="text-2xl">💻</span>
                <h3 className="text-lg font-bold text-gray-100 font-sans">Cómo trabajo</h3>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                Me enfoco en escribir código mantenible, estructurar modelos de datos limpios en MySQL y asegurar que las aplicaciones no solo funcionen, sino que escalen adecuadamente con el uso real.
              </p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                Actualmente trabajo como desarrollador Full Stack en <strong className="text-cyan-300 font-semibold">Necta</strong> (Mendoza) con Laravel y jQuery, tras mi paso por <strong className="text-cyan-300 font-semibold">DigitalTex</strong> desarrollando sistemas web con PHP y CodeIgniter 4.
              </p>
              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2 font-mono text-xs">
                <span className="bg-slate-900 border border-slate-800 text-cyan-300 px-3 py-1 rounded-xl">
                  📍 Mendoza, Argentina
                </span>
                <span className="bg-slate-900 border border-slate-800 text-cyan-300 px-3 py-1 rounded-xl">
                  🎓 Univ. Champagnat
                </span>
              </div>
            </div>

            {/* Timeline */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-slate-950/70 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <span className="text-2xl">🚀</span>
                <h3 className="text-lg font-bold text-gray-100 font-sans">Experiencia Destacada</h3>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-2.5 before:w-0.5 before:bg-slate-800">
                {experiences.map((exp, index) => (
                  <div key={exp.id || index} className="relative pl-7">
                    <span className="absolute left-1 top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-slate-950" />
                    <h4 className="text-sm font-bold text-gray-100 font-sans">{exp.title}</h4>
                    <p className="text-cyan-400 text-xs font-mono font-medium">{exp.company} • {exp.period}</p>
                    <p className="text-slate-300 text-xs mt-1 leading-relaxed font-sans">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Search & Filter */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#030712]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-100 font-sans tracking-tight">
              Proyectos Destacados
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-sans">
              Sistemas web full-stack y desarrollos backend construidos con PHP, Laravel, CodeIgniter y Vue.js.
            </p>

            {/* Live Search Bar & Filter Chips */}
            <div className="max-w-xl mx-auto space-y-3 pt-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="🔎 Buscar por tecnología o nombre (ej: Laravel, Vue, CodeIgniter, SSE)..."
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-2xl text-xs text-gray-100 placeholder-slate-500 outline-none focus:border-cyan-500 transition shadow-inner font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded-lg"
                  >
                    Limpiar
                  </button>
                )}
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 font-mono text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 rounded-xl font-bold transition border ${
                      activeFilter === cat
                        ? "bg-cyan-600 border-cyan-400 text-slate-950 shadow-lg"
                        : "bg-slate-900 border-slate-800 text-gray-300 hover:text-cyan-400"
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
            <div className="text-center py-12 glass-panel rounded-3xl p-8 max-w-md mx-auto font-mono text-xs text-slate-400">
              No se encontraron proyectos con el filtro o búsqueda actual.
            </div>
          )}
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-slate-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-100 font-sans tracking-tight">
              Stack de Tecnologías
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-sans">
              Herramientas que utilizo día a día para crear aplicaciones web sólidas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group, index) => (
              <div
                key={group.id || index}
                className="glass-panel p-6 rounded-3xl border border-white/10 bg-slate-950/70 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-4 border-b border-slate-800 pb-2">
                  <span className="text-xl">{group.icon}</span>
                  <h3 className="text-sm font-bold text-cyan-400 font-mono tracking-tight">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="bg-slate-900 border border-slate-800 text-gray-200 text-xs font-mono px-3 py-1.5 rounded-xl hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
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
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#030712]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-100 font-sans tracking-tight">
              Hablemos
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-sans">
              ¿Tenés alguna consulta o querés conversar sobre una oportunidad laboral? Escribime directamente.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Info Cards */}
            <div className="md:col-span-2 space-y-4">
              <div className="glass-panel p-5 rounded-2xl border border-white/10 bg-slate-950/70 font-sans">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-slate-900 border border-slate-800 text-cyan-400 rounded-xl text-lg">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-200 text-xs font-mono uppercase">Ubicación</h3>
                    <p className="text-slate-300 text-xs mt-0.5">Mendoza, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/10 bg-slate-950/70 font-sans">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-900 border border-slate-800 text-cyan-400 rounded-xl text-lg">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-200 text-xs font-mono uppercase">Correo Electrónico</h3>
                      <a
                        href="mailto:Martinegs2012@gmail.com"
                        className="text-cyan-400 hover:underline text-xs block mt-0.5"
                      >
                        Martinegs2012@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard("Martinegs2012@gmail.com", "Email")}
                    className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs"
                    title="Copiar Mail"
                  >
                    📋
                  </button>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/10 bg-slate-950/70 font-sans">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-900 border border-slate-800 text-emerald-400 rounded-xl text-lg">
                      📱
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-200 text-xs font-mono uppercase">WhatsApp</h3>
                      <a
                        href="https://wa.me/542613440973"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline text-xs block mt-0.5"
                      >
                        +54 2613440973
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard("+542613440973", "WhatsApp")}
                    className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs"
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






