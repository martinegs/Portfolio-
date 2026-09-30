"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const projects = [
    {
      title: "Sistema de Monitoreo de Órdenes en Tiempo Real",
      description: "Aplicación web full-stack para gestión y monitoreo de órdenes de servicio con sincronización en tiempo real vía Server-Sent Events (SSE), CRUD completo, métricas financieras diarias y dashboard interactivo. Autenticación con migración automática y filtros de pago.",
      technologies: ["PHP", "Laravel", "Vue 3", "MySQL", "SSE", "Vite"],
      category: "Full-Stack",
      image: "/projects/ordenestiemporeal.png",
      githubUrl: "https://github.com/martinegs/os-live-vue"
    },
    {
      title: "Sistema de Gestión de Tareas Pendientes",
      description: "Aplicación web full-stack para gestión de tareas con CRUD completo, filtros avanzados, búsqueda en tiempo real e indicadores estadísticos. Interfaz responsiva desarrollada en Laravel 10/11 con Bootstrap 5.",
      technologies: ["Laravel", "PHP 8.1+", "Bootstrap 5", "SQLite", "Blade"],
      category: "Full-Stack",
      image: "/projects/tareas.png",
      githubUrl: "https://github.com/martinegs/notasLaravel",
      caseStudyUrl: "/proyectos/tareas-pendientes"
    },
    {
      title: "Plataforma de Red Social & Timeline",
      description: "Red social web inspirada en Twitter desarrollada en Laravel que permite autenticación de usuarios, publicaciones en tiempo real, sistema de seguidores, likes y gestión de perfil personalizado.",
      technologies: ["Laravel", "Blade", "Eloquent ORM", "SQLite", "Tailwind CSS", "Vite"],
      category: "Full-Stack",
      image: "/projects/redSocial.png",
      githubUrl: "https://github.com/martinegs/redSocial"
    },
    {
      title: "Plataforma eCommerce para Supermercado",
      description: "Sistema completo de eCommerce para supermercado con catálogo de productos, gestión de carrito de compras en sesión y procesamiento de pedidos. Incluye productos reales con catálogo en ARS.",
      technologies: ["Laravel", "PHP", "SQLite", "Bootstrap", "Blade"],
      category: "Backend",
      image: "/projects/supermercado.png",
      githubUrl: "https://github.com/martinegs/ecommerceLaravel"
    },
    {
      title: "Optimización & Refactorización de ERP Corporativo",
      description: "Desarrollo freelance en equipo: actualización y optimización de un sistema ERP corporativo existente, incorporando nuevas funcionalidades, refactorización de lógica backend y mejor experiencia de usuario.",
      technologies: ["PHP", "jQuery", "Bootstrap", "MySQL"],
      category: "Backend",
      image: "/projects/dashboard-erp.png",
      hideGithub: true
    }
  ];

  const categories = ["Todos", "Full-Stack", "Backend"];

  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeFilter || p.technologies.includes(activeFilter));

  const skillTree = [
    {
      category: "Backend Development",
      icon: "⚡",
      items: ["PHP 8+", "Laravel", "CodeIgniter", "APIs RESTful", "Arquitectura MVC"]
    },
    {
      category: "Frontend & UI",
      icon: "🎨",
      items: ["Vue.js", "HTMX", "JavaScript (ES6+)", "jQuery", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Bases de Datos",
      icon: "🗄️",
      items: ["MySQL", "PostgreSQL", "SQLite", "Eloquent ORM"]
    },
    {
      category: "Herramientas & Entorno",
      icon: "🛠️",
      items: ["Git & GitHub", "Docker", "Postman", "Vite", "Linux"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-cyan-500 selection:text-slate-950 font-sans relative">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Main Text Content */}
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-cyan-500/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>[ STATUS: DISPONIBLE PARA NUEVOS PROYECTOS ]</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-gray-100 tracking-tight uppercase font-mono">
                MARTIN <span className="cyber-gradient-text">GONZALEZ</span>
              </h1>

              <h2 className="text-lg sm:text-xl font-mono text-cyan-400/90 tracking-wide font-semibold">
                Desarrollador Backend PHP | Laravel & CodeIgniter | Full Stack (Vue.js)
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans max-w-2xl">
                Desarrollador enfocado en construir sistemas web eficientes, escalables y bien estructurados. Especializado en lógica backend con <strong className="text-cyan-300 font-semibold">PHP (Laravel, CodeIgniter)</strong>, integración de APIs REST, optimización de bases de datos e interfaces dinámicas con <strong className="text-cyan-300 font-semibold">Vue.js, HTMX, Tailwind y Bootstrap</strong>.
              </p>

              <div className="flex flex-wrap gap-3 pt-2 font-mono">
                <a
                  href="#proyectos"
                  className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs px-6 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all uppercase tracking-wider flex items-center gap-2"
                >
                  <span>VER PROYECTOS</span>
                  <span>➔</span>
                </a>

                <a
                  href="https://wa.me/542613440973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-semibold text-xs px-6 py-3 rounded-lg transition-all flex items-center gap-2"
                >
                  <span>WHATSAPP</span>
                </a>

                <a
                  href="#contacto"
                  className="bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-gray-300 font-semibold text-xs px-6 py-3 rounded-lg transition-all"
                >
                  CONTACTAR
                </a>
              </div>
            </div>

            {/* Futuristic Terminal Widget */}
            <div className="md:col-span-5">
              <div className="cyber-panel rounded-2xl p-5 border border-cyan-500/30 bg-slate-950/90 font-mono text-xs shadow-2xl space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] text-slate-500">developer@martin-pc:~</span>
                </div>

                <div className="space-y-2 text-slate-300">
                  <p><span className="text-cyan-400">$</span> php --version</p>
                  <p className="text-emerald-400 font-semibold">PHP 8.3.4 (cli) (built: CLI Engine)</p>

                  <p><span className="text-cyan-400">$</span> cat profile.json</p>
                  <pre className="text-slate-400 bg-slate-900/80 p-3 rounded-lg border border-slate-800 overflow-x-auto text-[11px] leading-tight">
{`{
  "name": "Martin Gonzalez",
  "role": "Backend & Full Stack Developer",
  "location": "Mendoza, Argentina",
  "education": "Lic. en Sistemas (Univ. Champagnat)",
  "stack": ["PHP", "Laravel", "CodeIgniter", "Vue.js", "MySQL"]
}`}
                  </pre>

                  <div className="flex items-center gap-2 pt-1 text-[11px] text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Backend Ready • Database Tuned</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience & Timeline Section */}
      <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-slate-950/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 font-mono uppercase tracking-wider mb-2">
              // EXPERIENCIA LABORAL & EDUCACIÓN
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-sans">
              Trayectoria profesional en desarrollo full-stack, optimización de código backend y formación académica en sistemas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Story Card */}
            <div className="cyber-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 bg-slate-950/80 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <span className="text-xl text-cyan-400 font-mono font-bold">&lt;/&gt;</span>
                <h3 className="text-base font-bold text-gray-100 font-mono uppercase">Perfil Técnico</h3>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                Apasionado por la ingeniería de software y el desarrollo backend eficiente. Mi enfoque está centrado en escribir código mantenible, estructurar modelos de datos óptimos y asegurar que cada aplicación funcione de forma fluida.
              </p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                Actualmente curso la <strong className="text-cyan-300 font-medium">Licenciatura en Sistemas de Información</strong> en la Universidad Champagnat y me desempeño como desarrollador Full Stack en Necta, trabajando con <strong className="text-cyan-300 font-medium">Laravel, CodeIgniter, Vue.js y MySQL</strong>.
              </p>
              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2 font-mono text-xs">
                <span className="bg-slate-900 border border-slate-800 text-cyan-400 px-3 py-1 rounded">
                  📍 Mendoza, Argentina
                </span>
                <span className="bg-slate-900 border border-slate-800 text-cyan-400 px-3 py-1 rounded">
                  🎓 Univ. Champagnat
                </span>
              </div>
            </div>

            {/* Timeline */}
            <div className="cyber-panel p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <span className="text-xl text-cyan-400 font-mono font-bold">#</span>
                <h3 className="text-base font-bold text-gray-100 font-mono uppercase">Historial Profesional</h3>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-2.5 before:w-0.5 before:bg-slate-800">
                {/* Necta */}
                <div className="relative pl-7">
                  <span className="absolute left-1 top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-slate-950" />
                  <h4 className="text-sm font-bold text-gray-100 font-mono">Desarrollador Full Stack</h4>
                  <p className="text-cyan-400 text-xs font-mono">Necta • Ene 2026 - Presente</p>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed font-sans">
                    Jornada completa • Presencial (Mendoza). Desarrollo de lógica backend con Laravel, refactorizaciones con jQuery, gestión y optimización de bases de datos MySQL.
                  </p>
                </div>

                {/* Digitaltex */}
                <div className="relative pl-7">
                  <span className="absolute left-1 top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-slate-950" />
                  <h4 className="text-sm font-bold text-gray-100 font-mono">Desarrollador Full Stack</h4>
                  <p className="text-indigo-400 text-xs font-mono">DigitalTex • Oct 2024 - Dic 2025 (1 año 3 meses)</p>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed font-sans">
                    Remoto. Desarrollo y mantenimiento de sistema web a medida utilizando PHP y CodeIgniter para optimizar procesos internos, inventario y experiencia del usuario (MySQL, Vue.js).
                  </p>
                </div>

                {/* P&L Corp */}
                <div className="relative pl-7">
                  <span className="absolute left-1 top-1.5 w-3 h-3 rounded-full bg-slate-600 ring-4 ring-slate-950" />
                  <h4 className="text-sm font-bold text-gray-100 font-mono">Digitalizador</h4>
                  <p className="text-slate-400 text-xs font-mono">P&L CORP. • Nov 2024 - Ene 2025</p>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed font-sans">
                    Digitalización y organización de documentación corporativa.
                  </p>
                </div>

                {/* Educación */}
                <div className="relative pl-7">
                  <span className="absolute left-1 top-1.5 w-3 h-3 rounded-full bg-cyan-600 ring-4 ring-slate-950" />
                  <h4 className="text-sm font-bold text-gray-100 font-mono">Licenciatura en Sistemas de Información</h4>
                  <p className="text-cyan-400 text-xs font-mono">Universidad Champagnat • Mar 2021 - Presente</p>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed font-sans">
                    Formación de grado en arquitectura de software, bases de datos, redes y algoritmos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-[#030712]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 font-mono uppercase tracking-wider mb-2">
              // HABILIDADES TÉCNICAS & TECNOLOGÍAS
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-sans">
              Herramientas y tecnologías utilizadas en proyectos reales y desarrollos profesionales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillTree.map((group, index) => (
              <div
                key={index}
                className="cyber-panel p-5 rounded-xl border border-slate-800 bg-slate-950/80 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                  <span className="text-lg">{group.icon}</span>
                  <h3 className="text-xs font-bold text-cyan-400 font-mono uppercase">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="bg-slate-900 border border-slate-800 text-gray-300 text-xs font-mono px-2.5 py-1 rounded hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
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

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 font-mono uppercase tracking-wider mb-2">
              // PORTFOLIO DE PROYECTOS
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-sans">
              Proyectos web destacados desarrollados con PHP, Laravel, CodeIgniter, Vue.js y MySQL.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-6 font-mono text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-lg font-bold uppercase transition-all border ${
                    activeFilter === cat
                      ? "bg-cyan-600 border-cyan-400 text-slate-950 shadow-lg"
                      : "bg-slate-900 border-slate-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#030712]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 font-mono uppercase tracking-wider mb-2">
              // INFORMACIÓN DE CONTACTO
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-sans">
              ¿Tenés alguna consulta o querés conversar sobre una oportunidad laboral? ¡Escribime!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Info Cards */}
            <div className="md:col-span-2 space-y-4">
              <div className="cyber-panel p-5 rounded-xl border border-slate-800 bg-slate-950/80 font-mono">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 text-cyan-400 rounded-lg text-base">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-200 text-xs uppercase">Ubicación</h3>
                    <p className="text-slate-400 text-xs mt-0.5">Mendoza, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="cyber-panel p-5 rounded-xl border border-slate-800 bg-slate-950/80 font-mono">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 text-cyan-400 rounded-lg text-base">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-200 text-xs uppercase">Correo Electrónico</h3>
                    <a
                      href="mailto:Martinegs2012@gmail.com"
                      className="text-cyan-400 hover:underline text-xs block mt-0.5"
                    >
                      Martinegs2012@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="cyber-panel p-5 rounded-xl border border-slate-800 bg-slate-950/80 font-mono">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 text-emerald-400 rounded-lg text-base">
                    📱
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-200 text-xs uppercase">WhatsApp</h3>
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




