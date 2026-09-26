"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [activeTaunt, setActiveTaunt] = useState<string | null>(null);

  const taunts = [
    { code: "11", label: "Risas (11)", message: "¡Jajaja! Un bug menos en producción." },
    { code: "30", label: "Wololo! (30)", message: "¡Wololo! Tu código spaghetti ahora es Laravel prolijo." },
    { code: "14", label: "Empiecen ya! (14)", message: "¡A construir el backend sin demora!" },
    { code: "1", font: "bold", label: "Sí (1)", message: "¡Entendido, mi lord!" },
  ];

  const handleTaunt = (msg: string) => {
    setActiveTaunt(msg);
    setTimeout(() => setActiveTaunt(null), 3500);
  };

  const projects = [
    {
      title: "Castillo de Monitoreo de Órdenes en Tiempo Real",
      description: "Aplicación web full-stack para gestión y monitoreo de órdenes de servicio con sincronización en tiempo real vía SSE, CRUD completo, métricas financieras diarias y dashboard interactivo. Autenticación con migración automática y filtros de pago.",
      technologies: ["PHP", "Laravel", "Vue 3", "MySQL", "SSE", "Vite"],
      category: "Full-Stack",
      image: "/projects/ordenestiemporeal.png",
      githubUrl: "https://github.com/martinegs/os-live-vue"
    },
    {
      title: "Gremio de Gestión de Tareas Pendientes",
      description: "Aplicación web full-stack para gestión de tareas con CRUD completo, filtros avanzados, búsqueda en tiempo real e indicadores estadísticos. Interfaz responsiva desarrollada en Laravel 10/11 con Bootstrap 5.",
      technologies: ["Laravel", "PHP 8.1+", "Bootstrap 5", "SQLite", "Blade"],
      category: "Full-Stack",
      image: "/projects/tareas.png",
      githubUrl: "https://github.com/martinegs/notasLaravel",
      caseStudyUrl: "/proyectos/tareas-pendientes"
    },
    {
      title: "Taberna & Red Social tipo Twitter",
      description: "Red social web tipo Twitter desarrollada en Laravel que permite a los usuarios registrarse, publicar mensajes, seguir a otros, dar 'me gusta' y gestionar su perfil con timeline personalizado.",
      technologies: ["Laravel", "Blade", "Eloquent ORM", "SQLite", "Tailwind CSS", "Vite"],
      category: "Full-Stack",
      image: "/projects/redSocial.png",
      githubUrl: "https://github.com/martinegs/redSocial"
    },
    {
      title: "Maravilla de eCommerce Supermercado",
      description: "Sistema completo de eCommerce para supermercado con catálogo de productos, carrito de compras y gestión de pedidos. Incluye 44 productos reales con precios en ARS.",
      technologies: ["Laravel", "PHP", "SQLite", "Bootstrap", "Blade"],
      category: "Backend",
      image: "/projects/supermercado.png",
      githubUrl: "https://github.com/martinegs/ecommerceLaravel"
    },
    {
      title: "Fortificación y Mejora de ERP Corporativo",
      description: "Proyecto freelance en equipo: actualización y optimización de un sistema ERP corporativo existente, incorporando nuevas funcionalidades, refactorización de lógica backend y mejor experiencia de usuario.",
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
      category: "Backend (Forja Principal)",
      icon: "🌾",
      items: ["PHP 8+", "Laravel", "CodeIgniter", "APIs REST", "Arquitectura MVC"]
    },
    {
      category: "Frontend (Guarnición)",
      icon: "🪨",
      items: ["Vue.js", "HTMX", "JavaScript (ES6+)", "jQuery", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Bases de Datos (Tesorería)",
      icon: "🪙",
      items: ["MySQL", "PostgreSQL", "SQLite"]
    },
    {
      category: "Herramientas de Asedio",
      icon: "🪵",
      items: ["Git & GitHub", "Docker", "Postman", "Vite", "Linux"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0c0a09] text-amber-100 selection:bg-amber-600 selection:text-amber-950 font-sans relative">
      <Header />

      {/* Taunt Audio Notification Banner */}
      {activeTaunt && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1c1917] border-2 border-amber-500 text-amber-200 px-5 py-3 rounded-xl shadow-[0_0_25px_rgba(245,158,11,0.5)] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 font-serif">
          <span className="text-xl">🔔</span>
          <div>
            <span className="block font-bold text-xs text-amber-400 uppercase tracking-widest">Taunt Age of Empires II</span>
            <span className="text-sm font-semibold">{activeTaunt}</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="inicio" className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 border-b-2 border-amber-800/60 overflow-hidden">
        {/* AoE2 Hero Image Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/projects/aoe2_banner.jpg"
            alt="Age of Empires II Banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/80 to-[#0c0a09]/40" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Age Advancement Crest */}
          <div className="inline-flex items-center gap-2 bg-amber-950/80 border-2 border-amber-500/80 px-4 py-2 rounded-xl text-xs sm:text-sm font-serif font-bold text-amber-300 mb-8 shadow-xl uppercase tracking-widest">
            <span className="text-base">🏰</span>
            <span>EDAD IMPERIAL • CIVILIZACIÓN BACKEND PHP</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl font-black text-amber-100 mb-4 tracking-wider uppercase font-serif drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
            MARTIN <span className="aoe-gold-text">GONZALEZ</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-amber-200/90 max-w-3xl mx-auto mb-8 leading-relaxed font-serif tracking-wide">
            Desarrollador Full Stack JR enfocado en backend con <strong className="text-amber-400 font-bold">PHP (Laravel & CodeIgniter)</strong>, edificando lógica robusta e interfaces funcionales con <strong className="text-amber-300 font-bold">Vue.js, Tailwind y Bootstrap</strong>.
          </p>

          {/* Interactive AoE2 Sound/Taunt Bar */}
          <div className="mb-10 flex flex-wrap justify-center items-center gap-2">
            <span className="text-xs font-mono text-amber-500 uppercase tracking-widest mr-2">Probar Taunts AoE2:</span>
            {taunts.map((t) => (
              <button
                key={t.code}
                onClick={() => handleTaunt(t.message)}
                className="bg-stone-900/90 hover:bg-amber-900/60 border border-amber-700/60 hover:border-amber-400 text-amber-300 text-xs font-mono px-3 py-1.5 rounded-lg shadow transition-all active:scale-95 flex items-center gap-1.5"
              >
                <span>🔊</span>
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#proyectos"
              className="w-full sm:w-auto bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 hover:from-amber-400 hover:to-amber-700 text-amber-950 font-extrabold px-8 py-3.5 rounded-xl shadow-2xl transition-all duration-300 text-center uppercase tracking-wider font-serif border-2 border-amber-300/80 flex items-center justify-center gap-2"
            >
              <span>⚔️ Explorar Maravillas</span>
            </a>

            <a
              href="https://wa.me/542613440973"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-950/80 hover:bg-emerald-900/90 border-2 border-emerald-500/70 text-emerald-300 font-extrabold px-8 py-3.5 rounded-xl transition-all duration-300 text-center uppercase tracking-wider font-serif flex items-center justify-center gap-2"
            >
              <span>📜 Mensaje por WhatsApp</span>
            </a>

            <a
              href="#contacto"
              className="w-full sm:w-auto bg-stone-900/90 hover:bg-stone-800 border-2 border-amber-700/60 text-amber-200 font-extrabold px-8 py-3.5 rounded-xl transition-all duration-300 text-center uppercase tracking-wider font-serif"
            >
              ✉️ Enviar Pergamino
            </a>
          </div>
        </div>
      </section>

      {/* About & Timeline Section */}
      <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-amber-800/60 relative bg-[#120f0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-100 tracking-wider uppercase font-serif mb-3">
              🛡️ Campañas & Historia de Guerra
            </h2>
            <p className="text-amber-300/80 max-w-2xl mx-auto text-sm font-serif">
              "Wololo! Me enfoco en resolver problemas de código con lógica limpia, estructura sólida y desarrollo eficiente."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Story Card */}
            <div className="bg-[#1c1917]/90 border-2 border-amber-800/70 p-8 rounded-2xl space-y-4 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-2 border-b border-amber-800/60 pb-3">
                <span className="text-2xl">📜</span>
                <h3 className="text-xl font-bold text-amber-200 font-serif uppercase tracking-wide">Filosofía de Desarrollo</h3>
              </div>
              <p className="text-amber-100/90 text-sm leading-relaxed font-sans">
                Hace un tiempo que estoy dedicado al desarrollo web full-stack. No me quedo solo con que las cosas "funcionen", sino que busco que el código sea prolijo y la lógica de fondo altamente eficiente.
              </p>
              <p className="text-amber-100/90 text-sm leading-relaxed font-sans">
                Actualmente estudio la <strong className="text-amber-300">Licenciatura en Sistemas</strong> y trabajo día a día con <strong className="text-amber-300">Laravel y CodeIgniter</strong>. En Necta y DigitalTex me encargo de que los sistemas no solo aguanten el uso constante, sino que mejoren en cada iteración.
              </p>
              <div className="pt-4 border-t border-amber-800/60 flex flex-wrap gap-3">
                <span className="text-xs bg-amber-950/80 text-amber-300 border border-amber-700/60 px-3 py-1 rounded-md font-mono">
                  📍 Reino: Mendoza, Argentina
                </span>
                <span className="text-xs bg-amber-950/80 text-amber-300 border border-amber-700/60 px-3 py-1 rounded-md font-mono">
                  🎓 Academia: Univ. Champagnat
                </span>
              </div>
            </div>

            {/* Campaign Timeline */}
            <div className="bg-[#1c1917]/90 border-2 border-amber-800/70 p-8 rounded-2xl shadow-2xl relative">
              <div className="flex items-center gap-3 mb-6 border-b border-amber-800/60 pb-3">
                <span className="text-2xl">⚔️</span>
                <h3 className="text-xl font-bold text-amber-200 font-serif uppercase tracking-wide">Campañas de Experiencia</h3>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-amber-800/60">
                {/* Necta */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-950" />
                  <h4 className="text-base font-bold text-amber-100 font-serif">Desarrollador Full Stack</h4>
                  <p className="text-amber-400 text-xs font-semibold font-serif">Necta • Enero 2026 - Presente</p>
                  <p className="text-stone-300 text-xs mt-1 leading-relaxed font-sans">
                    Jornada completa • Presencial (Mendoza). Desarrollo de lógica backend con Laravel, refactorizaciones con jQuery, gestión de bases de datos y entrega de producto.
                  </p>
                </div>

                {/* Digitaltex */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-amber-600 ring-4 ring-amber-950" />
                  <h4 className="text-base font-bold text-amber-100 font-serif">Desarrollador Full Stack</h4>
                  <p className="text-amber-400 text-xs font-semibold font-serif">DigitalTex • Octubre 2024 - Diciembre 2025</p>
                  <p className="text-stone-300 text-xs mt-1 leading-relaxed font-sans">
                    1 año 3 meses • Remoto. Desarrollo y mantenimiento de sistema web a medida utilizando PHP y CodeIgniter para optimizar procesos internos, inventario y experiencia del cliente (MySQL, Vue.js).
                  </p>
                </div>

                {/* P&L Corp */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-amber-700 ring-4 ring-amber-950" />
                  <h4 className="text-base font-bold text-amber-100 font-serif">Digitalizador</h4>
                  <p className="text-amber-400 text-xs font-semibold font-serif">P&L CORP. • Noviembre 2024 - Enero 2025</p>
                  <p className="text-stone-300 text-xs mt-1 leading-relaxed font-sans">
                    Digitalización y archivo de documentos corporativos con escáners y Adobe Acrobat.
                  </p>
                </div>

                {/* Educación */}
                <div className="relative pl-8">
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-amber-800 ring-4 ring-amber-950" />
                  <h4 className="text-base font-bold text-amber-100 font-serif">Licenciatura en Sistemas de Información</h4>
                  <p className="text-amber-400 text-xs font-semibold font-serif">Universidad Champagnat • Mar 2021 - Presente</p>
                  <p className="text-stone-300 text-xs mt-1 leading-relaxed font-sans">
                    Formación universitaria en estructuras de datos, diseño de software, bases de datos y redes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Tree */}
          <div>
            <h3 className="text-2xl font-extrabold text-amber-200 mb-8 text-center uppercase font-serif tracking-wider">
              🪵 Árbol de Tecnologías & Recursos
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillTree.map((group, index) => (
                <div
                  key={index}
                  className="bg-[#1c1917]/90 border-2 border-amber-800/60 p-6 rounded-xl shadow-xl hover:border-amber-500 transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-4 border-b border-amber-800/40 pb-2">
                    <span className="text-xl">{group.icon}</span>
                    <h4 className="text-sm font-bold text-amber-200 font-serif">{group.category}</h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="bg-black/60 border border-amber-700/40 text-amber-300 text-xs font-mono px-2.5 py-1 rounded hover:bg-amber-900/60 hover:text-amber-100 transition-all"
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
      <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-amber-800/60 bg-[#0c0a09]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-100 tracking-wider uppercase font-serif mb-3">
              🏰 Maravillas & Edificaciones
            </h2>
            <p className="text-amber-300/80 max-w-2xl mx-auto text-sm font-serif">
              Proyectos backend y full-stack construidos con Laravel, CodeIgniter y PHP.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-lg text-xs font-serif font-bold uppercase tracking-wider transition-all duration-200 border-2 ${
                    activeFilter === cat
                      ? "bg-amber-600 border-amber-300 text-amber-950 shadow-lg"
                      : "bg-stone-900/80 border-amber-800/60 text-amber-300 hover:text-amber-100 hover:bg-stone-800"
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
      <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#120f0d]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-100 tracking-wider uppercase font-serif mb-3">
              ✉️ Mensajería & Alianzas
            </h2>
            <p className="text-amber-300/80 max-w-xl mx-auto text-sm font-serif">
              ¿Buscás a alguien que se ponga la camiseta del proyecto y resuelva? ¡Despacha tu pergamino!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            {/* Info Cards */}
            <div className="md:col-span-2 space-y-4">
              <div className="bg-[#1c1917]/90 border-2 border-amber-800/60 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-950 border border-amber-600/60 text-amber-400 rounded-lg text-lg">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-200 text-sm font-serif">Ubicación del Reino</h4>
                    <p className="text-stone-300 text-xs mt-0.5">Mendoza, Argentina</p>
                    <p className="text-xs text-amber-400 mt-1">Presencial / Remoto</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1c1917]/90 border-2 border-amber-800/60 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-950 border border-amber-600/60 text-amber-400 rounded-lg text-lg">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-200 text-sm font-serif">Correo Directo</h4>
                    <a
                      href="mailto:Martinegs2012@gmail.com"
                      className="text-stone-300 hover:text-amber-400 text-xs transition-colors block mt-0.5"
                    >
                      Martinegs2012@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#1c1917]/90 border-2 border-amber-800/60 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-950 border border-emerald-600/60 text-emerald-400 rounded-lg text-lg">
                    📱
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-200 text-sm font-serif">WhatsApp Mensajero</h4>
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



