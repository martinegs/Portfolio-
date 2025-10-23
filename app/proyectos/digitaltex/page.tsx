import Link from "next/link";
import Image from "next/image";

export default function DigitalTexCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/#proyectos" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Volver a Proyectos
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sistema de Gestión DigitalTex
        </h1>
        
        {/* Meta info */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            PHP
          </span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
            CodeIgniter
          </span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
            MySQL
          </span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
            jQuery
          </span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
            Bootstrap
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-12">
          <a
            href="https://github.com/martinegs/proyecto1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Ver Código en GitHub
          </a>
        </div>

        {/* Project Image */}
        <div className="relative h-96 bg-gray-200 rounded-lg mb-12">
          <Image
            src="/projects/project1.jpg"
            alt="Sistema de Gestión DigitalTex"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Sections */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">El Problema</h2>
          <p className="text-gray-600 mb-8">
            DigitalTex necesitaba un sistema interno robusto para gestionar sus operaciones
            textiles, incluyendo control de inventario, procesamiento de pedidos y generación
            de reportes. El sistema anterior era manual y propenso a errores, lo que causaba
            ineficiencias en la operación diaria.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">La Solución</h2>
          <p className="text-gray-600 mb-4">
            Desarrollé y mantuve un sistema de gestión integral que automatiza los procesos
            clave de la empresa:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li>
              <strong>Gestión de Inventario:</strong> Control en tiempo real de stock de
              materiales y productos terminados.
            </li>
            <li>
              <strong>Procesamiento de Pedidos:</strong> Sistema completo de seguimiento de
              pedidos desde su creación hasta la entrega.
            </li>
            <li>
              <strong>Generación de Reportes:</strong> Dashboard con métricas clave y reportes
              exportables en PDF/Excel.
            </li>
            <li>
              <strong>Gestión de Usuarios:</strong> Sistema de roles y permisos para diferentes
              niveles de acceso.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stack Tecnológico</h2>
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• PHP 7</li>
                  <li>• CodeIgniter 3</li>
                  <li>• MySQL</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Vue.js (para componentes interactivos)</li>
                  <li>• jQuery</li>
                  <li>• Bootstrap 4</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Herramientas</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Git (Control de versiones)</li>
                  <li>• Docker (Entornos de desarrollo)</li>
                  <li>• Composer</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Desafíos y Aprendizaje</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-gray-700 mb-4">
              <strong>Desafío Principal:</strong> Migrar datos del sistema antiguo sin interrumpir
              las operaciones diarias.
            </p>
            <p className="text-gray-700">
              <strong>Solución:</strong> Implementé un script de migración por fases que permitía
              validar los datos antes de la migración definitiva. Usé transacciones de base de
              datos para garantizar la integridad de los datos y creé un sistema de rollback
              en caso de errores.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
            <p className="text-gray-700 mb-4">
              <strong>Lección Aprendida:</strong> La importancia de escribir código mantenible
              y documentado.
            </p>
            <p className="text-gray-700">
              Al trabajar en un sistema que evoluciona constantemente, aprendí que el código
              limpio y bien documentado facilita enormemente las futuras mejoras y el trabajo
              en equipo.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resultados</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-3xl font-bold text-blue-600 mb-2">40%</p>
              <p className="text-gray-600">Reducción en tiempo de procesamiento de pedidos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-3xl font-bold text-blue-600 mb-2">95%</p>
              <p className="text-gray-600">Precisión en control de inventario</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-3xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-gray-600">Satisfacción del equipo interno</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">¿Interesado en trabajar juntos?</h3>
          <Link
            href="/#contacto"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contáctame
          </Link>
        </div>
      </article>
    </div>
  );
}
