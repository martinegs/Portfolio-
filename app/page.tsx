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
      description: "Aplicación web full-stack para gestión y monitoreo de órdenes de servicio con sincronización en tiempo real vía SSE, CRUD completo, métricas financieras diarias, análisis de recaudación y dashboard interactivo. Incluye autenticación y filtros avanzados.",
      technologies: ["PHP", "Laravel", "Vue 3", "MySQL", "SSE", "JWT", "Vite"],
      category: "Full-Stack",
      image: "/projects/ordenestiemporeal.png",
      githubUrl: "https://github.com/martinegs/os-live-vue"
    },
    {
      title: "Sistema de Gestión de Tareas Pendientes",
      description: "Aplicación web full-stack para gestión de tareas con CRUD completo, filtros avanzados, búsqueda en tiempo real y dashboard con estadísticas. Interfaz moderna y responsiva con validación robusta.",
      technologies: ["Laravel", "PHP 8.1+", "Bootstrap 5", "SQLite", "Blade"],
      category: "Full-Stack",
      image: "/projects/tareas.png",
      githubUrl: "https://github.com/martinegs/notasLaravel",
      caseStudyUrl: "/proyectos/tareas-pendientes"
    },
    {
      title: "Red Social tipo Twitter",
      description: "Red social web tipo Twitter desarrollada en Laravel que permite a los usuarios registrarse, publicar mensajes, seguir a otros, dar 'me gusta' y gestionar su perfil. Incluye autenticación, timeline personalizado y subida de imágenes.",
      technologies: ["Laravel", "Blade", "Eloquent ORM", "SQLite", "Tailwind CSS", "Vite"],
      category: "Full-Stack",
      image: "/projects/redSocial.png",
      githubUrl: "https://github.com/martinegs/redSocial"
    },
    {
      title: "Supermercado Online (eCommerce)",
      description: "Sistema completo de eCommerce para supermercado con catálogo de productos, carrito de compras y gestión de pedidos. Incluye 44 productos reales con precios actualizados.",
      technologies: ["Laravel", "PHP", "SQLite", "Bootstrap", "Blade"],
      category: "Backend",
      image: "/projects/supermercado.png",
      githubUrl: "https://github.com/martinegs/ecommerceLaravel"
    },
    {
      title: "Actualización y Mejora de ERP Corporativo",
      description: "Proyecto freelance en equipo: actualización y optimización de un sistema ERP corporativo existente, incorporando nuevas funcionalidades, refactorización de lógica backend y mejoras en la interfaz de usuario.",
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

  const skillGroups = [
    {
      category: "Backend",
      icon: "⚙️",
      items: ["PHP 8+", "Laravel", "CodeIgniter", "APIs REST", "Arquitectura MVC"]
    },
    {
      category: "Frontend",
      icon: "🎨",
      items: ["Vue.js", "HTMX", "JavaScript (ES6+)", "jQuery", "Tailwind CSS", "Bootstrap", "HTML5 & CSS3"]
    },
    {
      category: "Bases de Datos",
      icon: "🗄️",
      items: ["MySQL", "PostgreSQL", "SQLite"]
    },
    {
      category: "Herramientas & Entorno",
      icon: "🛠️",
      items: ["Git & GitHub", "Docker", "Postman", "Vite", "Linux"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#090d16] text-gray-100 selection:bg-purple-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glow Spheres Background */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Status Pills */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-purple-300 mb-8 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <span>Desarrollador Backend PHP | Laravel & CodeIgniter | Full Stack (Vue.js)</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Hola, soy <span className="glow-text">Martin Gonzalez</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Desarrollador enfocado en backend con <strong className="text-purple-400 font-semibold">PHP (Laravel & CodeIgniter)</strong>, construyendo lógica limpia y eficiente e interfaces funcionales con <strong className="text-emerald-400 font-semibold">Vue.js, Tailwind y Bootstrap</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <a
              href="#proyectos"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-8 py-3.5 rounded-2xl shadow-xl hover:shadow-purple-500/25 transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <span>Explorar Proyectos</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a
              href="https://wa.me/542613440973"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <span>Contactar por WhatsApp</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
            </a>

            <a
              href="#contacto"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 text-center"
            >
              Enviar Mensaje
            </a>
          </div>

          {/* Social Badges */}
          <div className="flex gap-4 justify-center items-center">
            <a
              href="https://github.com/martinegs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/50 rounded-xl text-gray-300 hover:text-white transition-all shadow-md"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/martin-gonzalez7/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/50 rounded-xl text-gray-300 hover:text-white transition-all shadow-md"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:Martinegs2012@gmail.com"
              className="p-3 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/50 rounded-xl text-gray-300 hover:text-white transition-all shadow-md"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About & Timeline Section */}
      <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Sobre Mí & Experiencia
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Soy un desarrollador enfocado en resolver problemas. Me gusta que el código sea prolijo y la lógica de fondo eficiente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Story Card */}
            <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">👨‍💻</span>
                <h3 className="text-xl font-bold text-white">Mi Filosofía de Trabajo</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Hace un tiempo que estoy metido de lleno en el desarrollo web. No me quedo solo con que las cosas "funcionen", sino que me enfoco en que el código sea mantenible y la lógica backend altamente eficiente.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Actualmente estudio la <strong className="text-purple-300">Licenciatura en Sistemas</strong> y trabajo en el día a día con <strong className="text-purple-300">Laravel y CodeIgniter</strong>, que es donde más cómodo me siento. En DigitalTex y Necta me encargo de que los sistemas no solo aguanten el uso, sino que mejoren constantemente.
              </p>
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <span className="text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-full font-medium">
                  📍 Mendoza, Argentina
                </span>
                <span className="text-xs bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-full font-medium">
                  🎓 Lic. en Sistemas (Universidad Champagnat)
                </span>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">💼</span>
                <h3 className="text-xl font-bold text-white">Experiencia Laboral</h3>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/10">
                {/* Necta */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-950" />
                  <h4 className="text-base font-semibold text-white">Desarrollador Full Stack</h4>
                  <p className="text-emerald-400 text-xs font-medium">Necta • Enero 2026 - Presente</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Jornada completa • Presencial (Mendoza, Argentina). Liderazgo de delivery crítico, lógica backend con Laravel, refactorizaciones y mejora continua.
                  </p>
                </div>

                {/* Digitaltex */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-purple-950" />
                  <h4 className="text-base font-semibold text-white">Desarrollador Full Stack</h4>
                  <p className="text-purple-400 text-xs font-medium">DigitalTex • Octubre 2024 - Diciembre 2025</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    1 año 3 meses • Remoto. Desarrollo y mantenimiento de sistema web a medida utilizando PHP y CodeIgniter para optimizar la gestión de procesos internos, inventario y experiencia del cliente (MySQL, Vue.js).
                  </p>
                </div>

                {/* P&L Corp */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-950" />
                  <h4 className="text-base font-semibold text-white">Digitalizador</h4>
                  <p className="text-blue-400 text-xs font-medium">P&L CORP. • Noviembre 2024 - Enero 2025</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Digitalización de documentos corporativos, escáners y Adobe Acrobat.
                  </p>
                </div>

                {/* Educación */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-950" />
                  <h4 className="text-base font-semibold text-white">Licenciatura en Sistemas de Información</h4>
                  <p className="text-indigo-400 text-xs font-medium">Universidad Champagnat • Mar 2021 - Presente</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Computer Software and Media Applications, estructuras de datos, arquitectura de sistemas y control de versiones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Aptitudes & Tecnologías
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillGroups.map((group, index) => (
                <div
                  key={index}
                  className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-xl">{group.icon}</span>
                    <h4 className="text-base font-bold text-white">{group.category}</h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-lg hover:text-white hover:bg-purple-600/20 hover:border-purple-500/40 transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Una selección de proyectos backend y full-stack construidos con Laravel, CodeIgniter y PHP.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeFilter === cat
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                      : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Contacto & Colaboración
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-base">
              ¿Buscás a alguien que se ponga la camiseta del proyecto y resuelva? ¡Charlemos!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            {/* Info Cards */}
            <div className="md:col-span-2 space-y-4">
              <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl border border-purple-500/30">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Ubicación</h4>
                    <p className="text-gray-300 text-xs mt-0.5">Mendoza, Argentina</p>
                    <p className="text-xs text-purple-400 mt-1">Presencial / Remoto</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl border border-purple-500/30">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Correo Directo</h4>
                    <a
                      href="mailto:Martinegs2012@gmail.com"
                      className="text-gray-300 hover:text-purple-400 text-xs transition-colors block mt-0.5"
                    >
                      Martinegs2012@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-xl border border-emerald-500/30">
                    📱
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">WhatsApp / Teléfono</h4>
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


