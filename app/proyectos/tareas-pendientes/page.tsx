import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TareasPendientesCaseStudy() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <Header />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-8 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full"
        >
          <span>← VOLVER A PROYECTOS</span>
        </Link>

        {/* Header Title */}
        <div className="mb-10">
          <span className="bg-cyan-600/90 text-slate-950 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
            Laravel & PHP 8.1+
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-100 mt-4 mb-4 tracking-tight font-mono">
            Sistema de Gestión de Tareas Pendientes
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">
            Caso de estudio detallado sobre el diseño, arquitectura backend y desarrollo de una aplicación web para la administración organizada de tareas con estadísticas en tiempo real.
          </p>
        </div>

        {/* Cover Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-cyan-500/20 mb-12 shadow-2xl bg-slate-900">
          <Image
            src="/projects/tareas.png"
            alt="Sistema de Gestión de Tareas Pendientes"
            fill
            className="object-cover"
          />
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <section className="cyber-panel p-6 rounded-2xl border border-slate-800 bg-slate-950/80">
              <h2 className="text-lg font-bold text-gray-100 mb-3 font-mono">Descripción General</h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                Esta aplicación fue concebida para brindar una experiencia ágil en la creación, priorización, filtrado y seguimiento de tareas corporativas o personales. Desarrollada con Laravel en PHP 8+, aprovecha Blade templates y Bootstrap 5 para una interfaz limpia, veloz e intuitiva.
              </p>
            </section>

            <section className="cyber-panel p-6 rounded-2xl border border-slate-800 bg-slate-950/80">
              <h2 className="text-lg font-bold text-gray-100 mb-4 font-mono">Características Clave</h2>
              <ul className="space-y-3 text-gray-300 text-sm list-disc list-inside">
                <li><strong className="text-cyan-300">CRUD Completo:</strong> Creación, edición, completado y eliminación de tareas.</li>
                <li><strong className="text-cyan-300">Búsqueda y Filtros Dinámicos:</strong> Filtrado por estado (Pendiente, En Proceso, Completada) y categoría.</li>
                <li><strong className="text-cyan-300">Dashboard Estadístico:</strong> Métricas de rendimiento e indicadores de completitud.</li>
                <li><strong className="text-cyan-300">Validaciones Robustas:</strong> Validación tanto en cliente como en backend con mensajes amigables.</li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <div className="cyber-panel p-6 rounded-2xl border border-slate-800 bg-slate-950/80 font-mono">
              <h3 className="text-xs font-bold uppercase text-cyan-400 tracking-wider mb-4 border-b border-slate-800 pb-2">
                // FICHA TÉCNICA
              </h3>
              <div className="space-y-4 text-xs">
                <div>
                  <span className="block text-slate-500">Tecnologías Backend</span>
                  <span className="font-medium text-gray-200">PHP 8.1+, Laravel, SQLite</span>
                </div>
                <div>
                  <span className="block text-slate-500">Frontend & UI</span>
                  <span className="font-medium text-gray-200">Bootstrap 5, Blade, CSS3</span>
                </div>
                <div>
                  <span className="block text-slate-500">Repositorio</span>
                  <a
                    href="https://github.com/martinegs/notasLaravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ver en GitHub</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="cyber-panel p-6 rounded-2xl border border-cyan-500/30 bg-slate-950/90 text-center font-mono">
              <h4 className="font-bold text-gray-100 mb-2 text-xs uppercase">// CÓDIGO FUENTE</h4>
              <p className="text-xs text-slate-400 mb-4 font-sans">Accedé al repositorio abierto en GitHub para revisar la estructura de controladores y migraciones.</p>
              <a
                href="https://github.com/martinegs/notasLaravel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-600 hover:bg-cyan-500 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-lg transition-all shadow-md uppercase tracking-wider"
              >
                Ver Repositorio
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

