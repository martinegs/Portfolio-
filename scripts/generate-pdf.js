const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

async function generateATSPDF() {
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage([595.28, 841.89]); // Standard A4

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const { height } = page.getSize();
  let y = height - 40;
  const margin = 40;
  const contentWidth = 515;

  const colorBlack = rgb(0.1, 0.1, 0.1);
  const colorGray = rgb(0.3, 0.3, 0.3);
  const colorDarkGray = rgb(0.2, 0.2, 0.2);

  function drawText(text, x, currentY, size = 10, isBold = false, isItalic = false, color = colorBlack) {
    const fontToUse = isBold ? fontBold : isItalic ? fontOblique : font;
    page.drawText(text, {
      x,
      y: currentY,
      size,
      font: fontToUse,
      color,
    });
  }

  function drawDivider(currentY) {
    page.drawLine({
      start: { x: margin, y: currentY },
      end: { x: margin + contentWidth, y: currentY },
      thickness: 0.8,
      color: rgb(0.7, 0.7, 0.7),
    });
  }

  // --- HEADER ---
  drawText("MARTIN GONZALEZ", margin, y, 22, true, false, colorBlack);
  y -= 16;
  drawText("DESARROLLADOR BACKEND PHP | LARAVEL & CODEIGNITER | FULL STACK", margin, y, 10, true, false, colorDarkGray);
  y -= 14;
  drawText("Ubicación: Mendoza, Argentina  |  Tel: +54 2613440973  |  Email: Martinegs2012@gmail.com", margin, y, 8.5, false, false, colorGray);
  y -= 12;
  drawText("LinkedIn: linkedin.com/in/martin-gonzalez7  |  GitHub: github.com/martinegs", margin, y, 8.5, false, false, colorGray);
  y -= 14;

  drawDivider(y);
  y -= 16;

  // --- SECTION 1: PERFIL PROFESIONAL ---
  drawText("PERFIL PROFESIONAL", margin, y, 11, true, false, colorBlack);
  y -= 14;

  const profileLines = [
    "Desarrollador Web especializado en desarrollo Backend con PHP (Laravel, CodeIgniter 4) e integración",
    "de aplicaciones Full-Stack con Vue.js, HTMX y MySQL. Experimentado en la creación de arquitecturas",
    "limpias MVC, optimización de consultas a bases de datos, desarrollo de APIs RESTful y refactorización",
    "de código legacy. Estudiante avanzado de la Licenciatura en Sistemas de Información en la Universidad Champagnat."
  ];

  for (const line of profileLines) {
    drawText(line, margin, y, 9, false, false, colorGray);
    y -= 12;
  }
  y -= 6;

  // --- SECTION 2: EXPERIENCIA LABORAL ---
  drawText("EXPERIENCIA LABORAL", margin, y, 11, true, false, colorBlack);
  y -= 14;

  // Job 1
  drawText("Desarrollador Full Stack — Necta", margin, y, 10, true, false, colorBlack);
  drawText("Ene 2026 – Presente | Presencial (Mendoza)", margin + 300, y, 8.5, false, true, colorGray);
  y -= 13;

  const job1Bullets = [
    "• Desarrollo de arquitectura backend, módulos de negocio y servicios RESTful utilizando Laravel y PHP 8+.",
    "• Refactorización y modernización de componentes legacy con jQuery y JavaScript ES6+.",
    "• Diseño, gestión y optimización de bases de datos relacionales en MySQL, asegurando respuesta rápida."
  ];
  for (const bullet of job1Bullets) {
    drawText(bullet, margin + 10, y, 8.5, false, false, colorGray);
    y -= 11.5;
  }
  y -= 6;

  // Job 2
  drawText("Desarrollador Full Stack — DigitalTex", margin, y, 10, true, false, colorBlack);
  drawText("Oct 2024 – Dic 2025 (1 año 3 meses) | Remoto", margin + 280, y, 8.5, false, true, colorGray);
  y -= 13;

  const job2Bullets = [
    "• Desarrollo y mantenimiento de sistema web corporativo a medida con PHP 8 y CodeIgniter 4 (MVC).",
    "• Automatización de procesos internos, control de inventario e interfaz dinámica con Vue.js y MySQL.",
    "• Optimización de consultas SQL complejas y diseño de modelos de datos eficientes para alta demanda."
  ];
  for (const bullet of job2Bullets) {
    drawText(bullet, margin + 10, y, 8.5, false, false, colorGray);
    y -= 11.5;
  }
  y -= 6;

  // Job 3
  drawText("Digitalizador — P&L CORP.", margin, y, 10, true, false, colorBlack);
  drawText("Nov 2024 – Ene 2025 (3 meses) | Mendoza", margin + 300, y, 8.5, false, true, colorGray);
  y -= 13;

  drawText("• Digitalización, archivo estructurado y procesamiento de documentos corporativos con alta precisión.", margin + 10, y, 8.5, false, false, colorGray);
  y -= 16;

  // --- SECTION 3: EDUCACIÓN ---
  drawText("EDUCACIÓN Y FORMACIÓN ACADÉMICA", margin, y, 11, true, false, colorBlack);
  y -= 14;

  drawText("Licenciatura en Sistemas de Información", margin, y, 10, true, false, colorBlack);
  drawText("Mar 2021 – Presente (En Curso)", margin + 320, y, 8.5, false, true, colorGray);
  y -= 12;
  drawText("Universidad Champagnat — Mendoza, Argentina", margin, y, 8.5, false, false, colorGray);
  y -= 12;
  drawText("Formación universitaria en Algoritmos, Arquitectura de Software, Bases de Datos Relacionales y Redes.", margin, y, 8.5, false, true, colorGray);
  y -= 18;

  // --- SECTION 4: HABILIDADES TÉCNICAS ---
  drawText("HABILIDADES TÉCNICAS", margin, y, 11, true, false, colorBlack);
  y -= 14;

  const skillsList = [
    "Backend & Lenguajes: PHP 8+, Laravel 10/11, CodeIgniter 4, APIs RESTful, Eloquent ORM, MVC.",
    "Frontend & UI: Vue.js 3, HTMX, JavaScript (ES6+), jQuery, Blade, Tailwind CSS, Bootstrap 5.",
    "Bases de Datos: MySQL, PostgreSQL, SQLite, diseño de schemas y optimización de consultas SQL.",
    "Herramientas & Entorno: Git, GitHub, Docker, Postman, Vite, Linux (Bash), Vercel."
  ];

  for (const skill of skillsList) {
    drawText("• " + skill, margin + 5, y, 8.5, false, false, colorGray);
    y -= 12;
  }
  y -= 10;

  // --- SECTION 5: PROYECTOS DESTACADOS ---
  drawText("PROYECTOS DESTACADOS", margin, y, 11, true, false, colorBlack);
  y -= 14;

  // Project 1
  drawText("Sistema de Monitoreo de Órdenes en Tiempo Real", margin, y, 9.5, true, false, colorBlack);
  drawText("(Laravel, Vue 3, SSE, MySQL)", margin + 320, y, 8, false, true, colorGray);
  y -= 11;
  drawText("Aplicación web full-stack para gestión de órdenes de servicio con actualización vía Server-Sent Events,", margin + 10, y, 8.5, false, false, colorGray);
  y -= 11;
  drawText("métricas financieras diarias, autenticación y filtros dinámicos de pago.", margin + 10, y, 8.5, false, false, colorGray);
  y -= 14;

  // Project 2
  drawText("Sistema de Gestión de Tareas Pendientes", margin, y, 9.5, true, false, colorBlack);
  drawText("(Laravel 10/11, Bootstrap 5, SQLite)", margin + 320, y, 8, false, true, colorGray);
  y -= 11;
  drawText("Aplicación de gestión con CRUD completo, búsqueda en tiempo real, validaciones robustas y estadísticas.", margin + 10, y, 8.5, false, false, colorGray);

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  const publicPath = path.join(__dirname, "..", "public");
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath, { recursive: true });
  }
  const outputPath = path.join(publicPath, "CV_Martin_Gonzalez_Backend_PHP.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`✅ PDF generado exitosamente en: ${outputPath}`);
}

generateATSPDF().catch(console.error);
