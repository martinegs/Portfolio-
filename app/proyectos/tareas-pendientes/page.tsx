import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TareasPendientesCaseStudy() {
  return (
    <div className="min-h-screen bg-[#090d16] text-gray-100 selection:bg-purple-500 selection:text-white">
      <Header />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors mb-8 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
        >
          <span>← Volver a proyectos</span>
        </Link>

        {/* Header Title */}
        <div className="mb-10">
          <span className="bg-purple-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Laravel & PHP 8.1+
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Sistema de Gestión de Tareas Pendientes
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            Caso de estudio detallado sobre el diseño, arquitectura backend y desarrollo de una aplicación web para la administración organizada de tareas con estadísticas en tiempo real.
          </p>
        </div>

        {/* Cover Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-white/10 mb-12 shadow-2xl">
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
            <section className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-3">Descripción General</h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                Esta aplicación fue concebida para brindar una experiencia ágil en la creación, priorización, filtrado y seguimiento de tareas corporativas o personales. Desarrollada con Laravel en PHP 8+, aprovecha Blade templates y Bootstrap 5 para una interfaz limpia, veloz e intuitiva.
              </p>
            </section>

            <section className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-4">Características Clave</h2>
              <ul className="space-y-3 text-gray-300 text-sm list-disc list-inside">
                <li><strong className="text-purple-300">CRUD Completo:</strong> Creación, edición, completado y eliminación de tareas.</li>
                <li><strong className="text-purple-300">Búsqueda y Filtros Dinámicos:</strong> Filtrado por estado (Pendiente, En Proceso, Completada) y categoría.</li>
                <li><strong className="text-purple-300">Dashboard Estadístico:</strong> Métricas de rendimiento e indicadores de completitud.</li>
                <li><strong className="text-purple-300">Validaciones Robustas:</strong> Validación tanto en cliente como en backend con mensajes amigables.</li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
              <h3 className="text-sm font-semibold uppercase text-gray-400 tracking-wider mb-4">
                Ficha Técnica
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-xs text-gray-500">Tecnologías Backend</span>
                  <span className="font-medium text-white">PHP 8.1+, Laravel, SQLite</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500">Frontend & UI</span>
                  <span className="font-medium text-white">Bootstrap 5, Blade, CSS3</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500">Repositorio</span>
                  <a
                    href="https://github.com/martinegs/notasLaravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ver en GitHub</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/20 p-6 rounded-2xl text-center">
              <h4 className="font-semibold text-white mb-2 text-sm">¿Te interesa ver el código?</h4>
              <p className="text-xs text-gray-400 mb-4">Accedé al repositorio abierto en GitHub para revisar la estructura de controladores y migraciones.</p>
              <a
                href="https://github.com/martinegs/notasLaravel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md"
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
