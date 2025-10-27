import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

export default function Home() {
  // Datos de proyectos (puedes modificarlos según tus proyectos reales)
  const projects = [
    {
      title: "Sistema de Monitoreo de Órdenes en Tiempo Real",
      description: "Aplicación web full-stack para gestión y monitoreo de órdenes de servicio con sincronización en tiempo real vía SSE, CRUD completo, métricas financieras diarias, análisis de recaudación y dashboard interactivo. Incluye autenticación con migración automática de contraseñas legacy, filtros avanzados y visualización de estados de pago.",
      technologies: ["Node.js", "Express", "Vue 3", "MySQL", "SSE", "JWT", "Vite"],
      image: "/projects/ordenestiemporeal.png",
      githubUrl: "https://github.com/martinegs/os-live-vue"
    },
    {
      title: "Sistema de Gestión de Tareas Pendientes",
      description: "Aplicación web full-stack para gestión de tareas con CRUD completo, filtros avanzados, búsqueda en tiempo real y dashboard con estadísticas. Interfaz moderna y responsiva con validación robusta.",
      technologies: ["Laravel", "PHP 8.1+", "Bootstrap 5", "SQLite", "Blade"],
      image: "/projects/tareas.png",
      githubUrl: "https://github.com/martinegs/notasLaravel",
      caseStudyUrl: "/proyectos/tareas-pendientes"
    },
    {
      title: "Red Social tipo Twitter",
      description: "Red social web tipo Twitter, desarrollada en Laravel, que permite a los usuarios registrarse, publicar mensajes, seguir a otros, dar 'me gusta' y gestionar su perfil. Incluye autenticación, timeline personalizado, sistema de seguidores, subida de imágenes, y panel de usuario. Todo el sistema está completamente en español y cuenta con interfaz responsiva y profesional.",
      technologies: ["Laravel", "Blade", "Eloquent ORM", "SQLite", "Tailwind CSS", "Vite"],
      image: "/projects/redSocial.png",
      githubUrl: "https://github.com/martinegs/redSocial"
    },
    {
      title: "Supermercado Online",
      description: "Sistema completo de eCommerce para supermercado con catálogo de productos, carrito de compras y gestión de pedidos. Incluye 44 productos reales con precios en pesos argentinos.",
      technologies: ["Laravel", "PHP", "SQLite", "Bootstrap", "Blade"],
      image: "/projects/supermercado.png",
      githubUrl: "https://github.com/martinegs/ecommerceLaravel"
    },
  ];

  const skills = [
    { category: "Backend", items: ["PHP", "Laravel", "CodeIgniter", "Node.js", "Express"] },
    { category: "Frontend", items: ["Vue.js", "JavaScript", "jQuery", "HTML5", "CSS3"] },
    { category: "Bases de Datos", items: ["MySQL", "MongoDB"] },
    { category: "Herramientas", items: ["Git", "Docker", "Postman", "VS Code"] },
    { category: "Frameworks CSS", items: ["Tailwind CSS", "Bootstrap"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Martin Gonzalez
            </h1>
            <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
              Desarrollador Full Stack JR
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Especializado en desarrollo backend con PHP (Laravel, CodeIgniter) y Node.js.
              Creando soluciones eficientes y escalables para la web.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#proyectos"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Ver Proyectos
              </a>
              <a
                href="/Curriculum%20Martin.pdf"
                download
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Descargar CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/martinegs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/martin-gonzalez7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="mailto:Martinegs2012@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Sobre Mí
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Story */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mi Historia</h3>
              <p className="text-gray-600 mb-4">
                Soy un estudiante de la Licenciatura en Sistemas con una sólida pasión por el
                desarrollo backend. Mi viaje en la programación comenzó con la curiosidad de
                entender cómo funcionan las aplicaciones web, y desde entonces he estado
                constantemente aprendiendo y aplicando nuevas tecnologías.
              </p>
              <p className="text-gray-600 mb-4">
                Actualmente trabajo en DigitalTex, donde contribuyo al mantenimiento y evolución
                de su sistema de gestión interno, implementando nuevas funcionalidades y
                optimizando procesos tanto en backend como en frontend.
              </p>
              <p className="text-gray-600">
                Mi enfoque está en crear soluciones eficientes y escalables, siempre buscando
                las mejores prácticas y manteniendo un código limpio y mantenible.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Experiencia</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900">Desarrollador Web</h4>
                  <p className="text-blue-600 font-medium">DigitalTex</p>
                  <p className="text-gray-500 text-sm mb-2">Octubre 2024 - Presente</p>
                  <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                    <li>Desarrollo con CodeIgniter y PHP 7</li>
                    <li>Optimización de procesos backend y frontend</li>
                    <li>Integración con Vue.js, jQuery y Bootstrap</li>
                    <li>Gestión de versiones con Git y Docker</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900">Educación</h4>
                  <p className="text-gray-700 font-medium">Licenciatura en Sistemas</p>
                  <p className="text-gray-500 text-sm">Universidad Champagnat | 2021 - Presente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Habilidades Técnicas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
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
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Una selección de mis proyectos más relevantes que demuestran mis habilidades
            en desarrollo full-stack y resolución de problemas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Contacto
          </h2>
          <p className="text-gray-600 text-center mb-12">
            ¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría saber de ti!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Ubicación</h4>
                    <p className="text-gray-600">Mendoza, Argentina</p>
                    <p className="text-sm text-gray-500">Abierto a reubicación</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a href="mailto:Martinegs2012@gmail.com" className="text-blue-600 hover:underline">
                      Martinegs2012@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Teléfono</h4>
                    <a href="tel:+542613440973" className="text-blue-600 hover:underline">
                      +54 2613440973
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-gray-900 mb-4">Sígueme en:</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/martinegs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/martin-gonzalez7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Envíame un Mensaje
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
