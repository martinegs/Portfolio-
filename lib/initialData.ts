export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  hideGithub?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  location?: string;
  mode?: string;
  type: "job" | "education";
}

export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  items: string[];
}

export const initialProjects: Project[] = [
  {
    id: "1",
    title: "Sistema de Monitoreo de Órdenes en Tiempo Real",
    description: "Aplicación web full-stack para gestión y monitoreo de órdenes de servicio con sincronización en tiempo real vía Server-Sent Events (SSE), CRUD completo, métricas financieras diarias y dashboard interactivo. Autenticación con migración automática y filtros de pago.",
    technologies: ["PHP", "Laravel", "Vue 3", "MySQL", "SSE", "Vite"],
    category: "Full-Stack",
    image: "/projects/ordenestiemporeal.png",
    githubUrl: "https://github.com/martinegs/os-live-vue"
  },
  {
    id: "2",
    title: "Sistema de Gestión de Tareas Pendientes",
    description: "Aplicación web full-stack para gestión de tareas con CRUD completo, filtros avanzados, búsqueda en tiempo real e indicadores estadísticos. Interfaz responsiva desarrollada en Laravel 10/11 con Bootstrap 5.",
    technologies: ["Laravel", "PHP 8.1+", "Bootstrap 5", "SQLite", "Blade"],
    category: "Full-Stack",
    image: "/projects/tareas.png",
    githubUrl: "https://github.com/martinegs/notasLaravel",
    caseStudyUrl: "/proyectos/tareas-pendientes"
  },
  {
    id: "3",
    title: "Plataforma de Red Social & Timeline",
    description: "Red social web inspirada en Twitter desarrollada en Laravel que permite autenticación de usuarios, publicaciones en tiempo real, sistema de seguidores, likes y gestión de perfil personalizado.",
    technologies: ["Laravel", "Blade", "Eloquent ORM", "SQLite", "Tailwind CSS", "Vite"],
    category: "Full-Stack",
    image: "/projects/redSocial.png",
    githubUrl: "https://github.com/martinegs/redSocial"
  },
  {
    id: "4",
    title: "Plataforma eCommerce para Supermercado",
    description: "Sistema completo de eCommerce para supermercado con catálogo de productos, gestión de carrito de compras en sesión y procesamiento de pedidos. Incluye productos reales con catálogo en ARS.",
    technologies: ["Laravel", "PHP", "SQLite", "Bootstrap", "Blade"],
    category: "Backend",
    image: "/projects/supermercado.png",
    githubUrl: "https://github.com/martinegs/ecommerceLaravel"
  },
  {
    id: "5",
    title: "Optimización & Refactorización de ERP Corporativo",
    description: "Desarrollo freelance en equipo: actualización y optimización de un sistema ERP corporativo existente, incorporando nuevas funcionalidades, refactorización de lógica backend y mejor experiencia del usuario.",
    technologies: ["PHP", "jQuery", "Bootstrap", "MySQL"],
    category: "Backend",
    image: "/projects/dashboard-erp.png",
    hideGithub: true
  }
];

export const initialExperiences: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Desarrollador Full Stack",
    company: "Necta",
    period: "Ene 2026 - Presente",
    description: "Jornada completa • Presencial (Mendoza). Desarrollo de lógica backend con Laravel, refactorizaciones con jQuery, gestión y optimización de bases de datos MySQL.",
    location: "Mendoza, Argentina",
    mode: "Presencial",
    type: "job"
  },
  {
    id: "exp-2",
    title: "Desarrollador Full Stack",
    company: "DigitalTex",
    period: "Oct 2024 - Dic 2025 (1 año 3 meses)",
    description: "Remoto. Desarrollo y mantenimiento de sistema web a medida utilizando PHP y CodeIgniter para optimizar procesos internos, inventario y experiencia del usuario (MySQL, Vue.js).",
    location: "Remoto",
    mode: "Remoto",
    type: "job"
  },
  {
    id: "exp-3",
    title: "Digitalizador",
    company: "P&L CORP.",
    period: "Nov 2024 - Ene 2025 (3 meses)",
    description: "Digitalización y organización de documentación corporativa.",
    location: "Mendoza, Argentina",
    mode: "Presencial",
    type: "job"
  },
  {
    id: "exp-4",
    title: "Licenciatura en Sistemas de Información",
    company: "Universidad Champagnat",
    period: "Mar 2021 - Presente",
    description: "Formación de grado en arquitectura de software, bases de datos, redes y algoritmos.",
    location: "Mendoza, Argentina",
    mode: "Presencial",
    type: "education"
  }
];

export const initialSkills: SkillCategory[] = [
  {
    id: "skill-1",
    category: "Backend Development",
    icon: "⚡",
    items: ["PHP 8+", "Laravel", "CodeIgniter", "APIs RESTful", "Arquitectura MVC"]
  },
  {
    id: "skill-2",
    category: "Frontend & UI",
    icon: "🎨",
    items: ["Vue.js", "HTMX", "JavaScript (ES6+)", "jQuery", "Tailwind CSS", "Bootstrap"]
  },
  {
    id: "skill-3",
    category: "Bases de Datos",
    icon: "🗄️",
    items: ["MySQL", "PostgreSQL", "SQLite", "Eloquent ORM"]
  },
  {
    id: "skill-4",
    category: "Herramientas & Entorno",
    icon: "🛠️",
    items: ["Git & GitHub", "Docker", "Postman", "Vite", "Linux"]
  }
];
