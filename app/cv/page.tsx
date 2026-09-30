import Link from "next/link";
import { Metadata } from "next";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "CV Martin Gonzalez | Desarrollador Backend PHP & Full Stack",
  description: "Curriculum Vitae optimizado para filtros ATS de Martin Gonzalez, Desarrollador Backend PHP (Laravel, CodeIgniter) y Full Stack en Mendoza, Argentina.",
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Action Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl"
        >
          <span>← Volver al Portafolio</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/CV_Martin_Gonzalez_Backend_PHP.pdf"
            download="CV_Martin_Gonzalez_Backend_PHP.pdf"
            className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold font-mono text-xs px-5 py-2.5 rounded-xl shadow-lg transition flex items-center gap-2 uppercase tracking-wider"
          >
            <span>📥 Descargar CV (PDF)</span>
          </a>

          <PrintButton />
        </div>
      </div>

      {/* Printable ATS CV Container */}
      <main className="max-w-4xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-2xl print:shadow-none print:p-0 print:m-0 print:max-w-none print:w-full">
        {/* Header / Personal Information */}
        <header className="border-b-2 border-slate-800 pb-6 mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight font-sans">
            MARTIN GONZALEZ
          </h1>
          <h2 className="text-lg sm:text-xl font-bold text-slate-700 mt-1 uppercase font-mono">
            Desarrollador Backend PHP | Laravel & CodeIgniter | Full Stack Developer
          </h2>

          {/* Contact Bar */}
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-700 font-sans">
            <div>
              <strong>Ubicación:</strong> Mendoza, Argentina
            </div>
            <div>
              <strong>Teléfono / WhatsApp:</strong>{" "}
              <a href="https://wa.me/542613440973" className="text-blue-700 hover:underline">
                +54 2613440973
              </a>
            </div>
            <div>
              <strong>Email:</strong>{" "}
              <a href="mailto:Martinegs2012@gmail.com" className="text-blue-700 hover:underline">
                Martinegs2012@gmail.com
              </a>
            </div>
            <div>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/martin-gonzalez7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                linkedin.com/in/martin-gonzalez7
              </a>
            </div>
            <div>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/martinegs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                github.com/martinegs
              </a>
            </div>
          </div>
        </header>

        {/* Section 1: Perfil Profesional */}
        <section className="mb-6">
          <h3 className="text-base font-bold text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2 font-mono tracking-wider">
            PERFIL PROFESIONAL
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
            Desarrollador Web especializado en desarrollo Backend con <strong>PHP (Laravel, CodeIgniter 4)</strong> e integración de aplicaciones Full-Stack con <strong>Vue.js, HTMX y MySQL</strong>. Experimentado en la creación de arquitecturas limpias MVC, optimización de consultas a bases de datos, desarrollo de APIs RESTful y refactorización de código legacy. Estudiante avanzado de la <strong>Licenciatura en Sistemas de Información</strong> en la Universidad Champagnat.
          </p>
        </section>

        {/* Section 2: Experiencia Laboral */}
        <section className="mb-6">
          <h3 className="text-base font-bold text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3 font-mono tracking-wider">
            EXPERIENCIA LABORAL
          </h3>

          <div className="space-y-4">
            {/* Job 1 */}
            <div>
              <div className="flex flex-wrap justify-between items-baseline">
                <h4 className="text-sm font-bold text-slate-900">
                  Desarrollador Full Stack — Necta
                </h4>
                <span className="text-xs text-slate-600 font-mono">Enero 2026 – Presente | Presencial (Mendoza, Argentina)</span>
              </div>
              <ul className="mt-1.5 list-disc list-outside ml-5 text-xs sm:text-sm text-slate-700 space-y-1">
                <li>Desarrollo de arquitectura backend, módulos de negocio y servicios RESTful utilizando <strong>Laravel y PHP 8+</strong>.</li>
                <li>Refactorización y modernización de componentes legacy con <strong>jQuery y JavaScript ES6+</strong> para mejorar el rendimiento del cliente.</li>
                <li>Diseño, gestión y optimización de bases de datos relacionales en <strong>MySQL</strong>, asegurando integridad de datos y tiempo de respuesta óptimo.</li>
              </ul>
            </div>

            {/* Job 2 */}
            <div>
              <div className="flex flex-wrap justify-between items-baseline">
                <h4 className="text-sm font-bold text-slate-900">
                  Desarrollador Full Stack — DigitalTex
                </h4>
                <span className="text-xs text-slate-600 font-mono">Octubre 2024 – Diciembre 2025 (1 año 3 meses) | Remoto</span>
              </div>
              <ul className="mt-1.5 list-disc list-outside ml-5 text-xs sm:text-sm text-slate-700 space-y-1">
                <li>Desarrollo y mantenimiento continuo de sistema web corporativo a medida implementando <strong>PHP 8 y CodeIgniter 4</strong> bajo arquitectura MVC.</li>
                <li>Automatización de procesos internos, control de inventario y desarrollo de interfaces dinámicas e interactivas utilizando <strong>Vue.js y MySQL</strong>.</li>
                <li>Optimización de consultas SQL complejas y diseño de modelos de datos eficientes para altas cargas de usuarios.</li>
              </ul>
            </div>

            {/* Job 3 */}
            <div>
              <div className="flex flex-wrap justify-between items-baseline">
                <h4 className="text-sm font-bold text-slate-900">
                  Digitalizador — P&L CORP.
                </h4>
                <span className="text-xs text-slate-600 font-mono">Noviembre 2024 – Enero 2025 (3 meses) | Mendoza, Argentina</span>
              </div>
              <ul className="mt-1.5 list-disc list-outside ml-5 text-xs sm:text-sm text-slate-700 space-y-1">
                <li>Digitalización, archivo estructurado y procesamiento de documentos corporativos manteniendo altos estándares de precisión e índices de búsqueda.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Educación */}
        <section className="mb-6">
          <h3 className="text-base font-bold text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2 font-mono tracking-wider">
            EDUCACIÓN Y FORMACIÓN ACADÉMICA
          </h3>
          <div className="flex flex-wrap justify-between items-baseline">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Licenciatura en Sistemas de Información
              </h4>
              <p className="text-xs text-slate-700">Universidad Champagnat — Mendoza, Argentina</p>
            </div>
            <span className="text-xs text-slate-600 font-mono">Marzo 2021 – Presente (En Curso)</span>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            Formación universitaria en Algoritmos y Estructuras de Datos, Arquitectura de Software, Bases de Datos Relacionales y Redes de Computadoras.
          </p>
        </section>

        {/* Section 4: Habilidades Técnicas */}
        <section className="mb-6">
          <h3 className="text-base font-bold text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2 font-mono tracking-wider">
            HABILIDADES TÉCNICAS
          </h3>
          <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 font-sans">
            <li>
              <strong>Lenguajes & Backend:</strong> PHP 8+, Laravel 10/11, CodeIgniter 4, APIs RESTful, Eloquent ORM, Arquitectura MVC.
            </li>
            <li>
              <strong>Frontend & UI:</strong> Vue.js 3, HTMX, JavaScript (ES6+), jQuery, Blade, Tailwind CSS, Bootstrap 5, HTML5, CSS3.
            </li>
            <li>
              <strong>Bases de Datos:</strong> MySQL, PostgreSQL, SQLite, diseño conceptual y lógico, optimización de consultas SQL.
            </li>
            <li>
              <strong>Herramientas & Entorno:</strong> Git, GitHub, Docker, Postman, Vite, Linux (Bash), Vercel.
            </li>
          </ul>
        </section>

        {/* Section 5: Proyectos Destacados */}
        <section>
          <h3 className="text-base font-bold text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3 font-mono tracking-wider">
            PROYECTOS DESTACADOS
          </h3>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700">
            <div>
              <div className="flex justify-between items-baseline">
                <strong className="text-slate-900 text-sm">Sistema de Monitoreo de Órdenes en Tiempo Real</strong>
                <span className="text-xs text-slate-500 font-mono">Laravel, Vue 3, SSE, MySQL</span>
              </div>
              <p className="mt-0.5 text-xs text-slate-700">
                Aplicación web full-stack para gestión de órdenes de servicio con actualización en tiempo real mediante Server-Sent Events (SSE), métricas financieras diarias, autenticación y filtros dinámicos.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <strong className="text-slate-900 text-sm">Sistema de Gestión de Tareas Pendientes</strong>
                <span className="text-xs text-slate-500 font-mono">Laravel 10/11, Bootstrap 5, SQLite</span>
              </div>
              <p className="mt-0.5 text-xs text-slate-700">
                Aplicación de gestión de tareas con CRUD completo, búsqueda dinámica, validaciones backend de alta seguridad e indicadores estadísticos de progreso.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <strong className="text-slate-900 text-sm">Plataforma de Red Social & Timeline</strong>
                <span className="text-xs text-slate-500 font-mono">Laravel, Blade, Eloquent, Tailwind</span>
              </div>
              <p className="mt-0.5 text-xs text-slate-700">
                Red social web con autenticación de usuarios, publicaciones en tiempo real, sistema de seguidores y timeline dinámico.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
